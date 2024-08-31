import React, { useRef } from "react";
import styles from "./Form.module.css";
import Image from "next/image";
import toast from "react-hot-toast";

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = async () => {
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      subjectRef.current.value,
      messageRef.current.value
    );

    const data = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    if (!data.fullName || !data.email || !data.subject || !data.message) {
      toast("Complete the form before you send.", { icon: "🙂" });
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Message sent!", { icon: "✅" });
      } else {
        toast("Ooops! An error occured. Please try again", { icon: "🥺" });
      }
    } catch (error) {
      toast("Ooops! An error occured. Please try again", { icon: "🥺" });
    }
  };

  return (
    <div className={styles.contactCard}>
      <h2>Send your own message</h2>

      <div className={styles.cardBody}>
        <div className={styles.inputWrapper}>
          <span>
            Full Name <span className={styles.astericks}>*</span>
          </span>
          <input type="text" placeholder="Full Name" ref={nameRef} />
        </div>

        <div className={styles.inputWrapper}>
          <span>
            Email <span className={styles.astericks}>*</span>
          </span>
          <input type="email" placeholder="Email" ref={emailRef} />
        </div>

        <div className={styles.inputWrapper}>
          <span>
            Subject <span className={styles.astericks}>*</span>
          </span>
          <input type="text" placeholder="Subject" ref={subjectRef} />
        </div>

        <div className={styles.inputWrapper}>
          <span>
            Your message here <span className={styles.astericks}>*</span>
          </span>
          <textarea ref={messageRef} />
        </div>

        <button onClick={sendEmail}>
          Send
          <Image
            className={styles.sendIcon}
            src={"/static/icons/send-icon.svg"}
            height={20}
            width={20}
            alt="Send icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Form;

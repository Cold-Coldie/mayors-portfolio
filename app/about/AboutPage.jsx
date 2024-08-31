"use client";

import React, { useState } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Form from "./component/Form";

const AboutPage = () => {
  const AboutDetails = [
    { text: "Introduce yourself in few words", isQuestion: true },
    {
      text: "Hello! I'm Oyewumi Mayowa, a passionate and dedicated data analyst and scientist. My journey in data analytics started in 2021, and since then, I've accumulated over two years of experience in utilizing Python for various data-driven projects.",
      isQuestion: false,
    },
    { text: "Why Data?", isQuestion: true },
    {
      text: "My fascination with data stems from its immense potential to shape decisions and drive innovation. Beyond my love for data, I believe that having a solid grasp of data is not just an option but a necessity in today's world. We need better tools and strategies to handle data effectively, and I am committed to contributing to this cause.",
      isQuestion: false,
    },
    { text: "What are your Hobbies?", isQuestion: true },
    {
      text: "When I'm not immersed in coding or analyzing data, I find solace in nature. I am a conservation enthusiast who loves experiencing and preserving the beauty of the natural world. Additionally, I have a deep appreciation for art and enjoy observing beautiful works of art whenever I can.",
      isQuestion: false,
    },
    { text: "What experience do you have?", isQuestion: true },
    {
      text: "With over two years of hands-on experience in Python programming, I have developed a strong foundation in data analysis and scientific computing. My projects have ranged from data visualization to predictive modeling, and I am continually expanding my skill set to keep up with the ever-evolving field of data science.",
      isQuestion: false,
    },
    { text: "Are you open to new opportunitites?", isQuestion: true },
    {
      text: "I am actively seeking new opportunities where I can apply my skills and passion for data to solve real-world problems. I thrive in environments where I can tackle challenges head-on and work collaboratively to find solutions. My strong work ethic and dedication make me a reliable and enthusiastic team member.",
      isQuestion: false,
    },
  ];

  const [showToolTip, setShowToolTip] = useState(false);

  const copyEmail = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "mayorfele@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast("Email copied!", { icon: "✅" });
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <Toaster />

        <div>
          <div className={styles.imageWrapper}>
            <Image
              src={"/static/images/profile-picture.jpg"}
              width={406}
              height={406}
              alt="Mayor's Picture"
            />
          </div>

          <div className={styles.name}>Oyewumi Mayowa</div>

          {/* Download Resume Link */}
          <div className={styles.downloadResume}>
            <a href="/static/resume/Oyewumi-Mayowa-Resume.pdf" download>
              Download Resume
            </a>
          </div>

          <div className={styles.chatContainer}>
            {AboutDetails.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.isQuestion ? styles.question : styles.response
                }`}
              >
                <div
                  className={`${styles.messageBubble} ${
                    message.isQuestion
                      ? styles.questionBubble
                      : styles.responseBubble
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form />
          </div>

          <div className={styles.socialsWrapper}>
            <div>
              <div className={styles.socialsText}>
                There is so much we can do together. Follow me on...
              </div>

              <div className={styles.socials}>
                <div
                  onMouseOver={() => setShowToolTip(true)}
                  onMouseLeave={() => setShowToolTip(false)}
                >
                  {showToolTip && (
                    <div className={styles.tooltip}>
                      Click to copy E-mail id.
                    </div>
                  )}

                  <Image
                    src={"/static/icons/gmail.svg"}
                    width={60}
                    height={60}
                    alt="Gmail icon"
                    onClick={copyEmail}
                  />
                </div>

                <Link href={"https://github.com/Mayorfele"} target="_blank">
                  <Image
                    src={"/static/icons/github-with-border.svg"}
                    width={55}
                    height={55}
                    alt="Github icon"
                  />
                </Link>

                <Link
                  href={
                    "https://www.linkedin.com/in/mayowa-oyewumi-0b184023a/?trk=opento_sprofile_details"
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/linked-in.svg"}
                    width={55}
                    height={55}
                    alt="LinkedIn icon"
                  />
                </Link>

                <Link href={"tel:+2348056091398"}>
                  <Image
                    src={"/static/icons/phoneCall.svg"}
                    width={40}
                    height={40}
                    alt="Phone Call icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

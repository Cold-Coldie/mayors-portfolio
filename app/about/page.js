"use client";

import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const copyEmail = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "oluwatofunmiogedengbe@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast("Email copied!", { icon: "✅" });
  };

  return (
    <>
      <title>{"seoTitle"}</title>
      <meta name="description" content={"seoDescription"} />

      <div className={styles.pageContainer}>
        <Toaster />

        <div>
          <div className={styles.imageWrapper}>
            <Image
              src={"/static/images/MarketAnalysis/1.png"}
              width={406}
              height={406}
            />
          </div>

          <div className={styles.textWrapper}>
            <p> A Badass Data Analyst</p>
          </div>

          <div className={styles.socialsWrapper}>
            <div>
              <div className={styles.socialsText}>
                There is so much we can do together. Follow me on...
              </div>

              <div className={styles.socials}>
                <Link
                  href={
                    "https://x.com/oluwatofunmiog1?s=11&t=R5nxUjCAzbomhfDX7aiDOQ"
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/twitterX.svg"}
                    width={55}
                    height={55}
                    alt="Twitter X icon"
                  />
                </Link>

                <Image
                  src={"/static/icons/gmail.svg"}
                  width={60}
                  height={60}
                  alt="Gmail icon"
                  onClick={copyEmail}
                />

                <Link href={"tel:+2348171865641"}>
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

export default page;

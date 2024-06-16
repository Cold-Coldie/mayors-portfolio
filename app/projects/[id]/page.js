"use client";

import { useParams } from "next/navigation";
import React from "react";
import ProjectDetails from "../../data/ProjectDetails.json";
import Image from "next/image";
import styles from "./ProjectDetails.module.css";

const page = () => {
  const { id } = useParams();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeading}>{ProjectDetails?.[id]?.title}</div>

      <div className={styles.pageBody}>
        {ProjectDetails?.[id]?.body?.map((item, index) => (
          <div key={index} className={styles.individualWrapper}>
            <div className={styles.individualTitle}>{item?.title}</div>

            <div>{item?.body}</div>

            <div className={styles.individualImageWrapper}>
              {item?.images?.map((item2, index2) => (
                <Image
                  key={index2}
                  src={item2?.link}
                  width={item2?.width}
                  height={item2?.height}
                  alt={item2?.title || `Image ${index2 + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

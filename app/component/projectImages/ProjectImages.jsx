import Image from "next/image";
import React from "react";
import styles from "./ProjectImages.module.css";

const projectImages = [
  "/static/images/chart.jpeg",
  "/static/images/chart.jpeg",
  "/static/images/chart.jpeg",
];

const ProjectImages = () => {
  return (
    <div className={styles.ImagesWrapper}>
      {projectImages?.map((item, index) => (
        <div key={index}>
          <Image src={item} width={200} height={400} alt="Project Image" />
        </div>
      ))}
    </div>
  );
};

export default ProjectImages;

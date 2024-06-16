import React from "react";
import styles from "./ProjectsNav.module.css";
import Link from "next/link";

const projects = [
  { label: "Show all", link: "/projects" },
  { label: "Sport Analysis", link: "/projects/SportAnalysis" },
  { label: "Africa GDP Analysis", link: "/projects/AfricaGdpAnalysis" },
  { label: "Market Analysis", link: "/projects/MarketAnalysis" },
];

const ProjectsNav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectIntro}>
        A glimpse of the projects I've been working on
      </div>

      <div className={styles.projectsWrapper}>
        {projects?.map((item, index) => (
          <Link href={item?.link} key={index} className={styles.project}>
            {item?.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsNav;

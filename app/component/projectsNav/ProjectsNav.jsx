import React from "react";
import styles from "./ProjectsNav.module.css";

const projects = [
  { label: "Show all", link: "/projects" },
  { label: "World Cup Stats.", link: "/projects/world-cup" },
  { label: "Population Analysis", link: "/projects/population-analysis" },
  { label: "Group Analysis", link: "/projects/group-analysis" },
];

const ProjectsNav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectIntro}>
        A glimpse of the projects I've been working on
      </div>

      <div className={styles.projectsWrapper}>
        {projects?.map((item, index) => (
          <div key={index} className={styles.project}>
            {item?.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsNav;

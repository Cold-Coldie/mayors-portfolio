import React from "react";
import styles from "./ToolsNav.module.css";

const ToolsNav = () => {
  const tools = [
    "Python",
    "Numpy",
    "Pandas ",
    "Matplotlib",
    "Seaborne",
    "Plotly",
    "Scikit-learn",
    "Tensor flow ",
    "SQL",
    "Excel",
    "DASH",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.projectIntro}>Some of my favourite tools.</div>

      <div className={styles.projectsWrapper}>
        {tools?.map((item, index) => (
          <span key={index} className={styles.project}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolsNav;

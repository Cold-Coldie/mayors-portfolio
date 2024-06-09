import ProjectImages from "./component/projectImages/ProjectImages";
import ProjectsNav from "./component/projectsNav/ProjectsNav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.homeContent}>
        <div className={styles.pageTitle}>
          MAYOR'S PORTFOLIO
          <div className={styles.titleUnderline}></div>
        </div>

        <ProjectsNav />

        <ProjectImages />
      </div>
    </main>
  );
}

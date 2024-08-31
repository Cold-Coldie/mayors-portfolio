import ProjectsNav from "./component/projectsNav/ProjectsNav";
import ToolsNav from "./component/toolsNav/ToolsNav";
import styles from "./page.module.css";

export const metadata = {
  title: "Home Page | About Oyewumi Mayowa | Data Analyst & Scientist",
  description:
    "Learn more about Oyewumi Mayowa, a dedicated data analyst with over two years of experience in Python and data science.",
  keywords: "data analyst, data science, Python, Oyewumi Mayowa",
  icons: {
    icon: "/static/favicon.ico",
    shortcut: "/static/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Home Page | About Oyewumi Mayowa | Data Analyst & Scientist",
    description:
      "Discover the journey of Oyewumi Mayowa, a passionate data analyst and scientist.",
    url: "https://mayors-portfolio.netlify.app/",
    images: [
      {
        url: "/static/images/profile-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Oyewumi Mayowa Image",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@yourTwitterHandle",
  //   creator: "@yourTwitterHandle",
  //   title: "Home Page | Mayor's Portfolio",
  //   description: "Mayor's Portfolio Home Page",
  //   image: "/static/images/home-twitter-image.jpg",
  // },
};

export default function Home() {
  const pageTitle = "MAYOR'S PORTFOLIO";
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.homeContent}>
          <div className={styles.pageTitle}>
            {pageTitle}
            <div className={styles.titleUnderline}></div>
          </div>

          <ProjectsNav />

          <ToolsNav />
        </div>
      </main>
    </>
  );
}

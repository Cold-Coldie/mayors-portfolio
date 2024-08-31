import React from "react";
import styles from "./project.module.css";
import ProjectCard from "./component/projectCard/ProjectCard";

export const metadata = {
  title: "Projects Page | About Oyewumi Mayowa | Data Analyst & Scientist",
  description:
    "Learn more about Oyewumi Mayowa, a dedicated data analyst with over two years of experience in Python and data science.",
  keywords: "data analyst, data science, Python, Oyewumi Mayowa",
  icons: {
    icon: "/static/favicon.ico",
    shortcut: "/static/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Projects Page | About Oyewumi Mayowa | Data Analyst & Scientist",
    description:
      "Discover the journey of Oyewumi Mayowa, a passionate data analyst and scientist.",
    url: "https://mayor-portfolio.netlify.app/",
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

const page = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.projectHeadingWrapper}>
          <h2 className={styles.projectHeading}>Projects</h2>
        </div>

        <ProjectCard
          imageOne={"/static/images/MarketAnalysis/3.png"}
          imageTwo={"/static/images/MarketAnalysis/9.png"}
          imageThree={"/static/images/MarketAnalysis/5.png"}
          imageFour={"/static/images/MarketAnalysis/7a.png"}
          imageFive={"/static/images/MarketAnalysis/6.png"}
          altText={"Market Analysis"}
          projectTitle={"Market Analysis & Search Engine Recommendation System"}
          projectShortInfo={
            "In this project, I conducted a comprehensive data analysis and built a search recommendation system using an Amazon e-commerce dataset. The dataset comprises 1,465 entries with 16 features, including product information, pricing, user reviews, and ratings. Each entry details attributes such as product ID, name, category, discounted and actual prices, discount percentage, rating and count, user details, and review content. After exploring the data along with some interesting analysis, I implemented a recommendation engine to enhance the user shopping experience by suggesting relevant products based on search words that match a product’s description. This project showcases my expertise in data analysis, machine learning."
          }
          detailsLink={"/projects/MarketAnalysis"}
          githubLink={
            "https://github.com/Mayorfele/Search-Engine-Reccommendation-System"
          }
          key={1}
        />

        <ProjectCard
          imageOne={"/static/images/CarPricePrediction/3.png"}
          imageTwo={"/static/images/CarPricePrediction/9.png"}
          imageThree={"/static/images/CarPricePrediction/1b.png"}
          imageFour={"/static/images/CarPricePrediction/7.png"}
          imageFive={"/static/images/CarPricePrediction/6.png"}
          altText={"Car Price Prediction"}
          projectTitle={"Car Price Prediction"}
          projectShortInfo={
            "In this project, I developed a linear regression model to predict car prices using a dataset comprising 205 entries with 26 features, including car specifications and performance metrics such as engine size, horsepower, fuel type, and city mileage. The dataset, as shown in the image, includes both numerical and categorical variables. Before building the regression model, I conducted exploratory data analysis (EDA) to understand the relationships between some of these independent variables and the target variable. This step was crucial for effective feature engineering and selection, ensuring the model's accuracy and reliability."
          }
          detailsLink={"/projects/CarPricePrediction"}
          githubLink={"https://github.com/Mayorfele/Car-Price-Prediction-Model"}
          key={2}
        />

        <ProjectCard
          imageOne={"/static/images/AfricaGdpAnalysis/3.png"}
          imageTwo={"/static/images/AfricaGdpAnalysis/9a.png"}
          imageThree={"/static/images/AfricaGdpAnalysis/1.png"}
          imageFour={"/static/images/AfricaGdpAnalysis/7.png"}
          imageFive={"/static/images/AfricaGdpAnalysis/6.png"}
          altText={"Africa GDP Analysis"}
          projectTitle={"Africa GDP Analysis"}
          projectShortInfo={
            "In this project, comprehensive analytics operations were conducted on the datasets with the aid of Python programming language. The dataset, spanning from 2000 to 2022, includes the GDP (USD) and population figures of African countries sourced from the World bank."
          }
          detailsLink={"/projects/AfricaGdpAnalysis"}
          githubLink={
            "https://github.com/Mayorfele/AFRICA-GDP-POPULATION-ANALYSIS"
          }
          key={3}
        />

        <ProjectCard
          imageOne={"/static/images/CreditRiskAnalysis/1a.png"}
          imageTwo={"/static/images/CreditRiskAnalysis/2.png"}
          imageThree={"/static/images/CreditRiskAnalysis/3.png"}
          imageFour={"/static/images/CreditRiskAnalysis/4.png"}
          imageFive={"/static/images/CreditRiskAnalysis/5.png"}
          altText={"Credit Risk Analysis"}
          projectTitle={"Credit Risk Analysis"}
          projectShortInfo={
            "In this project, I developed a logistic regression model to predict loan status (approved or denied) using a comprehensive dataset of over 32,000 entries, encompassing 12 variables including applicant information, financial indicators, and loan details. The dataset, as shown in the data summary, includes both numerical and categorical variables. I carried out some feature engineering as a precursor to building the model.  Feature engineering essentially involves creating and selecting relevant variables that better capture the underlying relationships in the data, thereby improving the model's predictive accuracy and interpretability."
          }
          detailsLink={"/projects/CreditRiskAnalysis"}
          githubLink={
            "https://github.com/Mayorfele/Credit-Risk-Prediction-Model"
          }
          key={4}
        />

        <ProjectCard
          imageOne={"/static/images/SportAnalysis/1.png"}
          imageTwo={"/static/images/SportAnalysis/4a.png"}
          imageThree={"/static/images/SportAnalysis/5.png"}
          imageFour={"/static/images/SportAnalysis/7.png"}
          imageFive={"/static/images/SportAnalysis/8.png"}
          altText={"Sport Analysis"}
          projectTitle={"Sport Analysis"}
          projectShortInfo={
            "In this sports analytics project, I analyzed a comprehensive dataset encompassing matches played in the English Premier League (EPL), the data spanning from the 1993/94 season through the 2017/18 season includes detailed match records with columns representing the division, date, home team, away team, full-time home team goals, full-time away team goals, half-time home team goals, half-time away team goals, half-time result, and season. This project aims to uncover trends from 25 years of EPL data, providing valuable analysis for teams, analysts, and fans alike."
          }
          detailsLink={"/projects/SportAnalysis"}
          githubLink={"https://github.com/Mayorfele/Sport-Analytics"}
          key={5}
        />
      </div>
    </main>
  );
};

export default page;

import React from "react";
import styles from "./project.module.css";
import ProjectCard from "./component/ProjectCard";

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
          key={2}
        />
      </div>
    </main>
  );
};

export default page;

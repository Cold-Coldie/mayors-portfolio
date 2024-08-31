"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./ProjectCard.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const ProjectCard = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  altText,
  projectTitle,
  projectShortInfo,
  detailsLink,
  githubLink,
}) => {
  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.individualProject}>
      <div className={styles.carousel}>
        <Slider {...carouselSettings}>
          <div className={styles.carouselItem}>
            <Image
              src={imageOne}
              alt={altText}
              height={250}
              width={500}
              priority
            />
          </div>
          <div className={styles.carouselItem}>
            <Image
              src={imageTwo}
              alt={altText}
              height={250}
              width={500}
              priority
            />
          </div>
          <div className={styles.carouselItem}>
            <Image
              src={imageThree}
              alt={altText}
              height={250}
              width={500}
              priority
            />
          </div>
          <div className={styles.carouselItem}>
            <Image
              src={imageFour}
              alt={altText}
              height={250}
              width={500}
              priority
            />
          </div>
          <div className={styles.carouselItem}>
            <Image
              src={imageFive}
              alt={altText}
              height={250}
              width={500}
              priority
            />
          </div>
        </Slider>
      </div>
      <div className={styles.individualProjectBody}>
        <div className={styles.projectTitle}>{projectTitle}</div>
        <p className={styles.projectShortInfo}>{projectShortInfo}</p>

        <div className={styles.projectButtonWrapper}>
          <div className={styles.projectButtons}>
            <Link href={detailsLink}>
              <span className={styles.viewButton}>
                View{" "}
                <Image
                  src={"/static/icons/view-carousel.svg"}
                  width={25}
                  height={25}
                  alt="View icon"
                />
              </span>
            </Link>

            <Link href={githubLink} target="_blank">
              <span className={styles.githubButton}>
                <Image
                  src={"/static/icons/github-with-border.svg"}
                  width={30}
                  height={30}
                  alt="GitHub icon"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

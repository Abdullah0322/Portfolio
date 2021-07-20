import React from "react";
import Carousel from "react-grid-carousel";
import {
  faArrowRight,
  faArrowLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/ProjectPage.module.css";
import ImgsViewer from "react-images-viewer";
import {
  faGithub,
  faGooglePay,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const projects = [
  {
    name: "Click and Pick",
    category: "Mobile App",
    description:
      "Click and Pick is a mobile application for Android and IoS. The objective of CLick and Pick is to establish a platform where consumers can purchase/ view off the shelf items in the comfort of their homes. The application has multiple vendors where the sellers can display their products, this has the advantage of the user being able to view the items of the seller. This is especially helpful during this pandemic where a curfew has been established. The buyers can order from multiple stores within their region and collect them from a collection point near them, for ease of use and without having to go to each individual store.",
    pictures: [
      { src: "/projects/click1.jpeg" },
      { src: "/projects/click2.jpeg" },
      { src: "/projects/click3.jpeg" },
      { src: "/projects/click4.jpeg" },
      { src: "/projects/click5.jpeg" },
      { src: "/projects/click6.jpeg" },
      { src: "/projects/click7.jpeg" },
      { src: "/projects/click8.jpeg" },
      { src: "/projects/click9.jpeg" },
    ],
download_link:"https://drive.google.com/file/d/15KR2n801bpRLgNqfuSlwfauc0UjyNMow/view?usp=sharing",
    github_repo: "https://github.com/Abdullah0322/fyp_final",
    stack: [
      "FLutter",
      "Dart",
      "Firebase",
      "Git",
    ],
  },

  {
    name: "Ecommerce Store",
    category: "Website",
    description:
      "It is an Ecommerce Website where buyers can purcahse and admin can see the orders.",
    pictures: [
      { src: "/projects/shop.png" },
    ],
    live_link: "crae-example43.herokuapp.com",
    github_repo: "https://github.com/Abdullah0322/myshop",

    stack: [
      "React JS",
      "NODE JS",
      "JavaScript",
      "MONGO DB",
      "MONGOOSE",
      "Git",
      "CSS"
    ],
  },
  {
    name: "Ticket Updater",
    category: "Web App",
    description:
      "Company Based Web App where QA's can update developers about mistakes in the Applications.",
    pictures: [
      { src: "/projects/ticket.png" },
    ],
    live_link: "https://ticketupdater.herokuapp.com/",
    github_repo: "https://github.com/Abdullah0322/TicketUpdated",
    stack: [
      "REACT JS",
      "NODE JS",
      "JavaScript",
      "MONGO DB",
      "MONGOOSE",
      "Git",
    ],
  },
];

const ProjectsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      <span>{}</span>
      <Carousel
        cols={1}
        rows={1}
        gap={1}
        showDots
        mobileBreakpoint={670}
        containerClassName={styles.carousel}
        arrowRight={
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.icon}
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          />
        }
        arrowLeft={
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={styles.icon}
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          />
        }
      >
        {projects.map((item, key) => (
          <Carousel.Item key={key}>
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <p>
                  <strong className={styles.label}>Name:</strong> {item.name}
                </p>
                <p>
                  <strong className={styles.label}>Category:</strong>{" "}
                  {item.category}
                </p>
                <summary>
                  <strong className={styles.label}>Description:</strong>{" "}
                  {item.description}
                </summary>
                <p className={styles.label}>Technology Stack:</p>
                <ul className={styles.stackContainer}>
                  {item.stack.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div className={styles.urls}>
                  {item.live_link && (
                    <p>
                      <a href={item.live_link} target="blank">
                        <FontAwesomeIcon icon={faLink} /> Preview
                      </a>
                    </p>
                  )}
                  {item.download_link && (
                    <p>
                      <a href={item.download_link} target="blank">
                        <FontAwesomeIcon icon={faGooglePlay} /> Download App
                      </a>
                    </p>
                  )}
                  {item.github_repo && (
                    <p>
                      <a href={item.github_repo} target="blank">
                        <FontAwesomeIcon icon={faGithub} /> Github
                      </a>
                    </p>
                  )}
                </div>
                {item.creds && (
                  <div>
                    <label className={styles.label}>{item.creds.desc}</label>
                    <p>
                      <strong>Username: {item.creds.username}</strong>
                    </p>
                    <p>
                      <strong>Username: {item.creds.password}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.cardImageContainer}>
                {item.pictures.map((item, index) => (
                  <img
                    src={item.src}
                    className={styles.cardImage}
                    onClick={() => {
                      setCurrentImage(index);
                      setisOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <ImgsViewer
        imgs={projects[currentIndex].pictures}
        currImg={currentImage}
        isOpen={isOpen}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        onClose={() => {
          setCurrentImage(0);
          setisOpen(false);
        }}
      />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;

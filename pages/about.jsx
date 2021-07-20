import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightScreen}>
        <Image
          className={styles.picture}
          src="/code.png"
          width={450}
          height={280}
          alt="Code Avatar"
        />
      </div>
      <div className={styles.leftScreen}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.about}>
          Hello, I’m Abdullah, Mern-Stack and Flutter developer based in Lahore,
          Pakistan. I have rich experience in building web and cross plartform
          mobile applications. In summary I'm a Full Stack Developer skilled in
          the following
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>Node JS</span>
          </li>
          <li>
            <span>REACT JS</span>
          </li>
          <li>
            <span>MONGO DB</span>
          </li>
          <li>
            <span>Firebase</span>
          </li>
          <li>
            <span>Dart</span>
          </li>
        </ul>
        <a className={styles.resumeButton} href="#">
          Download Resume <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;

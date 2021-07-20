import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftScreen}>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faMapMarker} className={styles.cardIcon} />
          <div className={styles.cardBody}>
            <h2>Address</h2>
            <address>190 C2 Engineers town lahore Sector A</address>
          </div>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.cardIcon} />
          <div className={styles.cardBody}>
            <h2>Email</h2>
            <p>
              <a href="mailto:abdullahnaveed71.am@gmail.com">
              mailto:abdullahnaveed71.am@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rightScreen}>
        <form method="post">
          <div>
            <input
              required
              type="text"
              name="first_name"
              placeholder="First name"
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="last_name"
              placeholder="Last name"
            />
          </div>
          <div>
            <input required type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <textarea required placeholder="Your message"></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;

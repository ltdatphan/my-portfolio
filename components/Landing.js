import Image from "next/image";

import styles from "@/styles/Landing.module.scss";
import generalStyles from "@/styles/General.module.scss";

export default function Landing() {
  return (
    <section id="landing" className={styles.landingSection}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.typeEffect}>
              Hi I'm David 👋
              <br />
              Welcome to my website.
            </h1>
          </div>
          <div className={styles.imageContainer}>
            <img src="/peep.svg" width="100%" height="100%" />
          </div>
        </div>
        <a href="#about" className={generalStyles.primaryBtn}>
          Learn more &#8595;
        </a>
      </div>
    </section>
  );
}

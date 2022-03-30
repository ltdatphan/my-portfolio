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
              Hi I&apos;m David 👋
              <br />
              Welcome to my website.
            </h1>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/peep.svg" layout="fill" />
          </div>
        </div>
        <a href="#about" className={generalStyles.primaryBtn}>
          Learn more ↓&#xFE0E;
        </a>
      </div>
    </section>
  );
}

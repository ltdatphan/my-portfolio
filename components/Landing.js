import Image from "next/image";
import Typewriter from "typewriter-effect";
import styles from "@/styles/Landing.module.scss";
import generalStyles from "@/styles/General.module.scss";
import Zoom from "react-reveal/Zoom";

export default function Landing() {
  return (
    <section id="landing" className={styles.landingSection}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            {/* <h1 className={styles.typeEffect}>
              Hi I&apos;m David 👋
              <br />
              Welcome to my website.
            </h1> */}
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi I'm David 👋")
                    .typeString("Welcome to my website.")
                    .start();
                }}
              />
            </h1>
          </div>
          <Zoom>
            <div className={styles.imageContainer}>
              <Image src="/peep.svg" alt="illustration" layout="fill" />
            </div>
          </Zoom>
        </div>
        <a href="#about" className={generalStyles.primaryBtn}>
          Learn more ↓&#xFE0E;
        </a>
      </div>
    </section>
  );
}

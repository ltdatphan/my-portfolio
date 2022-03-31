import Image from "next/image";
import Typewriter from "typewriter-effect";
import styles from "@/styles/Landing.module.scss";
import generalStyles from "@/styles/General.module.scss";
import { Fade } from "react-awesome-reveal";
import GraphemeSplitter from "grapheme-splitter";

export default function Landing() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <section id="landing" className={styles.landingSection}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              <Typewriter
                options={{
                  stringSplitter,
                  loop: true
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi I'm David 👋")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Welcome to my website! 🌍")
                    .pauseFor(10000)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
          </div>
          <Fade duration={2000} triggerOnce>
            <div className={styles.imageContainer}>
              <Image src="/peep.svg" alt="illustration" layout="fill" />
            </div>
          </Fade>
        </div>
        <a href="#about" className={generalStyles.primaryBtn}>
          Learn more ↓&#xFE0E;
        </a>
      </div>
    </section>
  );
}

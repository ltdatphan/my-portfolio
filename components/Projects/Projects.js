import SectionTemplate from "../SectionTemplate";
import ProjectCard from "./ProjectCard";
import styles from "@/styles/Projects.module.scss";
import generalStyles from "@/styles/General.module.scss";

export default function Projects() {
  return (
    <>
      <SectionTemplate title="Projects" hash="projects">
        <div className={styles.cardsContainer}>
          <ProjectCard
            imageSrc="/face_detect_demo.png"
            projectName="Smart Detection"
            technology="HTML, CSS, ReactJS, ExpressJS, PostgreSQL, Clarifai API"
            description="Web application that detect faces in an image using Clarifai's API"
            githubLink="https://github.com/ltdatphan/smart-detection"
            liveVerLink="https://ltdatphan.github.io/smart-detection/"
          />
          <ProjectCard
            imageSrc="/lyrics_scraper_demo.png"
            projectName="Lyrics Scraper"
            technology="Python, Spotify API, Genius API"
            description="Python program that looks at user's currently playing song using Spotify's API and get the lyrics using Genius API"
            githubLink="https://github.com/ltdatphan/lyrics-scraper"
          />
          <ProjectCard
            imageSrc="/happy_grocery_demo.png"
            projectName="Happy Groceries"
            technology="HTML, CSS, JavaScript, PHP, mySQL"
            description="Group project for CPS530. Our idea was to create an online grocery store to make it more convenient for customers to shop from home, especially during the COVID-19 pandemic"
            githubLink="https://github.com/ltdatphan/Happy-Grocery"
            liveVerLink="http://happygrocery.infinityfreeapp.com/"
          />
        </div>
        <h2 className={styles.seeMore}>Want to see my other projects?</h2>
        <a className={generalStyles.primaryBtn}>Visit my Github &#8599;</a>
      </SectionTemplate>
    </>
  );
}

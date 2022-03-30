import Image from "next/image";

import styles from "@/styles/Cards.module.scss";
import generalStyles from "@/styles/General.module.scss";

export default function ProjectCard({
  imageSrc,
  imageAlt,
  projectName,
  technology,
  description,
  githubLink,
  liveVerLink,
}) {
  return (
    <>
      <div className={styles.cardBody}>
        <div className={styles.cardImageContainer}>
          <Image src={imageSrc} alt={imageAlt} layout="fill" priority/>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTextContent}>
            <h2>{projectName}</h2>
            <span>{technology}</span>
            <p>{description}</p>
          </div>
          <div className={styles.cardLinks}>
            {githubLink ? (
              <a
                href={githubLink}
                className={generalStyles.primaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github ↗&#xFE0E;
              </a>
            ) : null}

            {liveVerLink ? (
              <a
                href={liveVerLink}
                className={generalStyles.primaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo ↗&#xFE0E;
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

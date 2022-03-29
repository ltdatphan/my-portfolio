import styles from "@/styles/Cards.module.scss";
import generalStyles from "@/styles/General.module.scss";

export default function ProjectCard({
  imageSrc,
  projectName,
  technology,
  description,
  githubLink,
  liveVerLink,
}) {
  return (
    <>
      <div className={styles.expCardBody}>
        <div className={styles.expCardImageContainer}>
          <img src={imageSrc} width="100%" height="auto"></img>
        </div>
        <div className={styles.expCardContent}>
          <div className={styles.expCardTextContent}>
            <h2>{projectName}</h2>
            <span>{technology}</span>
            <p>{description}</p>
          </div>
          <div className={styles.projCardLinks}>
            {githubLink ? (
              <a
                href={githubLink}
                className={generalStyles.primaryBtn}
                target="_blank"
              >
                View on Github &#8599;
              </a>
            ) : null}

            {liveVerLink ? (
              <a
                href={liveVerLink}
                className={generalStyles.primaryBtn}
                target="_blank"
              >
                View Live Demo &#8599;
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

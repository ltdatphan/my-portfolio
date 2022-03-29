import styles from "@/styles/Cards.module.scss";

export default function Card({ imageSrc, companyName, roleName, workPeriod }) {
  return (
    <>
      <div className={styles.expCardBody}>
        <div className={styles.expCardImageContainer}>
          <img src={imageSrc} width="100%" height="auto"></img>
        </div>
        <div className={styles.expCardContent}>
          <div className={styles.expCardTextContent}>
            <h2>{companyName}</h2>
            <span>{roleName}</span>
            <span>{workPeriod}</span>
          </div>
        </div>
      </div>
    </>
  );
}

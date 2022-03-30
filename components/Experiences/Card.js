import Image from "next/image";
import styles from "@/styles/Cards.module.scss";

export default function Card({ imageSrc, imageAlt, companyName, roleName, workPeriod }) {
  return (
    <>
      <div className={styles.cardBody}>
        <div className={styles.cardImageContainer}>
          {/* <img src={imageSrc} width="100%" height="auto"></img> */}
          <Image src={imageSrc} alt={imageAlt} layout="fill" />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTextContent}>
            <h2>{companyName}</h2>
            <span>{roleName}</span>
            <span>{workPeriod}</span>
          </div>
        </div>
      </div>
    </>
  );
}

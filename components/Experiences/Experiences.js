import SectionTemplate from "../SectionTemplate";
import Card from "./Card";
import styles from "@/styles/Experiences.module.scss";

export default function Experiences() {
  return (
    <>
      <SectionTemplate title="Experiences" hash="experiences">
        <div className={styles.cardsContainer}>
          <Card
            imageSrc="/aviapro_logo.png"
            companyName="AviaPro Consulting Inc."
            roleName="Software Development Intern"
            workPeriod="Sep 2021 - Current"
          />
          <Card
            imageSrc="/CAAT_Logo_EN.svg"
            companyName="CAAT Pension Plan"
            roleName="Software Development Intern"
            workPeriod="May 2021 - Aug 2021"
          />
        </div>
      </SectionTemplate>
    </>
  );
}

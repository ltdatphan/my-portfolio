import SectionTemplate from "../SectionTemplate";
import Card from "./Card";
import styles from "@/styles/Experiences.module.scss";
import { Slide } from "react-awesome-reveal";

export default function Experiences() {
  return (
    <>
      <SectionTemplate title="Experiences" hash="experiences">
        <div className={styles.cardsContainer}>
          <Slide direction="up" style={{ width: "100%" }} triggerOnce>
            <Card
              imageSrc="/aviapro_logo.png"
              imageAlt="AviaPro logo"
              companyName="AviaPro Consulting Inc."
              roleName="Software Development Intern"
              workPeriod="Sep 2021 - Current"
            />
          </Slide>
          <Slide direction="up" style={{ width: "100%" }} delay={250}triggerOnce>
            <Card
              imageSrc="/CAAT_Logo_EN.svg"
              imageAlt="CATT logo"
              companyName="CAAT Pension Plan"
              roleName="Software Development Intern"
              workPeriod="May 2021 - Aug 2021"
            />
          </Slide>
        </div>
      </SectionTemplate>
    </>
  );
}

import SectionTemplate from "./SectionTemplate";
import Image from "next/image";
import styles from "@/styles/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <SectionTemplate title="Contact" hash="contact">
        <h2>Let&apos;s connect!</h2>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/ltdatphan/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn logo" height="64px" width="64px"></Image>
          </a>
          <a href="https://github.com/ltdatphan" target="_blank" rel="noopener noreferrer">
            <Image src="/github.png" alt="Github logo" height="64px" width="64px"></Image>
          </a>
          <a href="mailto:lethanhdat.phan@ryerson.ca" target="_blank" rel="noopener noreferrer">
            <Image src="/email.png" alt="Email logo"height="64px" width="64px"></Image>
          </a>
        </div>
      </SectionTemplate>
    </>
  );
}

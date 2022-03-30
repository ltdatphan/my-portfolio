import SectionTemplate from "./SectionTemplate";
import styles from "@/styles/About.module.scss";
import generalStyles from "@/styles/General.module.scss";

export default function Layout() {
  return (
    <>
      <SectionTemplate title="About" hash="about">
        <p className={styles.aboutMeText}>
          I&apos;m a fourth-year Computer Science student at Ryerson University and
          currently working my co-op term at{" "}
          <span className={styles.externalLink}>
            <a
              href="https://www.linkedin.com/company/aviaproconsulting/"
              target="_blank"
              rel="noopener noreferrer"
              className={generalStyles.underlineLinksDark}
            >
              AviaPro Consulting Inc. ↗&#xFE0E;
            </a>
          </span>{" "}
          as a Software Development Intern. I&apos;m excited to learn new
          technologies and wish to refine my skills as a developer.
        </p>
      </SectionTemplate>
    </>
  );
}

import styles from "@/styles/SectionTemplate.module.scss";

export default function SectionTemplate({ title, hash, children }) {
  return (
    <section className={styles.sectionBody} id={hash}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>{title}</h1>
        {children}
      </div>
    </section>
  );
}

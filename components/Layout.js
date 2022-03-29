import NavBar from "./NavBar";
import styles from "@/styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className={styles.customFooter}>&#169; 2022 David Phan</footer>
    </>
  );
}

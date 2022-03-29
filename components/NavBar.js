import styles from "@/styles/Layout.module.scss";
import generalStyles from "@/styles/General.module.scss";
import { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const onClickToggleActive = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const onClickActiveOff = () => {
    setIsActive(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navRow}>
          <div>
            <a href="#" className={styles.branding}>
              DAVID PHAN
            </a>
          </div>
          <button
            className={`${styles.hamburger} ${
              isActive ? styles.isActiveMenuBtn : ""
            }`}
            onClick={onClickToggleActive}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`${styles.navLinks} ${
            isActive ? styles.navLinksShow : ""
          }`}
        >
          <ul className={styles.navList}>
            <li onClick={onClickActiveOff}>
              <a href="#about" className={generalStyles.underlineLinksWhite}>
                About
              </a>
            </li>
            {/* <li onClick={onClickActiveOff}>
              <a href="#skills" className={generalStyles.underlineLinksWhite}>
                Skills
              </a>
            </li> */}
            <li onClick={onClickActiveOff}>
              <a
                href="#experiences"
                className={generalStyles.underlineLinksWhite}
              >
                Experiences
              </a>
            </li>
            <li onClick={onClickActiveOff}>
              <a href="#projects" className={generalStyles.underlineLinksWhite}>
                Projects
              </a>
            </li>
            <li onClick={onClickActiveOff}>
              <a href="#contact" className={generalStyles.underlineLinksWhite}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

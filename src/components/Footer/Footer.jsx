import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.leftData}>
          <div>Ⓒ2022.</div>
          <span className={styles.footerTextleft}>santeptar</span>
        </div>

        <div className={styles.rightData}>
          <span>Terms</span>
          <span>·</span>
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

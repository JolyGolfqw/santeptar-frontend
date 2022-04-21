import React from "react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from "../CreateStory/styles.module.css";

const CreateStoryHeader = () => {
  return (
    <div className={styles.createStoreHeader}>
        
      <div className={styles.iconHeader}>
        <button className={styles.iconBtn}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className={styles.headerNav}>
          <div className={styles.addstory}>Add Story Info</div>
          <h4 className={styles.h4}>Untitled Story</h4>
        </div>
      </div>
      <div className={styles.btnHeader}>
          <div className={styles.btn1}>Cancel</div>
          <div className={styles.btn2}>Skip</div>
      </div>
    </div>
  );
};

export default CreateStoryHeader;

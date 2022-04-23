import React, { useState } from "react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from "../CreateStory/styles.module.css";
import { useNavigate } from "react-router-dom";
import HistoryText from "./HistoryText";

export default function CreateStoryHeader({title, desc, photo, chars, tags, category}) {
  const navigate = useNavigate();

  const [opened, setOpened] = useState(false);

  // const handleNext = () => {
  //   navigate('/myworks/new/history')
  // }
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
        <div className={styles.btn1}>Отмена</div>
        <div onClick={() => setOpened(true)} className={styles.btn2}>
          Далее
        </div>
        <HistoryText photo={photo}
      desc={desc} chars={chars}
      title={title} tags={tags} category={category} show={opened} onHide={() => setOpened(false)}/>
      </div>
    </div>
  );
}

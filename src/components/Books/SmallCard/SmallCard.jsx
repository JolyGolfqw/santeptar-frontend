import React from "react";
import styles from "./smallcard.module.css";

const SmallCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img className={styles.image} src={item.img} alt="img"></img>
      </div>
      <div className={styles.card_info}>
        <p className={styles.text_title}>{item.title}</p>
        <p className={styles.text_body}>
          {item.description.substr(0, 98) + "..."}
        </p>
        <button className={styles.card_button}>Read More</button>
      </div>
    </div>
  );
};

export default SmallCard;

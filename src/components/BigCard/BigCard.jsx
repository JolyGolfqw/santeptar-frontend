import React from "react";
import styles from "./bigCard.module.css";

const BigCard = () => {
  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardBasis}>
        <div className={styles.bigCardImg}>
          <img
            className={styles.bigCardImag}
            src="https://cdn1.ozone.ru/multimedia/1019454506.jpg"
            alt=""
          />
        </div>
        <div className={styles.bigCardContent}>
          <div className={styles.contentHeader}>Название книги</div>
          <div className={styles.contentMain}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perferendis, ab cum eligendi odit consectetur. Praesentium enim rem
            accusamus quidem ad deserunt odio itaque, hic similique, deleniti
            fuga eveniet suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perferendis, ab cum eligendi odit consectetur. Praesentium enim rem
            accusamus quidem ad deserunt odio itaque, hic similique, deleniti
            fuga eveniet suscipit! hic similique, deleniti
            fuga eveniet suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perferendis, ab cum eligendi odit consectetur. Praesentium enim rem
            accusamus quidem ad deserunt odio itaque, hic similique, deleniti
            fuga eveniet suscipit!
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;

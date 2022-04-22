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
          <div className={styles.endedStories}>
            <h5>Завершенная история</h5>
          </div>
          <div className={styles.info}>
            <div className={styles.likes}>
              <div className={styles.likesIcon}>
                <div><ion-icon name="happy-outline"></ion-icon></div>
                <span>Голосов</span>
              </div>
              <h6>0</h6>
            </div>
            <div className={styles.time}>
              <div className={styles.bookIcon}>
                <div><ion-icon name="book-outline"></ion-icon></div>
                <span>Время</span>
              </div>
              <h6>5 мин</h6>
            </div>
          </div>
          <div className={styles.contentMain}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perferendis, ab cum eligendi odit consectetur. Praesentium enim rem
            accusamus quidem ad deserunt odio itaque, hic similique, deleniti
            fuga eveniet suscipit!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum perferendis, ab cum eligendi odit
            consectetur. Praesentium enim rem accusamus quidem ad deserunt odio
            itaque, hic similique, deleniti fuga eveniet suscipit! hic similique
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;

import styles from "./style.module.css";
import React from "react";

const WhileReadingCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            className={styles.image}
            src="https://cdn.eksmo.ru/v2/ITD000000001120693/COVER/cover1__w820.jpg"
            alt="img"
          ></img>
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.authorName}>Книжный вор</div>
          <div className={styles.description}>
          «Книжный вор» стал издательской сенсацией. Его тираж только на английском языке превысил 1,5 миллиона экземпляров. Роман уже несколько лет находится в Top-30 рейтинга крупнейшего в мире книжного магазина Amazon.com.
          </div>

          <div className={styles.btnRead}>
            <button className={styles.btn}>Читать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhileReadingCard;

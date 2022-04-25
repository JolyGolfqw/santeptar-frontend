import styles from "./style.module.css";
import React from "react";

const WhileReadingCardFour = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            className={styles.image}
            src="https://cdn.eksmo.ru/v2/ITD000000000880783/COVER/cover1__w820.jpg"
            alt="img"
          ></img>
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.authorName}>Прикосновение</div>
          <div className={styles.description}>
            Барни и Карен были счастливы, пока не стали жертвами радиоактивного
            заражения. Одно прикосновение — и смертоносная зараза проникла в их
            дом и во все остальные дома, куда они заходили.{" "}
          </div>

          <div className={styles.btnRead}>
            <button className={styles.btn}>Читать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhileReadingCardFour;

import styles from "./style.module.css";
import React from "react";

const WhileReadingCardTwo = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            className={styles.image}
            src="https://cdn.eksmo.ru/v2/ITD000000000965464/COVER/cover1__w820.jpg"
            alt="img"
          ></img>
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.authorName}>Смерть на Ниле</div>
          <div className={styles.description}>
            На роскошном пароходе "Карнак", плывущем по Нилу, убита молодая
            миллионерша, недавно вышедшая замуж и, как выяснилось, имевшая
            множество врагов среди пассажиров. Любой мог убить самоуверенную и
            нагловатую девушку, укравшую жениха у лучшей подруги.
          </div>

          <div className={styles.btnRead}>
            <button className={styles.btn}>Читать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhileReadingCardTwo;

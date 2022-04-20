import styles from "./style.module.css";
import React from "react";

const WhileReadingCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            className={styles.image}
            src="https://s0.rbk.ru/v6_top_pics/media/img/3/16/755954419776163.jpg"
            alt="img"
          ></img>
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.authorName}>Брайн Силвер</div>
          <div className={styles.description}>
          А лидер ты или нет зависит от того чья мерила нормы является актуальной и
           используемой всеми, а не от того что мужчина ты в семье или называешься императором в империи.
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

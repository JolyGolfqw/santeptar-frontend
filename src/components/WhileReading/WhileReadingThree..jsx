import styles from "./style.module.css";
import React from "react";

const WhileReadingCardThree = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            className={styles.image}
            src="https://cdn.eksmo.ru/v2/ITD000000001138162/COVER/cover1__w820.jpg"
            alt="img"
          ></img>
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.authorName}>1984</div>
          <div className={styles.description}>
            Что будет, если в правящих кругах распространятся идеи фашизма и
            диктатуры? Каким станет общественный уклад, если власть потребует
            неуклонного подчинения? К какой катастрофе приведет подобный режим?{" "}
          </div>

          <div className={styles.btnRead}>
            <button className={styles.btn}>Читать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhileReadingCardThree;

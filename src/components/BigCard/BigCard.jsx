import React from "react";
import { NavItem } from "react-bootstrap";
import styles from "./bigCard.module.css";

const BigCard = ({img, title, description}) => {
  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardBasis}>
        <div className={styles.bigCardImg}>
          <img
            className={styles.bigCardImag}
            src={`http://localhost:4000/${img}`}
            alt=""
          />
        </div>
        <div className={styles.bigCardContent}>
          <div className={styles.contentHeader}>{title}</div>
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
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
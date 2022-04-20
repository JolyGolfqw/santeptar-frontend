import React from "react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from "./userCard.module.css";

const UserCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src="https://html5css.ru/howto/pineapple.jpg"
          alt="book"
        />
        <h4>Ридван</h4>
        <button>
          <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
        </button>
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descAndButton}>
          <h4>Описание</h4>
          <button>Подписаться</button>
        </div>
        <div className={styles.userDesc}>
          <p>
            Тут будет описание юзера только текста будет примерно вот примерно примерно примерно примерно примиерно пример но примерно примерно
            столько пример но примерно примерно столько
          </p>
        </div>
				<div className={styles.lastBook}>
					<div className={styles.lastBookWrapper}>
						<img src="https://fkniga.ru/media/product/04/040401/KA-00241064.jpg" alt="books" />
					</div>
					<div className={styles.lastBookText}>
						<h6><span className={styles.lastText}>Последняя книга: </span><span className={styles.bookName}>Десять негритят</span></h6>
					</div>
					<div className={styles.date}>
						<h6>Сентябрь 22, 2021</h6>
					</div>
				</div>
				<div className={styles.buttons}>
					<div className={styles.works}>
						<h6>5 работ</h6>
					</div>
					<div className={styles.subs}>
						<h6>15 подписчиков</h6>
					</div>
				</div>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";
import styles from "./comment.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.cell}>
        <img
          className={styles.image}
          src="https://klike.net/uploads/posts/2019-03/1551511825_12.jpg"
          alt=""
        ></img>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.user}>Пользователь</div>
            <div className={styles.buttonRemove}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className={styles.dateWriting}>date</div>
          <div className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            laborum asperiores, delectus sed atque vel nesciunt sequi doloremque
            dolorum officia? Sit iusto aliquid ratione obcaecati corporis
            doloribus fuga, esse neque.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

import React from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Books from "../Books/Books";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const CategotyLinkPage = () => {
  return (
    <div className={styles.content}>
      <Header />
      <h1>Ужасы Истории</h1>
      <div className={styles.container}>
        <span>Уточнить по тегу:</span>
        <div className={styles.tags}>
          <li>
            horror
            <button>
              <ion-icon name="add-outline"></ion-icon>{" "}
            </button>
          </li>
          <li>
            triller
            <button>
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </li>
          <li>
            romance
            <button>
              <ion-icon name="add-outline"></ion-icon>{" "}
            </button>
          </li>
          <li>scary <button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>fanfiction<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>texttospeeh<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>xreader<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>mystery<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>yander<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>gore<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>murder<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>love<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>killer<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
          <li>horror<button>
              <ion-icon name="add-outline"></ion-icon>
            </button></li>
        
       
        </div>
      </div>
      <div className={styles.booksRender}>
        <div className={styles.booksRenderHeader}>
          <div className={styles.booksLength}>1.2К Истории</div>
          <div className={styles.sort}>
            Сортировка по:
            <select name="" id="">
              <option value="1">Популярные</option>
              <option value="1">Новые</option>
            </select>
          </div>
        </div>
        <Books />
      </div>
    </div>
  );
};

export default CategotyLinkPage;

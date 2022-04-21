import React from "react";
import styles from "./header.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { useState } from "react";
import Signin from "../Signin/Signin";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [opened, setOpened] = useState(false);
  // const modalWindow = useSelector((state) => state.categories)

  return (
    <div className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.mainName}>book reader</div>
        <div className={styles.mainNav}>
          <div className={styles.mainNavGenre}>Жанры</div>
          {/* <div className={styles.modalCategory}><Link className={styles.categoryName}to={`/category/${item.id}`}>⮛</Link></div> */}
          <div className={styles.mainNavSearch}>
            <div className={styles.mainNavButton}>
              <ion-icon name="search-outline"></ion-icon>
              <input
                className={styles.mainNavInput}
                type="text"
                placeholder="Поиск"
              />
            </div>
          </div>
          <div className={styles.mainNavStr}>Писать</div>
        </div>
        <div className={styles.mainUser}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/482/482636.png"
            alt="avatar"
            className={styles.avatar}
          ></img>
          <div onClick={() => setOpened(!opened)} className={styles.user}>
            User
          </div>
        </div>
      </div>
      <Signin show={opened} onHide={() => setOpened(false)} />
    </div>
  );
};

export default Header;

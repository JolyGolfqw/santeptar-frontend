import React from "react";
import styles from "./header.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import Signin from "../Signin/Signin";

const Header = () => {
    const [opened, setOpened] = useState(false)
    const [a, setA] = useState(false)

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
            </div>
            <input
              className={styles.mainNavInput}
              type="text"
              placeholder="Поиск"
            />
          </div>
          <div className={styles.mainNavStr} onClick={()=>setA(!a)}>Писать</div>
        </div>
        <div className={styles.mainUser}>
          <div className={styles.mainUserImage}>
            <img
              className={styles.mainUserImg}
              src="https://img1.freepng.ru/20180524/tab/kisspng-alexander-pushkin-%D0%9F%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D1%8F%D0%B9%D0%BA%D0%B0-writer-poet-5b069e36c57a46.7066814815271603748089.jpg"
              alt=""
            />
          </div>
          <div onClick={() => setOpened(!opened)} className={styles.user}>User</div>
        </div>
      </div>
      <Signin show={opened} onHide={() => setOpened(false)}/>
    </div>
  );
};

export default Header;

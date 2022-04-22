import React from "react";
import styles from "./header.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { useState, useEffect } from "react";
import Signin from "../Signin/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [genresModal, setGenresModal] = useState(false);

  const handleClick = () => {
    setGenresModal(!genresModal);
  };

  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const createBook = () => {
    return navigate("/myworks/new");
  };

  const showCategories = () => {
    return navigate("/categories");
  };

  const showMainPage = () => {
    return navigate("/");
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.mainName} onClick={showMainPage}>
          book reader
        </div>
        <div className={styles.mainNav}>
          <div className={styles.mainNavGenre} onClick={handleClick}>
            <div className={styles.mainNavGenre}>Жанры</div>
            <div className={styles.arrow}>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
          <div className={styles.mainNavSearch}>
            <div className={styles.mainNavButton}>
              
                <ion-icon
                  name="search-outline"
                  onClick={showCategories}
                ></ion-icon>
            
              <input
                className={styles.mainNavInput}
                type="text"
                placeholder="Поиск"
              />
            </div>
          </div>
          <div className={styles.mainNavStr} onClick={createBook}>
            Создать
          </div>
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
      {genresModal && <GenresModal />}
    </div>
  );
};

const GenresModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.items);

  const tr = [...Array(Math.ceil(categories.length / 3))];

  const citiesTr = tr.map((item, index) =>
    categories.slice(index * 3, index * 3 + 3)
  );

  const content = citiesTr.map((item, index) => (
    <div className={styles.str} key={index}>
      {item.map((category, index) => (
        <div className={styles.column} key={index}>
          {category.name}
        </div>
      ))}
    </div>
  ));

  return <div className={styles.genresModal}>{content}</div>;
};

export default Header;

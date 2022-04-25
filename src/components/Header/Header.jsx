import React from "react";
import styles from "./header.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { useState, useEffect } from "react";
import Signin from "../Signin/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileModal from "./ProfileModal";
import { CloseButton } from "react-bootstrap";
import { loadUsers } from "../../redux/features/users";

const Header = () => {
  const [genresModal, setGenresModal] = useState(false);
  const dispatch = useDispatch()

  const userName = useSelector((state) => state.application.userName);
  const user = useSelector((state) => state.application.user);
  const token = useSelector((state) => state.application.token);
  const avatar = useSelector((state) => state.application.avatar);

  const users = useSelector((state) => state.users.items);
  const dude = users.find(item => item._id === user)

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])

  const navigate = useNavigate();

  const [profile, setProfile] = useState(false);

  const handleClick = () => {
    setGenresModal(!genresModal);
  };

  const [opened, setOpened] = useState(false);
  const hendleKeyPress = () => {
    return navigate("/searchbooks");
  };

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
    <>
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <div className={styles.mainName} onClick={showMainPage}>
            santeptar
          </div>
          <div className={styles.mainNav}>
            <div className={styles.mainNavGenre}>
              <div className={styles.mainNavGenre} onClick={showCategories}>
                Жанры
              </div>
              <div className={styles.arrow} onClick={handleClick}>
                <ion-icon name="chevron-down-outline" className={styles.icons1}></ion-icon>
              </div>
            </div>
            <div className={styles.mainNavSearch}>
              <div className={styles.mainNavButton} onClick={hendleKeyPress}>
                <ion-icon name="search-outline" className={styles.icons2}></ion-icon>
                <div className={styles.mainNavGenre}>Поиск</div>
              </div>
            </div>
            <div className={styles.mainNavStr} onClick={createBook}>
              Создать
            </div>
          </div>
          {token ? (
            <div
              onClick={() => setProfile(!profile)}
              className={styles.mainUser}
            >

              <img
                src={`http://localhost:4000/${dude && dude.avatar}`}
                alt="avatar"
                className={styles.avatar}
              ></img> */}
              <div className={styles.user}>{userName}</div>
            </div>
          ) : (
            <div onClick={() => setOpened(!opened)} className={styles.mainUser}>
              Войти
            </div>
          )}
        </div>
        <Signin show={opened} onHide={() => setOpened(false)} />
        {genresModal && <GenresModal />}
        {profile && <ProfileModal id={user} />}
      </div>
    </>
  );
};

const GenresModal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.items);
  categories.filter((item) => {
    if (id !== item._id) return item;
  });

  const tr = [...Array(Math.ceil(categories.length / 3))];

  const citiesTr = tr.map((item, index) =>
    categories.slice(index * 3, index * 3 + 3)
  );

  const content = citiesTr.map((item, index) => (
    <div className={styles.str} key={index}>
      {item.map((category, index) => {
        return (
          <Link key={index} to={`/render/category/${category._id}`}>
            <div className={styles.column}>{category.name}</div>
          </Link>
        );
      })}
    </div>
  ));

  return <div className={styles.genresModal}>{content}</div>;
};

export default Header;

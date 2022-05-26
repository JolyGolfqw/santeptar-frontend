import React, { useEffect, useState } from "react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from "./userCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  editAvatar,
  editProfile,
  loadUsers,
  subscribe,
  unSubscribe,
} from "../../redux/features/users";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";
import { loadBooks } from "../../redux/features/books";
import Followers from "../Followers/Followers";

const UserCard = ({ dude }) => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.items);
  const signUser = useSelector((state) => state.application.user);
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);
  const [preview, setPreview] = useState("");
  const [show, setShow] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);

  const handleUpdateAvatar = (e) => {
    dispatch(editAvatar(e, id));
    localStorage.setItem("avatar", dude.avatar);
  };

  const handleSubscribe = () => {
    dispatch(subscribe(signUser, id));
  };

  const handleUnSubscribe = () => {
    dispatch(unSubscribe(signUser, id));
  };

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadBooks());
  }, [dispatch]);

  const userBooks = books.filter((item) => item.author._id === id);
  const lastBook = userBooks[userBooks.length - 1];

  return (
    <div key={dude._id} className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src={preview ? preview : `http://localhost:4000/${dude.avatar}`}
          alt="book"
        />
        <h4>{dude.name}</h4>
        {signUser === id && (
          <button onClick={() => setOpened(!opened)}>
            <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
          </button>
        )}
        {opened && (
          <div className={styles.editor}>
            <input
              type="file"
              id="upload"
              hidden
              accept="image/*"
              onChange={(e) => {
                handleUpdateAvatar(e.target.files[0]);
              }}
            />
            <label htmlFor="upload">Сменить аватар</label>
            <br />
            <label onClick={() => setShow(true)} htmlFor="desc">
              Сменить описание
            </label>
            <br />
            <label onClick={handleUpdateAvatar} htmlFor="desc">
              Сохранить
            </label>
          </div>
        )}
      </div>

      <div className={styles.descWrapper}>
        <div className={styles.descAndButton}>
          <h4>Описание</h4>
          {signUser !== id ? (
            dude.followers.find((item) => item === signUser) ? (
              <button onClick={handleUnSubscribe}>Отписаться</button>
            ) : (
              <button onClick={handleSubscribe}>Подписаться</button>
            )
          ) : null}
        </div>
        <div className={styles.userDesc}>
          <p>{dude.description}</p>
        </div>
        {lastBook && (
          <div className={styles.lastBook}>
            <div className={styles.lastBookWrapper}>
              <img
                src={
                  userBooks.length > 0 &&
                  `http://localhost:4000/${lastBook.img}`
                }
                alt="books"
              />
            </div>
            <div className={styles.lastBookText}>
              <h6>
                <span className={styles.lastText}>Последняя книга: </span>
                <span className={styles.bookName}>
                  {userBooks.length > 0 && lastBook.title}
                </span>
              </h6>
            </div>
          </div>
        )}
        <div className={styles.buttons}>
          <div className={styles.works}>
            <h6>{userBooks.length} книги</h6>
          </div>
          <div className={styles.subs}>
            <h6 onClick={() => setShowFollowers(true)}>
              {dude.followers.length} подписчиков
            </h6>
          </div>
        </div>
      </div>
      <UserInfo
        desc={dude.description}
        id={signUser}
        show={show}
        onHide={() => setShow(false)}
      />

      <Followers
        show={showFollowers}
        dude={dude}
        onHide={() => setShowFollowers(false)}
      />
    </div>
  );
};

export default UserCard;

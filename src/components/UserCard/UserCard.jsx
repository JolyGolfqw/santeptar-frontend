import React, { useEffect, useState } from "react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from "./userCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editAvatar, editProfile, loadUsers } from "../../redux/features/users";
import UserInfo from "./UserInfo";

const UserCard = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState("");
  const [opened, setOpened] = useState(false);
  const [preview, setPreview] = useState("");
  const [show, setShow] = useState(false);

  const user = useSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(loadUsers());
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [dispatch, photo]);

  const signUser = localStorage.getItem("user");

  const currentUser = user.find((item) => item._id === signUser);
  //   console.log(currentUser);


  const handleUpdateAvatar = () => {
    dispatch(editAvatar(photo, currentUser._id));
  };

  const defaultAvatar =
    "https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640528649_39-abrakadabra-fun-p-serii-chelovek-na-avu-44.jpg";
//   const userAvatar = `http://localhost:4000/${currentUser.avatar}`;
//   console.log(currentUser.avatar)
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img
            src={currentUser ? `http://localhost:4000/${currentUser.avatar}` : defaultAvatar}
          alt="book"
        />
        <h4>{currentUser ? currentUser.name : ""}</h4>
        <button onClick={() => setOpened(!opened)}>

          <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
        </button>
        {opened && (
          <div className={styles.editor}>
            <input
              type="file"
              id="upload"
              hidden
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setPhoto(file);
                } else {
                  setPhoto(null);
                }
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
          <button>Подписаться</button>
        </div>
        <div className={styles.userDesc}>
          <p>{currentUser ? currentUser.description : ""}</p>
        </div>
        <div className={styles.lastBook}>
          <div className={styles.lastBookWrapper}>
            <img
              src="https://fkniga.ru/media/product/04/040401/KA-00241064.jpg"
              alt="books"
            />
          </div>
          <div className={styles.lastBookText}>
            <h6>
              <span className={styles.lastText}>Последняя книга: </span>
              <span className={styles.bookName}>Десять негритят</span>
            </h6>
          </div>
          <div className={styles.date}>
            <h6>Сентябрь 22, 2021</h6>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.works}>
            <h6>2 книги</h6>
          </div>
          <div className={styles.subs}>
            <h6>15 подписчиков</h6>
          </div>
        </div>
      </div>
      <UserInfo
        desc={currentUser ? currentUser.description : ""}
        id={signUser}
        show={show}
        onHide={() => setShow(false)}
      />
    </div>
  );
};

export default UserCard;

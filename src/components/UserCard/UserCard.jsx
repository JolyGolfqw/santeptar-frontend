import React, { useEffect, useState } from "react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from "./userCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editAvatar, editProfile, loadUsers, subscribe, unSubscribe } from "../../redux/features/users";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";
import { loadBooks } from "../../redux/features/books";


const UserCard = () => {
  const {id} = useParams()
  const users = useSelector((state) => state.users.items);
  const books = useSelector((state) => state.books.items);
  const signUser = useSelector((state) => state.application.user);


  const dispatch = useDispatch();

  const [photo, setPhoto] = useState("");
  const [opened, setOpened] = useState(false);
  const [preview, setPreview] = useState("");
  const [show, setShow] = useState(false);

  const ava = `images/${photo.name}`
  
  const handleUpdateAvatar = () => {
    dispatch(editAvatar(photo, signUser));
    localStorage.setItem('avatar', ava)
    setTimeout(() =>{
      window.location.reload()

    }, 500)
  };
  const handleSubscribe = () => {
    dispatch(subscribe(signUser, id))
  }

  const handleUnSubscribe = () => {
    dispatch(unSubscribe(signUser, id))
  }


  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadBooks())
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

  const userBooks = books.filter(item => item.author._id === id)
  const lastBook = userBooks[userBooks.length - 1]



  const defaultAvatar =
    "https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640528649_39-abrakadabra-fun-p-serii-chelovek-na-avu-44.jpg";
  //   const userAvatar = `http://localhost:4000/${currentUser.avatar}`;
  return users.length > 0 && users.map(item => {
    if (item._id === id) {
      return (
        <div key={item._id} className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src={
            preview
            ? preview
              : `http://localhost:4000/${item.avatar}`
          }
          alt="book"
        />
        <h4>{item.name}</h4>
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
          {signUser !== id ? item.followers.find(item => item === signUser) ? <button onClick={handleUnSubscribe}>Отписаться</button> : <button onClick={handleSubscribe}>Подписаться</button> : null }
        </div>
        <div className={styles.userDesc}>
          <p>{item.description}</p>
        </div>
        <div className={styles.lastBook}>
          <div className={styles.lastBookWrapper}>
            <img
              src={userBooks.length > 0 && `http://localhost:4000/${lastBook.img}`}
              alt="books"
            />
          </div>
          <div className={styles.lastBookText}>
            <h6>
              <span className={styles.lastText}>Последняя книга: </span>
              <span className={styles.bookName}>{userBooks.length > 0 && lastBook.title}</span>
            </h6>
          </div>
          <div className={styles.date}>
            <h6>Сентябрь 22, 2021</h6>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.works}>
            <h6>{userBooks.length} книги</h6>
          </div>
          <div className={styles.subs}>
            <h6>{item.followers.length} подписчиков</h6>
          </div>
        </div>
      </div>
      <UserInfo
        desc={item.description}
        id={signUser}
        show={show}
        onHide={() => setShow(false)}
      />
    </div>
      )
      
    }
  }) 
};

export default UserCard;

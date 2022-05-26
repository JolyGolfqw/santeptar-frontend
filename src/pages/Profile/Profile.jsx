import React, { Component, useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import BigCard from "../../components/BigCard/BigCard";
import Header from "../../components/Header/Header";
import styles from "./profile.module.css";
import Footer from "../../components/Footer/Footer";
import WhileReadingCarousel from "../../components/WhileReading/WhileReadingCarousel";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../redux/features/users";
import { useParams } from "react-router-dom";
import { loadBooks } from "../../redux/features/books";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadBooks());
  }, [dispatch]);

  const users = useSelector((state) => state.users.items);
  const loader = useSelector((state) => state.users.loading);
  const books = useSelector((state) => state.books.items);

  const userBooks = books.filter((item) => item.author._id === id);

  if (loader) {
    return <div>Загрузка...</div>;
  }

  return users.map((item) => {
    if (item._id === id) {
      return (
        <>
          <div className={styles.firstSection}>
            <Header />
            <div className={styles.userInfo}>
              <UserCard dude={item} />
            </div>
          </div>
          <div className={styles.userStories}>
            <h1>{`Истории от ${item.name}`}</h1>
            <p>{userBooks.length} опубликованных работ</p>
            {books.map((book) => {
              if (book.author._id === id) {
                return (
                  <BigCard
                    img={book.img}
                    bookId={book._id}
                    title={book.title}
                    description={book.description}
                  />
                );
              }
            })}
          </div>
          <div className={styles.userReadingBook}>
            <h1>{`Что читает ${item.name}`}</h1>
            <div>
              <WhileReadingCarousel />
            </div>
          </div>
          <Footer />
        </>
      );
    }
  });
};

export default Profile;

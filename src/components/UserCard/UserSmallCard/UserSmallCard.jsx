import React from "react";
import styles from "./styles.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserSmallCard = ({ dude }) => {
  const books = useSelector((state) => state.books.items);
  const users = useSelector((state) => state.users.items);
  const userBooks = books.filter((item) => dude._id === item.author._id);
  console.log(users);
  return dude.followers.map((item) => {
     return users.map(i => {
          if (item === i._id) {
            // console.log(i)
        return (
            <div>
              <div className={styles.userCommit}>
                <div className={styles.userCommitImg}>
                  <img
                    className={styles.userCommitImage}
                    src={`http://localhost:4000/${i.avatar}`}
                    alt=""
                  />
                </div>
                <div className={styles.userCommitInterior}>
                  <div className={styles.userCommitNik}>{i.name}</div>
                  <div className={styles.userCommitMain}>
                    <div className={styles.userCommitMainSubscriber}>
                      Подписчики:
                      <div className={styles.number}>{i.followers.length}</div>
                    </div>
                    <div className={styles.userCommitMainBooks}>
                      Истории:
                      <div className={styles.number}>
                        {books.filter((book) => i._id === book.author._id).length}
                      </div>
                    </div>
                  </div>
                </div>
                <button className={styles.userCommitView}>
                  <div className={styles.userCommitIcon}>
                    <ion-icon name="person-outline"></ion-icon>
                  </div>
                  <Link to={`/profile/${i._id}`}>
                    <span>Перейти</span>
                  </Link>
                  <svg
                    width="40"
                    height="25"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="37"
                      cy="37"
                      r="35.5"
                      stroke="black"
                      stroke-width="3"
                    ></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          );
        }
      })
    
  });
};

export default UserSmallCard;

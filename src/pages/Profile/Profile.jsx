import React, {Component} from "react";
import UserCard from "../../components/UserCard/UserCard";
import BigCard from "../../components/BigCard/BigCard";
import Header from "../../components/Header/Header";
import styles from "./profile.module.css";
import Footer from "../../components/Footer/Footer";
import WhileReadingCard from "../../components/WhileReading/WhileReading";


const Profile = () => {

  return (
    <>
      <div className={styles.firstSection}>
        <Header />
        <div className={styles.userInfo}>
          <UserCard />
        </div>
      </div>
      <div className={styles.userStories}>
        <h1>Истории от Ридвана</h1>
        <p>2 опубликованных работ</p>
        <BigCard />
        <BigCard />
      </div>
      <div className={styles.userReadingBook}>
        <h1>Что читает Ридван</h1>
        <div>
           <WhileReadingCard/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

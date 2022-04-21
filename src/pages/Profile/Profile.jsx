import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import BigCard from '../../components/BigCard/BigCard'
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={styles.userInfo}>
        <UserCard />
      </div>
      <div className={styles.userStories}>
				<h1>Истории от Ридвана</h1>
				<p>2 опубликованных работ</p>
				<BigCard />
				<BigCard />
			</div>
			<div className={styles.userReadingBook}>
				<h1>Что читает Ридван</h1>
				<BigCard />
			</div>
    </>
  );
};

export default Profile;

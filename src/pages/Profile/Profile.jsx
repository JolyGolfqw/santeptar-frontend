import React, {Component, useEffect} from "react";
import UserCard from "../../components/UserCard/UserCard";
import BigCard from "../../components/BigCard/BigCard";
import Header from "../../components/Header/Header";
import styles from "./profile.module.css";
import Footer from "../../components/Footer/Footer";
import WhileReadingCarousel from "../../components/WhileReading/WhileReadingCarousel";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../redux/features/users";
import { useParams } from "react-router-dom";


const Profile = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])

  const users = useSelector(state => state.users.items)
console.log(users)
  const {id} = useParams()


  return users.length > 0 && users.map(item => {
    if (item._id === id) {
      console.log(item)
      return (
        <>
          <div className={styles.firstSection}>
            <Header />
            <div className={styles.userInfo}>
              <UserCard />
            </div>
          </div>
          <div className={styles.userStories}>
            <h1>{`Истории от ${item.name}`}</h1>
            <p>2 опубликованных работ</p>
            <BigCard />
            <BigCard />
          </div>
          <div className={styles.userReadingBook}>
            <h1>{`Что читает ${item.name}`}</h1>
            <div>
               <WhileReadingCarousel/>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }) 
};

export default Profile;

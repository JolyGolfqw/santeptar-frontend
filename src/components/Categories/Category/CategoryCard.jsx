import React from "react";
import styles from "./category.module.css";

const CategoryCard = ({item}) => {
  return (
    <>
      <div className={styles.card}>
        <span className={styles.title}>{item.name}</span>
        <div className={styles.image}>
          <img
            src={item.image}
            alt="img"
          ></img>
        </div>
      </div>
      
    </>
  );
};

export default CategoryCard;

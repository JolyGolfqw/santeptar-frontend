import React from "react";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./categoriesPage.module.css";

const CategoriesPage = () => {
  return (
    <div className={styles.categories}>
      <Header />
      <h1>Категории</h1>
      <Categories />
      <Footer />
    </div>
  );
};

export default CategoriesPage;

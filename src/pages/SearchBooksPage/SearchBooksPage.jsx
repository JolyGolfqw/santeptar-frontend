import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./searchBooksPage.module.css";
import { loadBooks } from "../../redux/features/books";
import { useDispatch, useSelector } from "react-redux";
import SmallCard from "../../components/Books/SmallCard/SmallCard";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBooksPage = () => {
  const books = useSelector((state) => state.books.items);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const filteredBooks = books.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: 25 }}>
      <Header />

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Поиск историй..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {!filteredBooks.length ? (
        <div className={styles.sector_clear}>
          <h2>Ничего не найдено...</h2>
        </div>
      ) : (
        <div className={styles.small_card}>
          {filteredBooks.map((item) => {
            return <SmallCard item={item} key={item._id} />;
          })}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SearchBooksPage;

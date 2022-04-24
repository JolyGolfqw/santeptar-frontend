import React, { useEffect } from "react";
import SmallCard from "./SmallCard/SmallCard";
import { loadBooks } from "../../redux/features/books";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Books/Books.module.css";
import ModalBookDesc from "../ModalBookDesc/ModalBookDesc";
import { useParams } from "react-router-dom";

const Books = () => {
  const books = useSelector((state) => state.books.items);
  const error = useSelector((state) => state.books.error);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  //!FILTERED-BOOKS-BY-CATEGORY
  const filteredBooks = books.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (loading) {
    return <div className="loading">{loading}</div>;
  }

  return (
    <div className={styles.small_card}>
      {filteredBooks.map((item) => {
        return <SmallCard item={item} key={item._id} />;
      })}
    </div>
  );
};

export default Books;

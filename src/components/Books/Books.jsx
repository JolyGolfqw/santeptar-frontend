import React, { useEffect } from "react";
import SmallCard from "./SmallCard/SmallCard";
import { loadBooks } from "../../redux/features/books";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Books/Books.module.css";

const Books = () => {
  const books = useSelector((state) => state.books.items);
  const error = useSelector((state) => state.books.error);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (loading) {
    return <div className="loading">{loading}</div>;
  }

  return (
    <div className={styles.small_card}>
      {books.map((item) => {
        return <SmallCard item={item} key={item._id} />;
      })}
    </div>
  );
};

export default Books;

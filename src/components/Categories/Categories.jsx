import React from "react";
import CategoryCard from "./Category/CategoryCard";
import styles from "./categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import { useEffect } from "react";

const Categories = () => {
  const categories = useSelector((state) => state.categories.items);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  console.log(categories)

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (error) {
    return { error };
  }
  if (loading) {
    return { loading };
  }

  return (
    <div className={styles.category_content}>
      {categories.map((item) => {
        return <CategoryCard item={item} key={item._id} />
      })}
    </div>
  );
};

export default Categories;

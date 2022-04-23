import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { loadBooks } from "../../redux/features/books";
import style from "../SingleBookRead/singleBookRead.module.css";
import CommentPost from "./CommentPost";
const SingleBookRead = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBooks())
  }, [dispatch])

  const books = useSelector((state) => state.books.items);

  const { id } = useParams()

  const currentBook = books.find(item => item._id === id)

  console.log(currentBook)

  return (
    <>
      <Header />
      {/* bookname */}
      <div className={style.slash}>
        <div className={style.card}>
          <div className={style.divImage}>
            <img
              className={style.image}
              src="https://img.wattpad.com/cover/231189609-416-k841095.jpg"
              alt="img"
            />
          </div>
          <div className={style.inform}>
            <div className={style.title}>Пепел забытых мгновений</div>
            {/* ICONS */}
            <div className={style.icons}>
              <div className={style.icon}>
                <div className={style.head}>
                  <div className={style.logo}>
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className={style.like}>Рейтинг</div>
                </div>
                <div className={style.count}>322</div>
              </div>
              <div className={style.icon}>
                <div className={style.head}>
                  <div className={style.logo}>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
                  <div className={style.like}>Избранное</div>
                </div>
                <div className={style.count}>12</div>
              </div>
              <div className={style.icon}>
                <div className={style.head}>
                  <div className={style.logo}>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                  </div>
                  <div className={style.like}>Комментарии</div>
                </div>
                <div className={style.count}>52</div>
              </div>
            </div>
            {/* BUTTON  */}
            <a className={style.fancy} href="#">
              <span className={style.top_key}></span>
              <span className={style.text}>История завершена</span>
              <span className={style.btn1}></span>
              <span className={style.btn2}></span>
            </a>
          </div>
        </div>
      </div>
      {/* read  */}
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.sidebar}>
            <div className={style.avatar}>
              <ion-icon name="logo-github"></ion-icon>
            </div>
            <div className={style.name}>
              by <span>Sidek</span>
            </div>
            <div className={style.follovers}></div>
          </div>
          <div className={style.reading_field}>
            <h1>Пролог</h1>
            <div className={style.readPage}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
              repudiandae. Odit dicta tempore consectetur suscipit deleniti nam
              blanditiis esse quo hic! Neque minus illum fugit, aliquid mollitia
              odit debitis quisquam. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Iusto, repudiandae. Odit dicta tempore
              consectetur suscipit deleniti nam blanditiis esse quo hic! Neque
              minus illum fugit, aliquid mollitia odit debitis quisquam. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
              repudiandae. Odit dicta tempore consectetur suscipit deleniti nam
              blanditiis esse quo hic! Neque minus illum fugit, aliquid mollitia
              odit debitis quisquam.
            </div>
            <CommentPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBookRead;

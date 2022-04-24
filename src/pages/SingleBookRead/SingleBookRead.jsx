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



  return books.map(item => {
    if (item._id === id) {
      return (
        <>
        {console.log(item)}
          <Header />
          {/* bookname */}
          <div className={style.slash}>
            <div className={style.card}>
              <div className={style.divImage}>
                <img
                  className={style.image}
                  src={`http://localhost:4000/${item.img}`}
                  alt="img"
                />
              </div>
              <div className={style.inform}>
                <div className={style.title}>{item.title}</div>
                {/* ICONS */}
                <div className={style.icons}>
                  <div className={style.icon}>
                    <div className={style.head}>
                      <div className={style.logo}>
                        <ion-icon name="heart-outline"></ion-icon>
                      </div>
                      <div className={style.like}>Рейтинг</div>
                    </div>
                    <div className={style.count}>{item.likes.length}</div>
                  </div>
                  <div className={style.icon}>
                    <div className={style.head}>
                      <div className={style.logo}>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                      <div className={style.like}>Избранное</div>
                    </div>
                    <div className={style.count}>{item.likes.length}</div>
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
                  by <span>{item.author.name}</span>
                </div>
                <div className={style.follovers}></div>
              </div>
              <div className={style.reading_field}>
                <h1>Пролог</h1>
                <div className={style.readPage}>
                  {item.text}
                </div>
                <CommentPost />
              </div>
            </div>
          </div>
        </>
      );
    }
  })
  
};

export default SingleBookRead;

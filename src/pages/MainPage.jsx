import React, { useEffect } from "react";
import Carusel from "../components/Carusel/Carusel";
import Header from "../components/Header/Header";
import Books from "../components/Books/Books";
import BigCard from "../components/BigCard/BigCard";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

export default function MainPage() {
const books = useSelector(state => state.books.items)

const randomOne = Math.floor(Math.random(0, 12) * 10)
const randomTwo = Math.floor(Math.random(0, 12) * 10) 
const randomThree = Math.floor(Math.random(0, 12) * 10) 

  return (
    <>
      <div className="firstSection">
        <Header />
        <Carusel />
      </div>
      <div className="secondSection">
        <div className="mainTitlePage">Откройте для себя</div>
        <div className="suggestions">
          <h1>Взглянуть, что интересного</h1>
        </div>
        <Books />
      </div>
      <div className="thirdSection">
        <div className="suggestions">
          <h1>Найдите, что почитать</h1>
        </div>

        {books.map((book, i) => {
          if (i === randomThree) {
            return (<BigCard img={book.img} bookId={book._id} title={book.title} description={book.description}/>)
          }
        })}
        <Books />
      </div>
      <div className="fourthSection">
        <div className="suggestions">
          <h1>Что мы сейчас читаем</h1>
        </div>
        {books.map((book, i) => {
          if (i === randomOne) {
            return (<BigCard img={book.img} title={book.title} description={book.description}/>)
          }
        })}
        <Books />
      </div>
      <div className="fifthSection">
        <div className="suggestions">
          <h1>Лучшее предложение для Вас</h1>
        </div>
        {books.map((book, i) => {
          if (i === randomTwo) {
            return (<BigCard img={book.img} title={book.title} description={book.description}/>)
          }
        })}
        <Books />
      </div>
      <Footer />
    </>
  );
}

import React from "react";
import Carusel from "../components/Carusel/Carusel";
import Header from "../components/Header/Header";
import Books from "../components/Books/Books";
import BigCard from "../components/BigCard/BigCard";
import Footer from "../components/Footer/Footer";

export default function MainPage() {
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
        <BigCard />
        <Books />
      </div>
      <div className="fourthSection">
        <div className="suggestions">
          <h1>Что мы сейчас читаем</h1>
        </div>
        <BigCard />
        <Books />
      </div>
      <div className="fifthSection">
        <div className="suggestions">
          <h1>Лучшее предложение для Вас</h1>
        </div>
        <BigCard />
        <Books />
      </div>
      <Footer />
    </>
  );
}

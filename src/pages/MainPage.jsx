import React from "react";
import Carusel from "../components/Carusel/Carusel";
import Header from "../components/Header/Header";
import Books from "../components/Books/Books";
import BigCard from "../components/BigCard/BigCard";
import ModalBookDesc from "../components/ModalBookDesc/ModalBookDesc";
import Footer from "../components/Footer/Footer";
export default function MainPage() {
  return (
    <div>
      <Header />
      <Carusel />
      <div className="mainTitlePage">Откройте для себя</div>
      <div className="suggestions">Взглянуть, что интересного</div>
      <Books />
      <div className="suggestions">Найдите, что почитать</div>
      <BigCard />
      <Books />
      <div className="suggestions">Что мы сейчас читаем</div>
      <BigCard />
      <Books />
      <div className="suggestions">Лучшее предложение для вас</div>
      <BigCard />
      <Books />
      <Footer/>
    </div>
  );
}

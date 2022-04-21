import React from 'react';
import Carusel from "./components/Carusel/Carusel"
import Books from "./components/Books/Books"
import ModalBookDesc from './components/ModalBookDesc/ModalBookDesc';
import WhileReadingCard from "./components/WhileReading/WhileReading";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Header/>
      <Carusel/>
      <Books/>
      <ModalBookDesc/>
    </div>
  );
};

export default App;

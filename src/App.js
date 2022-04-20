import React from 'react';
import Carusel from "./components/Carusel/Carusel"
import Books from "./components/Books/Books"
import ModalBookDesc from './components/ModalBookDesc/ModalBookDesc';
const App = () => {
  return (
    <div>
      <Carusel/>
      <Books/>
      <ModalBookDesc/>
    </div>
  );
};

export default App;

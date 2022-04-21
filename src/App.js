import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carusel from "./components/Carusel/Carusel"
import Books from "./components/Books/Books"
import ModalBookDesc from './components/ModalBookDesc/ModalBookDesc';
import Header from "./components/Header/Header";
import BookAddingPage from './pages/BookAddingPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
    <div>
      {/* <Header/> */}
      {/* <Carusel/>
      <Books/>
      <ModalBookDesc/> */}
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/myworks/new" element={<BookAddingPage />} />
      {/* <Route path="/news/:id" element={<FullNews />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SigninUpPage />} /> */}
    </Routes>
  </BrowserRouter>
  </>
  );
};

export default App;

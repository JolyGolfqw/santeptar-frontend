import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carusel from "./components/Carusel/Carusel";
import Books from "./components/Books/Books";
import ModalBookDesc from "./components/ModalBookDesc/ModalBookDesc";
import WhileReadingCard from "./components/WhileReading/WhileReading";
import Header from "./components/Header/Header";
import BookAddingPage from "./pages/BookAddingPage";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import Profile from "./pages/Profile/Profile";
import CategotyLinkPage from "./components/CategoryLinkPage/CategotyLinkPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/myworks/new" element={<BookAddingPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/render/category" element={<CategotyLinkPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookAddingPage from './pages/BookAddingPage';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import Profile from './pages/Profile/Profile';
import HistoryText from './components/CreateStory/HistoryText';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/myworks/new" element={<BookAddingPage />} />
      <Route path="/myworks/new/history" element={<HistoryText />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

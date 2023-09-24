import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Design Files
import ScrollToTop from './Components/Sections/ScrollToTop';
import Loader from "./Components/Sections/Loader";
import Header from "./Components/Sections/Header";
import Footer from './Components/Sections/Footer';
import Home from './Components/Home';
import Search from './Components/Search';
import Detail from './Components/Detail';
import Login from './Components/Login';
import Starlogin from './Components/Starlogin';
import Starportfolio from "./Components/Starportfolio";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/starlogin" element={<Starlogin screenhed="as star" startfield="d-block" />} />
          <Route path="/starportfolio" element={<Starportfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

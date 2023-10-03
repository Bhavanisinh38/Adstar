import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Design Files

// Header Sections
import ScrollToTop from './Components/Sections/ScrollToTop';
import Loader from "./Components/Sections/Loader";
import Header from "./Components/Sections/Header";

// Pages
import Home from './Components/Home';
import Search from './Components/Search';
import Detail from './Components/Detail';
import Login from './Components/Login';
import Starlogin from './Components/Starlogin';
import Starportfolio from "./Components/Starportfolio";
import Book from './Components/Book';
import Account from './Components/Account';

// Footer Section
import Commonpopup from './Components/Sections/Commonpopup';
import FlashMessage from "./Components/Sections/FlashMessage";
import Footer from './Components/Sections/Footer';

function App() {

  // Get the current location using react-router's useLocation hook
  const location = useLocation();

  // Define an array of paths where you want to hide the footer
  const pathsToHideheader = ['/book'];
  const pathsToHideFooter = ['/search', '/book', '/account'];
  
  // Check if the current path is in the array of paths to hide the footer
  const hideheader = pathsToHideheader.includes(location.pathname);
  const hideFooter = pathsToHideFooter.includes(location.pathname);

  // -----
  let footerClassName = '';

  if (location.pathname === '/detail') {
    footerClassName = 'footer-detail';
  }
  // ----- //

  return (
      <>
        <ScrollToTop />
        <Loader />
        {!hideheader && <Header />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/starlogin" element={<Starlogin screenhed="as star" startfield="d-block" />} />
            <Route path="/starportfolio" element={<Starportfolio />} />
            <Route path="/book" element={<Book />} />
            <Route path="/account" element={<Account />} />
        </Routes>
        <Commonpopup />
        <FlashMessage />
        {!hideFooter && <Footer footertag={footerClassName} />}
      </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;

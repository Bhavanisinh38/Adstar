import React from 'react';
import ReactDOM from 'react-dom/client';

// Css Links
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/header.css';
import './css/sidemenu.css';
import './css/categories.css';
import './css/howitwork.css';
import './css/isadstart.css';
import './css/recentreviews.css';
import './css/celebrityvideo.css';
import './css/celebrityitem.css';
import './css/gift.css';
import './css/searchpage.css';
import './css/detail.css';
import './css/commonform.css'
import './css/style.css';


// Scripts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

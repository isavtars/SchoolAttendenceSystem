

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//context
import {Authprovider} from "./context/authCont/authContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Authprovider>
    <App />

    </Authprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



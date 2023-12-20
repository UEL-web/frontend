import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from "react-toastify";
import {IndexRouter} from "./routers/IndexRouter";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <IndexRouter />
    <ToastContainer />
  </>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DeepPage from './views/deep';
import HistoryPage from './views/history';
import AboutPage from './views/about';
import HomePage from './views/home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "deep",
    element: <DeepPage/>
  },
  {
    path: "about",
    element: <AboutPage/>
  },
  {
    path: "history",
    element: <HistoryPage/>
  },
  {
    path: "home",
    element: <HomePage/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

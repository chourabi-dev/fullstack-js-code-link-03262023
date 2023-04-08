import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import UserPage from './pages/users';
import NotFound from './pages/notFound';
import UserDetailsPage from './pages/userDetails';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },

  {
    path: "/users/details/:id",
    element: <UserDetailsPage />,
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

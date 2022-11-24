import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { Error, MusicPlayer } from './pages'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/music-player",
    element: <MusicPlayer />,
    errorElement: <Error />,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


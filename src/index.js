import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, Home, Library } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "Library",
        element: <Library />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


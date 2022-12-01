import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { Error, Root, Library } from './pages'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route path="library" element={<Library />} />
    </Route>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


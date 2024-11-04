import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate, useLocation} from "react-router-dom";
import App from './App';
import Registrate from './Registrate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
    // element: <Navigate to="/desktop" />,
  },
  {
    path: "/login",
    element: <Registrate />,
  },
  {
    path: "/desktop",
    element: <App />
  }
]);


const app = ReactDOMClient.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={router} />);
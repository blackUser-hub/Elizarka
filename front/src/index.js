import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Registrate from './Registrate';
import Desktop from './desktop';
import NotesHistory from './components/desktop/notes_history'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Registrate />,
  },
  {
    path: "/desktop",
    element: <Desktop />,
    children: [{
      path: ":year/:month/:day",
      element: <NotesHistory />,
    }]
  }
]);


const app = ReactDOMClient.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={router} />);
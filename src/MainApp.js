import React from 'react';
import Signup from 'signup/Signup';
import Homepage from 'homepage/Homepage';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const MainApp = ({ children }) => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Homepage />,
        },
        {
            path: "/signup",
            element: <Signup />,
          },
      ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default MainApp;
import React, { Suspense, lazy } from 'react';
import Homepage from 'homepage/Homepage';
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
const Signup = lazy(() => import('signup/Signup'));

const MainApp = ({ children }) => {

  const router = createHashRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/signup",
      element: <Suspense>
        <Signup />
      </Suspense>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default MainApp;
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/Classes/AllClasses";
import Login from "../Pages/Login/Login";
import Page404 from "../Pages/Page404/Page404";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'class',
          element:<AllClasses></AllClasses>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '*',
          element: <Page404></Page404>
        }
      ]
    },
  ]);
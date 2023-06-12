import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/Classes/AllClasses";
import Login from "../Pages/Login/Login";
import Page404 from "../Pages/Page404/Page404";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/StudentDashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";




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
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children: [
        {
          path: '/dashboard/studentdashboard',
          element: <StudentDashboard></StudentDashboard>
        },
        {
          path: '/dashboard/allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: '/dashboard/addclass',
          element: <AddClass></AddClass>
        }
      ]
    },
    {
      path: '*',
      element: <Page404></Page404>
    }
  ]);
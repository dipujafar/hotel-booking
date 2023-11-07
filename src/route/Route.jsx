import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";


const route =  createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'rooms',
          element: <Rooms></Rooms>
        },
        {
          path: 'myBookings',
          element: <MyBookings></MyBookings>
        },
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);

export default route;
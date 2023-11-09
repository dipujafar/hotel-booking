import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import MyBooking from "../pages/MyBooking/MyBooking";
import PrivateRoute from "./privateRoute/privateRoute";


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
          element: <Rooms></Rooms>,
        },
        {
          path: "room/:id",
          element: <RoomDetails></RoomDetails>
        },
        {
          path: 'myBookings',
          element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
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
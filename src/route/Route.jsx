import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";


const route =  createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
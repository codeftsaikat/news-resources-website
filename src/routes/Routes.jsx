import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import News from "../pages/news/News";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:() => fetch('/news.json')
      },
      {
        path:"/news/:id",
        element:<PrivateRoute><News/></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default route;
import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        loader: () => fetch("https://elearning-server.vercel.app/courses"),
        element: <Courses />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

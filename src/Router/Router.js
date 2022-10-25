import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
    ],
  },
]);

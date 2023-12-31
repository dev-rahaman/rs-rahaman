import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../Pages/ErrorPage/ErrorPages";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";
import WorkSimple from "../Pages/WorkSimple/WorkSimple";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://rs-rahaman.vercel.app/work-simple"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/experience",
        element: <Home></Home>,
      },
      {
        path: "/work-simple",
        element: <WorkSimple></WorkSimple>,
        loader: () => fetch("https://rs-rahaman.vercel.app/work-simple"),
      },
    ],
  },
]);

export default Router;

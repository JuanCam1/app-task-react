import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Home, Login, Register, Projects, Profile } from "../pages";
import { App } from "../App";
import Project from "../pages/project/sections/Project";
import NewProject from "../pages/project/sections/NewProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:idProject",
        element: <Project />,
      },
      {
        path: "project/create",
        element: <NewProject />,
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
]);

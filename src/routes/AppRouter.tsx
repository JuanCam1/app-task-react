import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Home, Login, Register, Projects, Profile } from "../pages";
import { App } from "../App";

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
        element: <Projects />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
]);

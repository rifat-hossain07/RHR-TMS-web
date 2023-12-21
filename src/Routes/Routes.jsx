import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Private from "./Private";
import AddTask from "../Pages/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />,
          </Private>
        ),
      },
      {
        path: "/addTask",
        element: (
          <Private>
            <AddTask />,
          </Private>
        ),
      },
    ],
  },
]);

export default router;

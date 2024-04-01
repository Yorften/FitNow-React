import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./components/layouts/DefaultLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import Index from './views/dashboard/sessions/Index';
import CreateSession from './views/dashboard/sessions/CreateSession';
import ShowSession from './views/dashboard/sessions/ShowSession';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
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

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/sessions",
        element: <Index />,
      },

      {
        path: "/dashboard/sessions/create",
        element: <CreateSession />,
      },

      {
        path: "/dashboard/sessions/:sessionId",
        element: <ShowSession />,
      },

    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

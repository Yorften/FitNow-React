import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./components/layouts/DefaultLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import Index from "./views/dashboard/sessions/Index";
import Create from "./views/dashboard/sessions/Create";
import Show from "./views/dashboard/sessions/Show";
import Edit from "./views/dashboard/sessions/Edit";

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
        element: <Create />,
      },

      {
        path: "/dashboard/sessions/:sessionId",
        element: <Show />,
      },

      {
        path: "/dashboard/sessions/edit/:sessionId",
        element: <Edit />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

import { useRoutes, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/app.context";
import { PATH } from "./constants/path";

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default function createRoutes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router_elements = useRoutes([
    {
      path: "",
      element: <ProtectedRoute />,
    },
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.login,
          element: <></>,
        },
        {
          path: PATH.register,
          element: <></>,
        },
      ],
    },
    {
      path: PATH.home,
      index: true,
      element: <></>,
    },
  ]);

  return router_elements;
}

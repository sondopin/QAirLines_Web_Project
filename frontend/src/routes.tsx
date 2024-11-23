import { useRoutes } from "react-router-dom";
import { PATH } from "./constants/path";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import PrivateRoute from "./guards/PrivateRoute";
import AdminRoute from "./guards/AdminRoute";
import RejectedRoute from "./guards/RejectedRoute";
import Search from "./pages/Search";

export default function createRoutes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router_elements = useRoutes([
    {
      path: "",
      element: <PrivateRoute />,
    },
    {
      path: PATH.admin.base,
      element: <AdminRoute />,
    },
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.login,
          element: <LoginPage />,
        },
        {
          path: PATH.register,
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: PATH.home,
      index: true,
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: PATH.search,
      element: (
        <Layout>
          <Search />
        </Layout>
      ),
    },
  ]);

  return router_elements;
}

import { useRoutes } from "react-router-dom";
import { PATH } from "./constants/path";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Layout from "./layouts/Layout";
import HomePage from "./pages/Home";
import PrivateRoute from "./guards/PrivateRoute";
import AdminRoute from "./guards/AdminRoute";
import RejectedRoute from "./guards/RejectedRoute";
import SearchPage from "./pages/Search";
import BookingPage from "./pages/Booking";

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
          <HomePage />
        </Layout>
      ),
    },
    {
      path: PATH.search,
      index: true,
      element: (
        <Layout>
          <SearchPage />
        </Layout>
      ),
    },
    {
      path: PATH.booking,
      index: true,
      element: (
        <Layout>
          <BookingPage />
        </Layout>
      ),
    }
  ]);

  return router_elements;
}

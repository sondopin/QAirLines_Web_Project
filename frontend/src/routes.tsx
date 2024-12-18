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
import Booking from "./pages/Booking";
import MyBooking from "./pages/MyBooking";
import ConfirmCancelBooking from "./pages/ConfirmCancelBooking";
import AirplaneManagement from "./pages/AirplaneManagement";
import ViewFlight from "./pages/ViewFlight";
import EditNews from "./pages/EditNews";
import NewsDetails from "./pages/NewsDetails";
import NewsList from "./pages/NewsList";
import AddFlight from "./pages/AddFlight";
import UserProfile from "./pages/UserProfile";
import AddAirplane from "./pages/AddAirplane";

export default function createRoutes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router_elements = useRoutes([
    {
      path: "",
      element: <PrivateRoute />,
      children: [
        {
          path: PATH.user.mybooking,
          element: (
            <Layout>
              <MyBooking />
            </Layout>
          ),
        },
        {
          path: PATH.user.booking,
          element: (
            <Layout>
              <Booking />
            </Layout>
          ),
        },
        {
          path: PATH.user.cancel_booking,
          element: (
            <Layout>
              <ConfirmCancelBooking />
            </Layout>
          ),
        },
      ],
    },
    {
      path: "",
      element: <AdminRoute />,
      children: [
        {
          path: PATH.admin.manage,
          element: (
            <Layout>
              <AirplaneManagement />
            </Layout>
          ),
        },
        {
          path: PATH.admin.view_flight,
          element: (
            <Layout>
              <ViewFlight flightNumber="Hekko" />
            </Layout>
          ),
        },
        {
          path: PATH.admin.upload_news,
          element: (
            <Layout>
              <EditNews />
            </Layout>
          ),
        },
        {
          path: PATH.admin.view_news,
          element: (
            <Layout>
              <NewsList />
            </Layout>
          ),
        },
        {
          path: PATH.admin.add_flight,
          element: (
            <Layout>
              <AddFlight />
            </Layout>
          ),
        },
        {
          path: PATH.admin.add_airplane,
          element: (
            <Layout>
              <AddAirplane />
            </Layout>
          ),
        },
      ],
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
      element: (
        <Layout>
          <SearchPage />
        </Layout>
      ),
    },
    {
      path: PATH.blog_details,
      element: (
        <Layout>
          <NewsDetails />
        </Layout>
      ),
    },
    {
      path: PATH.admin.chart,
      element: (
        <Layout>
          <Chart />
        </Layout>
      ),
    },
    {
      path: PATH.user.userProfile,
      element: (
        <Layout>
          <UserProfile />
        </Layout>
      ),
    },
  ]);

  return router_elements;
}

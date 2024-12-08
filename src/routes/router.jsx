import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout";
import Root from "../layout/Root";
import AddReview from "../pages/AddReview";
import AllReview from "../pages/AllReview";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyReview from "../pages/MyReview";
import ReviewDetails from "../pages/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";
import WatchList from "../pages/WatchList";
import PrivateRoute from "../private/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chill-gamer-server-nu.vercel.app/reviews"),
      },
      {
        path: "/allreview",
        element: <AllReview />,
      },
      {
        path: "/reviewDetails/:id",

        element: <ReviewDetails />,
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRoute>
            <WatchList />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

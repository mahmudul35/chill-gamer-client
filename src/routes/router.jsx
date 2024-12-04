import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import AuthLayout from "../layout/AuthLayout";
import Root from "../layout/Root";
import AddReview from "../pages/AddReview";
import AllReview from "../pages/AllReview";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/allreview",
        element: <AllReview />,
      },
      {
        path: "/addreview",
        element: <AddReview />,
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
    ],
  },
]);

export default router;

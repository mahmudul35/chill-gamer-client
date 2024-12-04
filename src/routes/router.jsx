import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
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
    ],
  },
]);

export default router;

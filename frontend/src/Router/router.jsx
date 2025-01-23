import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";
import EditJob from "../Pages/EditJob";
import SignIn from "../components/SignIn";
import JobDetail from "../Pages/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "/salary", element: <Salary /> },
      {
        path: "/edit-job/:id",
        element: <EditJob />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:3000/all-jobs/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch job data");
          }
          return response.json();
        },
      },
      {
        path: "/job/:id",
        element: <JobDetail />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;

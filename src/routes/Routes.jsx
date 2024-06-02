import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/Contact/ContactPage";
import SignInPage from "../pages/Authentication/SignInPage";
import SignUpPage from "../pages/Authentication/SignUpPage";
import GuestOnlyRoute from "./GuestOnlyRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/sign-in",
    errorElement: <ErrorLayout />,
    element: (
      <GuestOnlyRoute>
        <SignInPage />
      </GuestOnlyRoute>
    ),
  },
  {
    path: "/sign-up",
    errorElement: <ErrorLayout />,
    element: (
      <GuestOnlyRoute>
        <SignUpPage />
      </GuestOnlyRoute>
    ),
  },
]);

export default router;

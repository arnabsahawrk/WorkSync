import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/Contact/ContactPage";
import SignInPage from "../pages/Authentication/SignInPage";
import SignUpPage from "../pages/Authentication/SignUpPage";
import GuestOnlyRoute from "./GuestOnlyRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../pages/Dashboard/Profile/ProfilePage";
import WorkSheetPage from "../pages/Dashboard/WorkSheet/WorkSheetPage";
import PaymentHistoryPage from "../pages/Dashboard/PaymentHistory/PaymentHistoryPage";
import EmployeeListPage from "../pages/Dashboard/EmployeeList/EmployeeListPage";
import HrRoute from "./HrRoute";
import EmployeeDetailsPage from "../pages/Dashboard/EmployeeDetails/EmployeeDetailsPage";

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
  {
    path: "/dashboard",
    errorElement: <ErrorLayout />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      // Employee Routes
      {
        path: "/dashboard/work-sheet",
        element: (
          <PrivateRoute>
            <WorkSheetPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistoryPage />
          </PrivateRoute>
        ),
      },
      // HR Routes
      {
        path: "/dashboard/employee-list",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeListPage />
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/employee-list/details/:slug",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeDetailsPage />
            </HrRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

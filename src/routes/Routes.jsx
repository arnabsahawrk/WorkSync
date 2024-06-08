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
import ProgressPage from "../pages/Dashboard/Progress/ProgressPage";
import AdminRoute from "./AdminRoute";
import AllEmployeeListPage from "../pages/Dashboard/AllEmployeeList/AllEmployeeListPage";
import FiredRoute from "./FiredRoute";

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
        <FiredRoute>
          <DashboardLayout />
        </FiredRoute>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <FiredRoute>
              <ProfilePage />
            </FiredRoute>
          </PrivateRoute>
        ),
      },
      // Employee Routes
      {
        path: "/dashboard/work-sheet",
        element: (
          <PrivateRoute>
            <FiredRoute>
              <WorkSheetPage />
            </FiredRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateRoute>
            <FiredRoute>
              <PaymentHistoryPage />
            </FiredRoute>
          </PrivateRoute>
        ),
      },
      // HR Routes
      {
        path: "/dashboard/employee-list",
        element: (
          <PrivateRoute>
            <FiredRoute>
              <HrRoute>
                <EmployeeListPage />
              </HrRoute>
            </FiredRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/employee-list/details/:slug",
        element: (
          <PrivateRoute>
            <FiredRoute>
              <HrRoute>
                <EmployeeDetailsPage />
              </HrRoute>
            </FiredRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/progress",
        element: (
          <PrivateRoute>
            <FiredRoute>
              <HrRoute>
                <ProgressPage />
              </HrRoute>
            </FiredRoute>
          </PrivateRoute>
        ),
      },
      //Admin Routes
      {
        path: "/dashboard/all-employee-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllEmployeeListPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

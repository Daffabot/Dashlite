/* @refresh skip */
import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "@/modules/auth/components/ProtectedRoute";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/modules/auth/providers/AuthProvider";
import { ThemeProvider } from "@/modules/dashboard/providers/ThemeProvider";

const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const AccountPage = lazy(() => import("@/pages/profile/AccountPage"));
const SettingPage = lazy(() => import("@/pages/menu/SettingPage"));
const NotificationPage = lazy(
  () => import("@/pages/profile/NotificationPage"),
);
const UserPage = lazy(() => import("@/pages/menu/UserPage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const SignUpPage = lazy(() => import("@/pages/auth/SignUpPage"));
const CodePage = lazy(() => import("@/pages/CodePage"));
const ForgotPasswordPage = lazy(
  () => import("@/pages/auth/ForgotPasswordPage"),
);
const Template = lazy(() => import("@/pages/Template"));

const code = {
  notFoundProps: {
    code: 404,
    title: "Page Not Found",
    desc: "The page you are looking for is not available or has been moved.",
  },
  forbiddenProps: {
    code: 403,
    title: "Forbidden Page",
    desc: "We are sorry, but you do not have access to this page or resource.",
  },
};

function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
}

/**
 * Application route configuration for react-router.
 * Uses `React.lazy` for code-splitting of page components.
 */
export function GetRoutes(): RouteObject[] {
  return [
    {
      element: <RootLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPasswordPage />,
        },
        {
          path: "/dashboard/accounts",
          element: (
            <ProtectedRoute role="user">
              <AccountPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute role="user">
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/users",
          element: (
            <ProtectedRoute role="admin">
              <UserPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/settings",
          element: (
            <ProtectedRoute role="owner">
              <SettingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/accounts/notifications",
          element: (
            <ProtectedRoute role="user">
              <NotificationPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/forbidden",
          element: <CodePage codeProps={code.forbiddenProps} />,
        },
        {
          path: "/template",
          element: <Template />,
        },
        {
          path: "*",
          element: <CodePage codeProps={code.notFoundProps} />,
        },
      ],
    },
  ];
}

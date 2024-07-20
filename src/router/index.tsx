import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { PATHS } from "./paths";
import { MainLayout } from "@/features/app/components/main-layout";
import HomePage from "@/features/main/home-page";
import { MainErrorPage } from "@/features/app/components/main-error-page";
import { LoginPage } from "@/features/auth/login/login-page";
import { RequireAuth } from "@/features/app/components/auth-guard";

export const router = createBrowserRouter([
  {
    path: "auth/*",
    element: <Outlet />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //   path: "register",
      //   element: (
      //     <RequireNotLogged>
      //       <RegisterPage />
      //     </RequireNotLogged>
      //   ),
      // },
    ],
  },
  {
    path: "main/*",
    element: (
      <RequireAuth>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </RequireAuth>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
        errorElement: <MainErrorPage />,
      },
      {
        path: "*",
        element: <Navigate to={PATHS.main.home} />,
        errorElement: <MainErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={PATHS.main.home} />,
  },
]);

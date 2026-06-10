import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

export function MainLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/login" ? <NavBar /> : <></>}

      <main>
        <Outlet />
      </main>

      {location.pathname != "/login" ? (
        <img
          src="src/assets/metal-with-rust.png"
          className="absolute w-screen h-auto brightness-30 -z-10 object-crop"
          alt=""
        />
      ) : (
        <></>
      )}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" replace /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

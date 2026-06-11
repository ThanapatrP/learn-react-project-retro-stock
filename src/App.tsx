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
import PokeApiPage from "./pages/PokeApiPage/PokeApiPage";

export function MainLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/login" ? <NavBar /> : <></>}

      <main>
        <Outlet />
      </main>

      {location.pathname != "/login" ? (
        <div className="absolute top-0 w-screen h-screen bg-gray-800 -z-10"></div>
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
      { path: "/pokeapi", element: <PokeApiPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

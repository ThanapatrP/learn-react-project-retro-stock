import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/login/login_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

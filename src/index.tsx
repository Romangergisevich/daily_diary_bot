import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ui/pages/ErrorPage";
import SecondPage from "./components/ui/pages/SecondPage";
import FirstPage from "./components/ui/pages/FirstPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*firstPage",
        element: <FirstPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*secondPage",
        element: <SecondPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

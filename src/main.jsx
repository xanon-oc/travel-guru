import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProviders from "./AuthProviders/AuthProviders.jsx";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={route}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import CloseSideBarProvider from "./contexts/closeSideBar";
import AuthProvider from "./contexts/AuthContext";
import { FavProvider } from "./contexts/FavContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CloseSideBarProvider>
        <FavProvider>
          <RouterProvider router={router} />
        </FavProvider>
      </CloseSideBarProvider>
    </AuthProvider>
  </React.StrictMode>,
);

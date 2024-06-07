import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import CloseSideBarProvider from "./contexts/closeSideBar";
import AuthProvider from "./contexts/AuthContext";
import { FavoritesProvider } from "./contexts/FavContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CloseSideBarProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </CloseSideBarProvider>
    </AuthProvider>
  </React.StrictMode>,
);

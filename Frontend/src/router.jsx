import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getProduit } from "./apis";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AdminAddProduitForm from "./pages/Admin/components/AdminAddProduitForm/AdminAddProduitForm";
import AdminEditProduitForm from "./pages/Admin/components/AdminEditProduitForm/AdminEditProduitForm";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "add",
            element: <AdminAddProduitForm />,
          },
          {
            path: "edit/:produitId",
            element: <AdminEditProduitForm />,
            loader: async ({ params: { produitId } }) => getProduit(produitId),
          },
        ],
      },
    ],
  },
]);

export default router;

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Ajoutez des boutons ou des liens si l'utilisateur est connecté */}
      {user && (
        <NavLink to="/admin/add">
          <IoMdAdd /> Ajouter Produits
        </NavLink>
      )}

      {/* Le contenu principal de la route affichée sera rendu ici */}
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;

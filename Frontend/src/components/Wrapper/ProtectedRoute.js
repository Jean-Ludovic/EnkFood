import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AuthContext } from "./path-to/AuthContext"; // Assurez-vous que le chemin est correct
import { IoMdAdd } from "react-icons/io";

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user && (
        <NavLink to="/admin/add" className="btn btn-primary">
          <IoMdAdd /> Ajouter Produits
        </NavLink>
      )}
      {/* L'Outlet rendra les composants enfants correspondant à la route actuelle */}
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;

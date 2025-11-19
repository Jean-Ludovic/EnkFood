import React, { useContext } from "react";
import styles from "../../Produits.module.scss";
import ProduitFavorisContext from "../../../../../../contexts/produitFavorisContext";
import { NavLink, useOutletContext } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";

const Produit = ({ data, saved, supprimerUnProduit }) => {
  const user = useOutletContext();
  const { _id, image, name, note } = data;
  const produitFavorisContext = useContext(ProduitFavorisContext);

  const handleClickSaved = (item) => {
    produitFavorisContext.setData(item);
  };

  return (
    <div
      onClick={() => handleClickSaved(data)}
      className={styles.produit}
    >
      {user && (
        <div
          className={styles.delete_edit}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <RiDeleteBin6Line
            onClick={() => supprimerUnProduit && supprimerUnProduit(_id)}
            className={styles.fa_trash}
            size="30px"
          />
          <NavLink to={`/admin/edit/${_id}`}>
            <GrEdit className={styles.fa_pen} size="30px" />
          </NavLink>
        </div>
      )}

      <div className="hover_opacity">
        <div>
          <img src={image} alt={name} />
        </div>
        <div className={styles.description_produit}>
          <h3>{name}</h3>
          <p>{note}</p>
          <MdOutlineFavorite
            className={`fa-xl ${saved ? styles.item_saved : ""}`}
            size="30px"
          />
        </div>
      </div>
    </div>
  );
};

export default Produit;

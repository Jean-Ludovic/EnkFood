import React from "react";
import styles from "../../../../pages/Home/components/Produits/Produits.module.scss";

const ProduitsFavoris = ({ produit }) => {
  const { image, name } = produit;
  return (
    <div
      className={`${styles.produitsFavoris} d-flex flex-row justify-content-center align-items-center`}
    >
      <img className="mr-10" src={image} alt={name} />
      <span className="flex-fill">{name}</span>
    </div>
  );
};

export default ProduitsFavoris;

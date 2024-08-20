import { useContext } from "react";
import styles from "./HeaderMenu.module.scss";
import ProduitFavorisContext from "../../../../contexts/produitFavorisContext";
import ProduitsFavoris from "../ProduitsFavoris/ProduitsFavoris";

function HeaderMenu() {
  const produitsFavorisContext = useContext(ProduitFavorisContext);
  return (
    <ul className={`${styles.menuContainer} border p-20`}>
      {produitsFavorisContext.data.length > 0 ? (
        produitsFavorisContext.data.map((favoris) => (
          <li key={favoris._id}>
            <ProduitsFavoris produit={favoris} />
          </li>
        ))
      ) : (
        <li>Aucun Favoris</li>
      )}
    </ul>
  );
}

export default HeaderMenu;

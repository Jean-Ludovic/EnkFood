import React, { useContext, useEffect, useState } from "react";
import styles from "./App.module.scss";
import ProduitFavorisContext from "./contexts/produitFavorisContext";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./contexts/AuthContext";

const App = () => {
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  const [user, setUser] = useState(null);

  const handleAjusterProduitFavoris = (item) => {
    let result = produitsFavoris.filter((t) => t._id === item._id);
    if (result.length > 0)
      setProduitsFavoris(produitsFavoris.filter((t) => t._id !== item._id));
    else setProduitsFavoris([...produitsFavoris, item]);
  };

  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <ProduitFavorisContext.Provider
        value={{ data: produitsFavoris, setData: handleAjusterProduitFavoris }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <Header setProduitsFavoris={setProduitsFavoris} />
          <Banner />

          <Outlet context={user} />
        </UserContext.Provider>
      </ProduitFavorisContext.Provider>
      <Footer />
    </div>
  );
};

export default App;

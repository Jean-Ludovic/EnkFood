import React, { useContext, useState } from "react";
import logo from "../../assets/images/enkfood.webp";
import styles from "./Header.module.scss";
import { users } from "../../data/data";
import ProduitFavorisContext from "../../contexts/produitFavorisContext";
import Logo from "./components/Logo/Logo";
import User from "./components/User/User";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Connexion from "./components/Connexion/Connexion";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/AuthContext";
import { IoLogOut } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
const Header = ({ setProduitsFavoris }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConnexion, setShowConnexion] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const produitsFavorisContext = useContext(ProduitFavorisContext);
  const { user, setUser } = useContext(UserContext);

  const handleOnChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPasswordInput(e.target.value);
  };
  const handleOnClickConnexion = (e) => {
    e.stopPropagation();
    const userFound = users.filter(
      (user) => user.email.toLowerCase() === emailInput.toLowerCase()
    );
    if (userFound.length > 0 && userFound[0].password === passwordInput) {
      setUser(userFound[0]);
      setEmailInput("");
      setPasswordInput("");
      setShowConnexion(false);
    } else setUser(false);
  };
  const handleOnClickDeconnexion = (e) => {
    e.stopPropagation();
    setUser(null);
    setProduitsFavoris([]);
  };
  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
      <Logo logo={logo} />
      <User user={user} handleDeconnexion={handleOnClickDeconnexion} />
      <ul>
        {user && (
          <li>
             <NavLink
            className="hover_opacity ajouter_produits mr-10"
            to="/admin/add"
          >
            <IoMdAdd className="mr-5" /> Ajouter Produits
          </NavLink>
          </li>
        )}
        <li>
  <span className={styles.produitsFavoris}>
    {produitsFavorisContext.data.length}
  </span>
  <BsCart4
    onClick={() => {
      setShowMenu(true);
      setShowConnexion(false);
    }}
    className="panier hover_opacity fa-xl"
    size="100px"
  />
</li>
<li className="mr-15">
  {user ? (
    <IoLogOut
    onClick={handleOnClickDeconnexion}  // Appel de la fonction lors du clic sur le bouton
    className="deconnexion hover_opacity fa-xl"
    size="100px"
  />
  ) : (
    <CgProfile
      onClick={() => {
        setShowMenu(false);
        setShowConnexion(true);
      }}
      className="connexion hover_opacity fa-xl"
      size="100px"
    />
  )}
</li>

      </ul>

      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
      {showConnexion && (
        <>
          <div onClick={() => setShowConnexion(false)} className="calc"></div>
          <Connexion
            handleEmail={handleOnChangeEmail}
            handlePassword={handleOnChangePassword}
            handleDeconnexion={handleOnClickDeconnexion}
            handleConnexion={handleOnClickConnexion}
            email={emailInput}
            password={passwordInput}
            user={user}
          />
        </>
      )}
    </div>
  );
};

export default Header;

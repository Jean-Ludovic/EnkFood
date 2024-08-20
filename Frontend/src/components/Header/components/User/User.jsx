import React from "react";
import styles from "./User.module.scss";

const User = ({ user, handleDeconnexion }) => {
  return (
    <>
      {user && (
        <div className={styles.user}>
          Bienvenue <span>{user.fullName}</span>,
          <a onClick={handleDeconnexion} href="#">
            Déconnexion
          </a>
        </div>
      )}
    </>
  );
};

export default User;

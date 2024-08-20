import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div
      className={`${styles.footer} d-flex flex-row justify-content-center align-items-center p-20`}
    >
      Copyright © 2024 <span className="ml-10">2h du matin brain</span>
    </div>
  );
};

export default Footer;

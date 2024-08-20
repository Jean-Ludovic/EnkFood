import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const errors = useRouteError();
  console.log(errors);
  return (
    <div
      className={`d-flex flex-column flex-fill align-items-center justify-content-center ${styles.notFound}`}
    >
      <NavLink to="/">
        <div className="d-flex flex-row">
          {errors.status} <span className="px-20"> || </span>
          {errors.statusText}
        </div>
      </NavLink>
    </div>
  );
};

export default NotFound;

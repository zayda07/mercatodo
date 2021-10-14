import React from "react";
import styles from "./Nav.module.css";
import logo from "../../images/logo.png";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.logo}  src={logo} alt="MercaTodo" />
      <p className={styles.merca}>
        Merca<span className={styles.todo}>Todo</span>
      </p>
    </div>
  );
};

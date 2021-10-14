import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../images/logo.png";
import { BiUser } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import * as MercatodoServer from "../MercatodoServer";

export const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      res = await MercatodoServer.listUser();
      const data = await res.json();
      if (data.message === "Sucesss") {
        console.log("Está funcionando")
      } 
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.section}>
        <img src={logo} alt="MercaTodo" />
        <p className={styles.merca}>
          Merca<span className={styles.todo}>Todo</span>
        </p>
        <p className={styles.leyenda}>Bienvenido a su mercado virtual</p>
      </div>
      <div>
        <form className={styles.containerLogin} onSubmit={handleSubmit}>
          <div className={styles.input}>
            <input
              className={styles.inputUser}
              type="text"
              name="username"
              onChange={handleInputChange}
              required
            />
            <label className={styles.labelUser}>
              <BiUser size="20" /> Username
            </label>
          </div>
          <div className={styles.input}>
            <input
              className={styles.inputUser}
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <label className={styles.labelUser}>
              <BiLockAlt size="20" /> Contraseña
            </label>
          </div>

          <button type="submit" className={styles.btnSignIn}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

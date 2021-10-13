import React from "react";
import styles from "./Login.module.css";
import logo from "../../images/logo.png";
import { BiUser } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";

export const Login = () => {
    return (
        <div className={styles.background}>
            <div className={styles.section}>
                <img src={logo} alt="MercaTodo" />
                <p className={styles.merca}>
                    Merca<span className={styles.todo}>Todo</span>
                </p>
                <p className={styles.leyenda}>
                    Bienvenido a su mercado virtual
                </p>
            </div>
            <div>
                <form className={styles.containerLogin}>
                    <div className={styles.input}>
                        <input
                            className={styles.inputUser}
                            type="text"
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
                            required
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

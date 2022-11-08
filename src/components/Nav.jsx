import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import auth from "../auth/firebase";
import styles from "./styles/Nav.module.css";

function Nav() {
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const { user } = authContext;
  return (
    <nav className={styles.nav}>
      <ul className={styles.navListLeft}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === "/" && styles.active
            }`}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/order"
            className={`${styles.navLink} ${
              location.pathname === "/order" && styles.active
            }`}
          >
            Order
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="testauth"
            className={`${styles.navLink} ${
              location.pathname === "/testauth" && styles.active
            }`}
          >
            Test Auth
          </Link>
        </li>
      </ul>
      <ul className={styles.navListRight}>
        {!user && (
          <li className={styles.navItem}>
            <Link
              to="login"
              className={`${styles.navLink} ${
                location.pathname === "/login" && styles.active
              }`}
            >
              Login
            </Link>
          </li>
        )}
        {!user && (
          <li className={styles.navItem}>
            <Link
              to="register"
              className={`${styles.navLink} ${
                location.pathname === "/register" && styles.active
              }`}
            >
              Register
            </Link>
          </li>
        )}

        {user && (
          <li className={styles.navItem}>
            <button className={styles.navLink} onClick={() => signOut(auth)}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;

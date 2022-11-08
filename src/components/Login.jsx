import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import auth from "../auth/firebase";
import styles from "./styles/Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { setUser } = authContext;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCred.user);
  };

  return (
    <div className="page">
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

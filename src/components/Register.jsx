import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../auth/firebase";
import { AuthContext } from "../auth/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { setUser } = authContext;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCred = await createUserWithEmailAndPassword(
      auth,
      username,
      password
    );
    setUser(userCred.user);
  };

  return (
    <div className="page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

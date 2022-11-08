import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useMemo, useState } from "react";
import auth from "./firebase";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

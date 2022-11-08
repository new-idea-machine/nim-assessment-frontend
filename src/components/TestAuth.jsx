import React, { useState } from "react";
import auth from "../auth/firebase";

function TestAuth() {
  const [user, setUser] = useState(null);

  const testAuth = async () => {
    if (auth.currentUser) {
      const token = await auth.currentUser.getIdToken();

      const response = await fetch("/api/menu/test", {
        headers: { authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      return setUser(data);
    }
    return setUser(null);
  };

  return (
    <div className="page">
      <h1>Test Auth</h1>
      <button onClick={testAuth}>Test Auth</button>
      <pre>{user && <p>{JSON.stringify(user, null, 2)}</p>}</pre>
    </div>
  );
}

export default TestAuth;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Order from "./components/Order";
import Register from "./components/Register";
import TestAuth from "./components/TestAuth";

function AppRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="order" element={<Order />} />
        <Route path="testauth" element={<TestAuth />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

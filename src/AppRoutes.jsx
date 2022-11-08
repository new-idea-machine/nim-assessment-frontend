import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Order from "./components/Order";

function AppRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

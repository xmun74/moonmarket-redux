import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./styles.css";
import logoImage from "./assets/logo/blacklogo.png";
import { FaShoppingCart } from 'react-icons/fa';
import ProductDetails from './ProductDetails';
import CartModal from './CartModal';
import LoginPage from './loginPage';
import RegistrationPage from './registrationPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <Router>
      <div>
        <nav className="nav">
          <Link to="/">
            <div className="logo">
              <img src={logoImage} alt="Logo" />
            </div>
          </Link>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="right-nav">
            <div className="cart" onClick={openModal}>
              <FaShoppingCart />
            </div>
            <Link to="/login" className="profile">Profile</Link>
          </div>
        </nav>
        <CartModal isOpen={isOpen} onClose={closeModal} cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

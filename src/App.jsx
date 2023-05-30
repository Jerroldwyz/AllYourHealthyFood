import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./styles.css";
import logoImage from "./assets/logo/blacklogo.png";
import { FaShoppingCart } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="right-nav">
            <div className="cart"><FaShoppingCart /></div>
            <div className="profile">Profile</div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

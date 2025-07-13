import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount }) => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Paradise Nursery
          </Link>

          <nav className="nav">
            {location.pathname === "/" && (
              <Link to="/products" className="nav-link">
                Shop Plants
              </Link>
            )}
            {location.pathname === "/products" && (
              <>
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </>
            )}
            {location.pathname === "/cart" && (
              <>
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/products" className="nav-link">
                  Continue Shopping
                </Link>
              </>
            )}
          </nav>

          <div className="cart-icon">
            <Link to="/cart">
              <div className="cart-container">
                <span className="cart-symbol">🛒</span>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

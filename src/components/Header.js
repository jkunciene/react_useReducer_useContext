import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Cart";

const Header = () => {
  const items = useCart();

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
       
      <nav className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-item" to="/">
          Store
        </Link>
        <Link className="nav-item" to="/cart">
          Cart ({items.length})
        </Link>
      </nav>
     
    </header>
  );
};

export default Header;

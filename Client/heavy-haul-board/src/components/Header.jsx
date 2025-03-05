// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
    return (
        <header className="header">
            <h1>HeavyHaulBoard</h1>
            <button
                className="menu-icon"
                onClick={toggleSidebar}
                aria-label="Abrir menú"
            >
                &#9776;
            </button>
        </header>
    );
};

export default Header;
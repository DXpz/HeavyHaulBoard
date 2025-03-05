import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
        onClose();
    };

    return (
        <>
            {/* Overlay para móviles */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

            <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
                <div className="sidebar-content">
                    <nav className="sidebar-nav">
                        <ul className="sidebar-menu">
                            <li>
                                <Link to="/" className="sidebar-link" onClick={onClose}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="sidebar-link" onClick={onClose}>
                                    Perfil
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" className="sidebar-link" onClick={onClose}>
                                    Configuración
                                </Link>
                            </li>
                            <li>
                                <Link to="/help" className="sidebar-link" onClick={onClose}>
                                    Ayuda
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="logout-container">
                        <button onClick={handleLogout} className="logout-button">
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
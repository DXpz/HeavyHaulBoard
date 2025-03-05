// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup"; // Asegúrate de que Signup exista

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<div>Acerca de Nosotros</div>} />
      <Route path="/profile" element={<div>Perfil</div>} />
      <Route path="/logout" element={<div>Cerrar Sesión</div>} />
    </Routes>
  );
};

export default App;
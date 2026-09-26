import React from "react";
import "../css/header.css";

const Header = ({ nombre }) => {
  return (
    <header className="header">
      <nav className="navegador">
        <a href="#">Inicio</a>
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#footer">Contacto</a>
      </nav>

      <div className="header-nombre">
        <h1>{nombre}</h1>
      </div>
    </header>
  );
};

export default Header;

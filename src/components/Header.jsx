import React from "react";
import "../css/header.css";

const Header = ({ nombre }) => {
  return (
    <header className="header">
      <nav className="navegador">
        <a href="#">Inicio</a>
        <a href="#about">Sobre mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#footer">Contacto</a>
      </nav>

      <div className="header-nombre">
        <h1>{nombre}</h1>
      </div>
    </header>
  );
};

export default Header;

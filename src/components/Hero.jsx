import React from "react";
import "../css/hero.css";
import fotoPerfil from "../assets/img/foto-perfil.jpeg";

const Hero = ({ nombre, rol }) => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-contenido">
        <p className="hero-saludo">Bienvenido a mi portfolio</p>

        <h1>
          Hola, soy <span>{nombre}</span>
        </h1>

        <h2>{rol}</h2>

        <p className="hero-descripcion">
          Soy una persona apasionada por la programación y la tecnología, con
          interés en el desarrollo de soluciones digitales y la creación de
          aplicaciones web. Actualmente me encuentro ampliando mis conocimientos
          y habilidades en el área del desarrollo de software, con el objetivo
          de crecer profesionalmente y participar en proyectos tecnológicos que
          aporten valor e innovación.
        </p>

        <a href="#proyectos" className="hero-boton">
          Ver mis proyectos
        </a>
      </div>

      <div className="hero-imagen">
        <img src={fotoPerfil} alt={`Foto de perfil de ${nombre}`} />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "../css/about.css";

const About = ({ descripcion, objetivo }) => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-contenido">
        <h2>
          Sobre <span>mí</span>
        </h2>

        <p className="about-descripcion">{descripcion}</p>

        <div className="about-objetivo">
          <h3>Mi objetivo profesional</h3>

          <p>{objetivo}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

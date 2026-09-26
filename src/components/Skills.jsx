import React from "react";
import "../css/skills.css";

const Skills = ({ habilidades }) => {
  return (
    <section className="skills" id="habilidades">
      <h2>Mis habilidades</h2>

      <p>
        Estas son algunas de las tecnologías que conozco y con las que estoy
        aprendiendo a desarrollar aplicaciones.
      </p>

      <div className="skills-lista">
        {habilidades.map((habilidad) => (
          <div className="skill-item" key={habilidad.id}>
            {habilidad.nombre}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

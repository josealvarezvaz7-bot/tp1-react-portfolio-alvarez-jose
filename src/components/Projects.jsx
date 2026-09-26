import React, { useState } from "react";
import "../css/projects.css";

const Projects = ({ proyectos }) => {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const proyectosVisibles = mostrarTodos ? proyectos : proyectos.slice(0, 2);

  return (
    <section className="projects" id="proyectos">
      <h2>Mis proyectos</h2>

      <p>
        Algunos de los proyectos en los que trabajé y puse en práctica mis
        conocimientos.
      </p>

      <div className="projects-lista">
        {proyectosVisibles.map((proyecto) => (
          <article className="project-card" key={proyecto.id}>
            <h3>{proyecto.nombre}</h3>

            <p>{proyecto.resumen}</p>

            <div className="project-tecnologias">
              {proyecto.stack.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {proyectos.length > 2 && (
        <button
          className="projects-boton"
          onClick={() => setMostrarTodos(!mostrarTodos)}
        >
          {mostrarTodos ? "Ver menos" : "Ver más"}
        </button>
      )}
    </section>
  );
};

export default Projects;

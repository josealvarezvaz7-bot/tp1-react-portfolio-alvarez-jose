const perfil = {
  nombre: "José Alvarez",
  rol: "Desarrollador full stack",
  email: "josealvarezvaz7@gmail.com",
  github: "https://github.com/josealvarezvaz7-bot",
};

const habilidades = [
  { id: 1, nombre: "JavaScript" },
  { id: 2, nombre: "React" },
  { id: 3, nombre: "Git" },
  { id: 4, nombre: "HTML" },
  { id: 5, nombre: "CSS" },
];

const proyectos = [
  {
    id: "p1",
    nombre: "ClimaHoy",
    resumen:
      "Consulta el clima actual de cualquier ciudad con una interfaz simple.",
    detalle:
      "Proyecto de práctica para consumir una API pública y mostrar los datos en pantalla. Fue mi primer acercamiento serio a fetch, al manejo de estados de carga y a mostrar errores cuando la ciudad no existe.",
    stack: ["React", "CSS", "API pública"],
    link: "#",
  },
  {
    id: "p2",
    nombre: "ListaTareas",
    resumen:
      "Gestor de tareas simple para organizar el estudio semana a semana.",
    detalle:
      "Permite agregar, marcar como completadas y eliminar tareas. Lo hice para entender bien el manejo de arrays en el estado y cómo actualizar una lista sin mutar el array original.",
    stack: ["React", "useState", "CSS"],
    link: "#",
  },
];

export { perfil, habilidades, proyectos };

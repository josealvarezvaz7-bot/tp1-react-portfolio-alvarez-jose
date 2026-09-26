const perfil = {
  nombre: "José Alvarez",
  rol: "Desarrollador full stack",
  email: "josealvarezvaz7@gmail.com",
  github: "https://github.com/josealvarezvaz7-bot",
  objetivo:
    "Continuar creciendo como desarrollador, fortalecer mis conocimientos en tecnologías web y adquirir experiencia en el desarrollo de software.",
  descripcion:
    "Soy una persona interesada en la programación y la tecnología, con motivación por aprender y desarrollar nuevas habilidades en el área del desarrollo de software. Me interesa la creación de aplicaciones web, la resolución de problemas y el uso de herramientas tecnológicas para desarrollar soluciones digitales.",
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
  {
    id: "p3",
    nombre: "ControlStock",
    resumen:
      "Aplicación para registrar productos y controlar el stock disponible.",
    detalle:
      "Proyecto pensado para practicar altas, bajas y modificaciones de productos. Permite registrar artículos, actualizar cantidades y consultar el stock disponible.",
    stack: ["React", "JavaScript", "CSS"],
    link: "#",
  },
  {
    id: "p4",
    nombre: "BuscadorPeliculas",
    resumen:
      "Buscador de películas que muestra información obtenida desde una API.",
    detalle:
      "Permite buscar películas por nombre y visualizar datos como título, año y descripción. Lo desarrollé para practicar peticiones a APIs y renderizado condicional.",
    stack: ["React", "Fetch", "API pública"],
    link: "#",
  },
  {
    id: "p5",
    nombre: "AgendaContactos",
    resumen: "Agenda simple para agregar, visualizar y eliminar contactos.",
    detalle:
      "Aplicación creada para practicar formularios controlados, manejo de estado y renderizado de listas dinámicas en React.",
    stack: ["React", "useState", "CSS"],
    link: "#",
  },
];

export { perfil, habilidades, proyectos };

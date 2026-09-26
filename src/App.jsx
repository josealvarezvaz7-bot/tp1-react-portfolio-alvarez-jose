import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { perfil, habilidades, proyectos } from "./data/portfolioData";
import "../src/css/app.css";

const App = () => {
  return (
    <div>
      <Header nombre={perfil.nombre} rol={perfil.rol} />
      <Hero nombre={perfil.nombre} rol={perfil.rol} />
      <About objetivo={perfil.objetivo} descripcion={perfil.descripcion} />
      <Skills habilidades={habilidades} />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

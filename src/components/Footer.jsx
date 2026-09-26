import React from "react";
import "../css/footer.css";

const Footer = ({ nombre, email, github }) => {
  return (
    <footer className="footer" id="contacto">
      <h3>{nombre}</h3>

      <p>
        Desarrollador Web en formación, apasionado por la programación y la
        tecnología.
      </p>

      <div className="footer-enlaces">
        <a href={`mailto:${email}`}>Enviame un correo</a>

        <a href={github} target="_blank" rel="noopener noreferrer">
          Mi GitHub
        </a>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} {nombre}. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

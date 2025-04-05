import React from 'react';
import '../App.css'; // Asegúrate de importar los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Contenedor del logo */}
      <div className="logo">
        <img src="/img/logo.jpg" alt="Logo" />
      </div>

      {/* Enlaces de navegación */}
      <ul className="nav-links">
      <li><a href="#" onClick={() => window.location.href = '/'}>Inicio</a></li>
        <li className="menu-dropdown">
          <a href="#">Menú</a>
          <ul className="dropdown">
            <li><a href="#sabores-naturales">Sabores Naturales</a></li>
            <li><a href="#sabores-típicos">Sabores Típicos de Chiapas</a></li>
            <li><a href="#helados-sorpresa">Helados Sorpresa</a></li>
          </ul>
        </li>
        <li><a href="#mision-vision">Misión y Visión</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

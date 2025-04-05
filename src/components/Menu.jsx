import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="menu-container">
        <h2 className="menu-title">Nuestro Menú</h2>
        <div className="menu-grid">
          {/* Sabores Naturales */}
          <motion.div
            className="menu-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="menu-item-title">Sabores Naturales</h3>
            <p className="menu-item-description">Elaborados de manera artesanal con frutas frescas y sin conservadores.</p>
            <div className="menu-item-images" id="sabores-naturales">
              <img src="/img/Naturales.png" alt="Sabores Naturales 1" className="menu-img" />
              <img src="/img/Naturales_2.png" alt="Sabores Naturales 2" className="menu-img" />
              <img src="/img/Naturales_3.png" alt="Sabores Naturales 3" className="menu-img" />
              <img src="/img/Naturales_4.png" alt="Sabores Naturales 4" className="menu-img" />
            </div>
          </motion.div>

          {/* Sabores Típicos de Chiapas */}
          <motion.div
            className="menu-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="menu-item-title">Sabores Típicos de Chiapas</h3>
            <p className="menu-item-description">Prueba nuestros helados de tamarindo, cacahuate garapiñado, de chimbo y dulce de panela.</p>
            <div className="menu-item-images" id="sabores-típicos">
              <img src="/img/Tipicos_1.jpg" alt="Sabores Típicos 1" className="menu-img" />
              <img src="/img/Tipicos_2.jpg" alt="Sabores Típicos 2" className="menu-img" />
              <img src="/img/Tipicos_3.jpg" alt="Sabores Típicos 3" className="menu-img" />
              <img src="/img/Tipicos_4.jpg" alt="Sabores Típicos 4" className="menu-img" />
            </div>
          </motion.div>

          {/* Helados Sorpresa */}
          <motion.div
            className="menu-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="menu-item-title">Helados Sorpresa</h3>
            <p className="menu-item-description">Sabores únicos y combinaciones inesperadas.</p>
            <div className="menu-item-images" id="helados-sorpresa">
              <img src="/img/Sorpresa_1.jpg" alt="Helados Sorpresa 1" className="menu-img" />
              <img src="/img/Sorpresa_2.jpg" alt="Helados Sorpresa 2" className="menu-img" />
              <img src="/img/Sorpresa_3.jpg" alt="Helados Sorpresa 3" className="menu-img" />
              <img src="/img/Sorpresa_4.jpg" alt="Helados Sorpresa 4" className="menu-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
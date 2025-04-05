import React from 'react';
import { motion } from "framer-motion";
import '../App.css';


const MisionVision = () => {
  return (
    <section id="mision-vision" className="mision-vision">
      <div className="mision-container">
        <motion.div
          className="mision"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Nuestra Misión</h3>
          <p>Brindar helados artesanales de la más alta calidad, utilizando ingredientes naturales y preservando las tradiciones chiapanecas.</p>
        </motion.div>
        <img src="/img/Mision_vision1.jpg" alt="Misión" className="mision-img" />
      </div>
      <div className="vision-container">
        <img src="/img/Mision_vision2.jpg" alt="Visión" className="vision-img" />
        <motion.div
          className="vision"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Nuestra Visión</h3>
          <p>Ser la heladería más reconocida en Chiapas por su autenticidad, calidad y compromiso con el medio ambiente.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MisionVision;
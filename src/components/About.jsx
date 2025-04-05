import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestra Historia
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        En Helados Chiapas llevamos más de 20 años creando los sabores más auténticos. Inspirados en las recetas tradicionales y los ingredientes más frescos, te ofrecemos helados que cuentan historias.
      </motion.p>
    </section>
  );
};

export default About;

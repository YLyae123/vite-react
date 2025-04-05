import React, { useState, useEffect } from 'react';
import '../App.css'; // Asegúrate de importar los estilos

const images = [
  "/img/banner1.jpg",
  "/img/banner2.jpg",
  "/img/banner3.jpg"
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="banner-container">
      <div className="banner">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : "hidden"}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import "../App.css";

const PreguntasFrecuentes = () => {
  return (
    <section id="faq" className="faq">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Qué es un helado artesanal?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="faq-answer">
            <p>Un helado artesanal es un helado hecho a mano con ingredientes naturales y sin conservadores.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Qué tipos de helados ofrecen?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="faq-answer">
            <p>Ofrecemos una variedad de helados artesanales, incluyendo sabores naturales, típicos de Chiapas y sorpresas.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Puedo hacer pedidos a domicilio?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="faq-answer">
            <p>Sí, ofrecemos servicio de entrega dentro de la ciudad.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Qué horarios tienen?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="faq-answer">
            <p>Nuestros horarios son de lunes a domingo de 10am a 10pm.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
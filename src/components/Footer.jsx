import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        
        {/* Sección de Información de Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p><strong>Dirección:</strong> <a href="https://www.google.com/maps/place/Calle+Central+%23123,+Tuxtla+Gutiérrez,+Chiapas" target="_blank" rel="noopener noreferrer">Calle Central #123, Tuxtla Gutiérrez, Chiapas</a></p>
          <p><strong>Horario:</strong> Lunes a Domingo, 10:00 AM - 10:00 PM</p>
          <p><strong>Teléfono:</strong> +52 961 123 4567</p>
          <p><strong>Correo:</strong> <a href="mailto:contacto@heladoschiapas.com">contacto@heladoschiapas.com</a></p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <div className="social-item">
              <img src="/img/facebook.jpg" alt="Facebook" className="social-logo" />
              <p><strong>Facebook:</strong> <a href="https://facebook.com/HeladosChiapas" target="_blank" rel="noopener noreferrer">@HeladosChiapas</a></p>
            </div>

            <div className="social-item">
              <img src="/img/instagram.jpg" alt="Instagram" className="social-logo" />
              <p><strong>Instagram:</strong> <a href="https://instagram.com/HeladosChiapas" target="_blank" rel="noopener noreferrer">@HeladosChiapas</a></p>
            </div>

            <div className="social-item">
              <img src="/img/x.jpg" alt="Twitter" className="social-logo" />
              <p><strong>X:</strong> <a href="https://twitter.com/HeladosChiapas" target="_blank" rel="noopener noreferrer">@HeladosChiapas</a></p>
            </div>

            <div className="social-item">
              <img src="/img/tik_tok.jpg" alt="TikTok" className="social-logo" />
              <p><strong>TikTok:</strong> <a href="https://tiktok.com/@HeladosChiapas" target="_blank" rel="noopener noreferrer">@HeladosChiapas</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos de Autor */}
      <p className="copyright">© 2025 Helados Altos de Chiapas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

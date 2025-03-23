import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';

const Main = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <div className="logo">CAFECOLET</div>
          <nav className="nav">
            <ul>
              <li><a href="#empezar">Empezar</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </nav>
          <button className="login-btn">Log in</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">
              "Conectamos a compradores y comerciantes de café para crear oportunidades mutuas"
            </h1>
            <p className="hero-subtitle">
              Únete a la comunidad diseñada para potenciar tu negocio en la industria del café
            </p>
            <div className="cta-container">
              <div className="email-input-container">
                <input 
                  type="email" 
                  placeholder="Introduce tu dirección email" 
                  className="email-input"
                />
              </div>
              <button className="cta-button">Empezar</button>
            </div>
          </div>
          <div className="hero-overlay"></div>
        </section>

        <section className="features" id="beneficios">
          <div className="container">
            <h2 className="section-title">Beneficios de unirse a CafeColet</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🌱</div>
                <h3>Conexión Directa</h3>
                <p>Conectamos productores directamente con compradores eliminando intermediarios</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Mejores Precios</h3>
                <p>Los productores reciben precios justos y los compradores obtienen mejor valor</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Transparencia</h3>
                <p>Historial completo de transacciones y origen del café verificable</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌎</div>
                <h3>Comunidad Global</h3>
                <p>Accede a una red internacional de profesionales del café</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="como-funciona">
          <div className="container">
            <h2 className="section-title">Cómo Funciona</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Regístrate</h3>
                <p>Crea tu perfil como productor o comprador de café</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Conecta</h3>
                <p>Encuentra socios comerciales que se alineen con tus necesidades</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Negocia</h3>
                <p>Establece términos y precios directamente en la plataforma</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Crece</h3>
                <p>Expande tu negocio con relaciones comerciales sostenibles</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
            <div className="testimonials-slider">
              <div className="testimonial">
                <p>"Gracias a CafeColet, hemos podido conectar con compradores internacionales y aumentar nuestras ventas en un 40%."</p>
                <div className="testimonial-author">
                  <strong>Carlos Mendez</strong> - Productor de café en Colombia
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="support">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">CAFECOLET</div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Empresa</h4>
                <ul>
                  <li><a href="#about">Sobre nosotros</a></li>
                  <li><a href="#team">Equipo</a></li>
                  <li><a href="#careers">Carreras</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Recursos</h4>
                <ul>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#guides">Guías</a></li>
                  <li><a href="#webinars">Webinars</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Soporte</h4>
                <ul>
                  <li><a href="#contact">Contacto</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#help">Centro de ayuda</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CafeColet. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
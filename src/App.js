import React from 'react';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="logo">GB Development</h1>
        <nav className="navbar">
            <li><a href="#nosotros">Quienes somos ?</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </nav>
      </header>

      <main className="main-content">
        <div className="container">
          <section id="nosotros" className="section">
            <h2>Quienes somos?</h2>
            <p>En <strong>GB Development</strong>, somos una empresa apasionada por la tecnología y la innovación, especializada en ofrecer soluciones digitales personalizadas. Nos dedicamos al desarrollo web y la creación de plataformas digitales que permiten a nuestros clientes destacar en el mundo digital. <br /><br />
        Nuestra misión es transformar ideas en soluciones tangibles, utilizando las últimas herramientas y tecnologías del mercado. Con más de <strong>5 años de experiencia</strong> en el sector, hemos trabajado con empresas de diferentes tamaños, ayudándoles a construir sitios web atractivos, funcionales y con un enfoque en la experiencia del usuario. <br /><br />
        En <strong>GB Development</strong>, no solo desarrollamos tecnología, sino que nos convertimos en socios estratégicos de nuestros clientes, brindando apoyo en cada etapa del proceso: desde la concepción de la idea hasta el lanzamiento y mantenimiento continuo de las plataformas. Nuestra filosofía de trabajo se basa en la transparencia, la calidad y la agilidad, asegurando que cada proyecto se entregue a tiempo y cumpla con los estándares más altos.</p>
          </section>

          <section id="servicios" className="section">
            <h2>Servicios</h2>
            <p>
    En <strong>GB Development</strong>, nos especializamos en ofrecer soluciones digitales integrales. Brindamos servicios de <strong>Diseño Web</strong> y <strong>Desarrollo Web</strong>, creando sitios personalizados y completamente funcionales. Desde la planificación y el diseño hasta la implementación, aseguramos que cada página web sea <strong>responsiva</strong>, <strong>rápida</strong> y optimizada para los motores de búsqueda.
  </p>
    <p>
    Ofrecemos:
    <ul>
      <li><strong>Diseño Web Personalizado:</strong> Creamos diseños únicos y modernos, enfocados en la experiencia del usuario.</li>
      <li><strong>Desarrollo de Aplicaciones Web:</strong> Desarrollamos aplicaciones interactivas y funcionales para empresas de todos los tamaños.</li>
      <li><strong>Optimización SEO:</strong> Implementamos las mejores prácticas para mejorar la visibilidad de tu sitio web en los motores de búsqueda.</li>
      <li><strong>Desarrollo de E-commerce:</strong> Soluciones completas para tiendas en línea, incluyendo integración de pasarelas de pago y gestión de inventario.</li>
    </ul>
  </p>
  <p>
    Cada proyecto que realizamos está centrado en las necesidades específicas de nuestros clientes, buscando siempre maximizar su éxito online. ¡Estamos aquí para ayudarte a llevar tu presencia digital al siguiente nivel!
  </p>
          </section>

          <section id="contacto" className="section">
  <h2>Contacto</h2>
  <p>
    Estamos disponibles para responder a todas tus preguntas y ofrecerte las mejores soluciones digitales. Si tienes alguna consulta o deseas empezar tu próximo proyecto con nosotros, no dudes en ponerte en contacto:
  </p>
  <p><strong>Teléfono:</strong> +34 610 300 328</p>
  <p><strong>Correo Electrónico:</strong> <a href="mailto:gbdevelopment@gmail.com">gbdevelopment@gmail.com</a></p>
  <p>
    También puedes seguirnos en nuestras redes sociales para conocer más sobre nuestros servicios y proyectos recientes. ¡Esperamos saber de ti pronto!
  </p>
</section>

<section className="section testimonials">
  <h2>Testimonios</h2>
  <p>Lo que dicen nuestros clientes sobre nuestro trabajo:</p>
  <blockquote>
    "Gracias a GB Development mi página web es completamente funcional y responsive. ¡Ahora puedo llegar a más clientes con una experiencia de usuario perfecta en cualquier dispositivo! ¡Totalmente recomendados!"
    <footer>- Juan Pérez, Emprendedor Digital</footer>
  </blockquote>
  <blockquote>
    "100% recomendables. Fueron rápidos, eficaces y crearon la tienda virtual que necesitaba, adaptada a todas mis necesidades. Ahora puedo gestionar mi negocio online de manera mucho más eficiente. ¡Gracias por todo!"
    <footer>- Ana Gómez, Propietaria de Tienda Online</footer>
  </blockquote>
</section>


<section className="section portfolio">
  <h2>Proyectos Recientes</h2>
  <p>A continuación, te mostramos algunos de nuestros proyectos más recientes, que reflejan nuestro compromiso con la innovación y el diseño funcional:</p>
  <ul>
    <li>
      <strong>Landing Page para Tienda Online</strong>  
      - Creación de una landing page optimizada para la conversión de usuarios en clientes, con diseño atractivo y funciones de e-commerce integradas.
    </li>
    <li>
      <strong>Dashboard Personalizado</strong>  
      - Desarrollo de un panel de administración a medida, con funcionalidades específicas para mejorar la gestión y visualización de datos en tiempo real.
    </li>
    <li>
      <strong>Sitio Institucional</strong>  
      - Diseño y desarrollo de un sitio web institucional que transmite la identidad de la marca y ofrece una experiencia de usuario fluida y profesional.
    </li>
  </ul>
</section>


<section className="section process">
  <h2>¿Cómo trabajamos?</h2>
  <p>En GB Development, nuestro proceso está diseñado para ofrecerte soluciones digitales personalizadas, desde la consulta inicial hasta la entrega final. Cada paso está orientado a asegurar que tu proyecto se realice de manera eficiente y con los más altos estándares de calidad.</p>
  <ol>
    <li>
      <strong>Consulta Inicial</strong>  
      - Comenzamos con una reunión para comprender tus necesidades, objetivos y visión. Es el primer paso para construir una relación sólida y asegurarnos de que estamos alineados con tus expectativas.
    </li>
    <li>
      <strong>Diseño y Prototipado</strong>  
      - En esta fase, creamos un diseño visual atractivo y funcional. Te mostramos prototipos interactivos para que puedas ver cómo se verá y funcionará tu proyecto antes de entrar en la fase de desarrollo.
    </li>
    <li>
      <strong>Desarrollo y Entrega del Trabajo</strong>  
      - Finalmente, desarrollamos el proyecto con la mejor tecnología disponible y lo entregamos funcionando perfectamente en todos los dispositivos. Nos aseguramos de que el producto final cumpla con todas tus expectativas y esté listo para ser lanzado.
    </li>
  </ol>
</section>

      <section className='section cta'>
        <h2>Listo para arrancar ?</h2>
        <button>Contactanos</button>
      </section>
        </div>
      </main>
      <div className="extra-section">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <p>Ofrecemos un enfoque único para resolver tus problemas digitales. Nos apasiona la tecnología y la innovación.</p>
          <button>Ver Más</button>
        </div>
      </div>
      
      <div className="tech-logos">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
</div>

      


      <footer className="main-footer">
        <p>&copy; 2025 GB Development. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Estudio Notarial Viviana Escribano & Asociados</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" sizes="32x32" href="img/contrato.png" />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
    }
.hero {
  position: relative;
  background: url('img/baner.png') center center / cover no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero .overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Oscurece el fondo */
  z-index: 1;
}

.hero .container {
  position: relative;
  z-index: 2; /* Asegura que el texto quede arriba de la capa oscura */
}

    .footer {
      background-color: #1a1a1a;
      color: #ccc;
      padding: 30px 0;
    }
    .whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
    }
    .servicios{
      padding-top: 100px;
      padding-bottom: 50px;
      margin: 20px 10px;
    }
    @media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  .hero p {
    font-size: 1rem;
  }
}

  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">Viviana Escribano & Asociados</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
          <li class="nav-item"><a class="nav-link" href="#equipo">Equipo</a></li>
          <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero -->
<header class="hero text-center">
  <div class="overlay"></div> <!-- Nueva capa -->
  <div class="container position-relative">
    <h1 class="display-4 fw-bold">Confianza y legalidad en cada escritura</h1>
    <p class="lead">Especialistas en actos notariales, sucesiones, contratos y más</p>
    <a href="#contacto" class="btn btn-primary btn-lg mt-3">Solicitar consulta</a>
  </div>
</header>


  <!-- Botón flotante de WhatsApp -->
  <a href="https://wa.me/59894344676?text=Hola%2C%20quisiera%20realizar%20una%20consulta%20notarial" class="whatsapp-float" target="_blank" title="Chatear por WhatsApp">
    <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt="WhatsApp" width="60" height="60">
  </a>

  <!-- Servicios -->
  <section class="servicios" class="py-5" >
    <div class="container">
      <h2 class="text-center mb-4">Nuestros Servicios Notariales</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Escrituras Públicas</h5>
              <p class="card-text">Compra-venta de inmuebles, donaciones, poderes notariales.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Sucesiones y Testamentos</h5>
              <p class="card-text">Asesoría y redacción de testamentos, trámites sucesorios.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Contratos y Certificaciones</h5>
              <p class="card-text">Contratos privados, certificación de firmas y documentos legales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Equipo -->
  <section id="equipo" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Nuestro Equipo</h2>
      <div class="row text-center g-4">
        <div class="col-md-4">
          <img src="img/12.jpg" class="rounded-circle mb-2" alt="Escribana 1" width="150PX">
          <h5>Esc. Viviana Escribano</h5>
          <p>Especialista en Derecho Notarial y Registral</p>
        </div>
        <div class="col-md-4">
          <img src="img/12.jpg" class="rounded-circle mb-2" alt="Escribano 2"width="150PX">
          <h5>Dr. Álvaro Sánchez</h5>
          <p>Derecho Civil y Contratos</p>
        </div>
        <div class="col-md-4">
          <img src="img/12.jpg" class="rounded-circle mb-2" alt="Escribana 3"width="150PX">
          <h5>Esc. María López</h5>
          <p>Asesoría Notarial Integral</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contacto -->
  <section id="contacto" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Solicitá tu consulta notarial</h2>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" required>
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="col-12">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea class="form-control" id="mensaje" rows="4" required></textarea>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-dark">Enviar mensaje</button>
        </div>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer text-center">
    <div class="container">
      <p>&copy; 2025 Viviana Escribano & Asociados. Todos los derechos reservados.</p>
      <p>Montevideo, Uruguay | Tel: (598) 94 344 676 | Email: viviesc@hotmail.com</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

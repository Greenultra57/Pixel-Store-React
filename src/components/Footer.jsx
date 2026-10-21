export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-icon">
              <i className="fa-solid fa-gamepad"></i>
            </span>
            <span>PIXEL STORE</span>
          </div>
          <p>Tu espacio para descubrir, comprar y disfrutar videojuegos.</p>
        </div>

        {/* Explorar column */}
        <div className="footer-column">
          <h4>Explorar</h4>
          <a href="/">Inicio</a>
          <a href="#explorar">Explorar</a>
          <a href="#ofertas">Ofertas</a>
        </div>

        {/* Plataformas column */}
        <div className="footer-column">
          <h4>Plataformas</h4>
          <a href="#playstation">PlayStation</a>
          <a href="#xbox">Xbox</a>
          <a href="#nintendo">Nintendo</a>
        </div>

        {/* Cuenta column */}
        <div className="footer-column">
          <h4>Cuenta</h4>
          <a href="#perfil">Mi perfil</a>
          <a href="#carrito">Carrito</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Pixel Store</span>
        <span>Hecho para nuestro proyecto escolar</span>
      </div>
    </footer>
  );
}

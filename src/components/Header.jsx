import { useState, useEffect, useRef } from 'react';

export default function Header({ cartCount = 0 }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo / Brand */}
        <a className="brand" href="/">
          <span className="brand-icon">
            <i className="fa-solid fa-gamepad"></i>
          </span>
          <span>PIXEL STORE</span>
        </a>

        {/* Navegación principal */}
        <nav className="main-nav">
          <a href="/" className="active">
            Inicio
          </a>
          <a href="#explorar">Explorar</a>
          <a href="#ofertas">Ofertas</a>

          {/* Dropdown de categorías */}
          <div
            className={`category-dropdown ${isCategoryOpen ? 'open' : ''}`}
            ref={dropdownRef}
          >
            <button
              className="category-trigger"
              type="button"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              Categorías <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="category-menu">
              <a href="#playstation">
                <i className="fa-brands fa-playstation"></i>
                <span>PlayStation</span>
              </a>
              <a href="#xbox">
                <i className="fa-brands fa-xbox"></i>
                <span>Xbox</span>
              </a>
              <a href="#nintendo">
                <i className="fa-solid fa-gamepad"></i>
                <span>Nintendo</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Acciones del Header */}
        <div className="header-actions">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              data-search
              type="search"
              placeholder="Buscar juegos..."
              autoComplete="off"
            />
          </div>
          <a className="header-icon cart-link" href="#carrito" title="Carrito">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count" data-cart-count>
              {cartCount}
            </span>
          </a>
          <a className="login-btn" href="#iniciar">
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
  );
}

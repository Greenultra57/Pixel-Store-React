const POPULAR_GAMES = [
  {
    id: 'mario-kart-8',
    title: 'Mario Kart 8 Deluxe',
    platform: 'Nintendo Switch',
    genre: 'Carreras',
    price: '$289.900',
    discount: '-30%',
    image: '/mariokart.jpg',
    dataGame: 'mario kart 8 deluxe',
    dataPlatform: 'nintendo switch',
  },
  {
    id: 'mk1',
    title: 'Mortal Kombat 1',
    platform: 'PS5',
    genre: 'Lucha y acción',
    price: '$259.900',
    discount: '-15%',
    image: '/mk1.jpg',
    dataGame: 'mortal kombat 1',
    dataPlatform: 'ps5',
  },
  {
    id: 'resident-evil-4',
    title: 'Resident Evil 4',
    platform: 'PS5',
    genre: 'Terror y acción',
    price: '$239.900',
    discount: null,
    image: '/resident4.jpg',
    dataGame: 'resident evil 4',
    dataPlatform: 'ps5',
  },
  {
    id: 'spiderman-2',
    title: "Marvel's Spider-Man 2",
    platform: 'PS5',
    genre: 'Acción y aventura',
    price: '$279.900',
    discount: '-20%',
    image: '/spiderman2.jpg',
    dataGame: "marvel's spider-man 2",
    dataPlatform: 'ps5',
  },
  {
    id: 'halo-infinite',
    title: 'Halo Infinite',
    platform: 'Xbox Series X|S',
    genre: 'Acción y shooter',
    price: '$199.900',
    discount: '-45%',
    image: '/halo.jpg',
    dataGame: 'halo infinite',
    dataPlatform: 'xbox series x|s',
  },
  {
    id: 'fc-25',
    title: 'EA Sports FC 25',
    platform: 'PS5',
    genre: 'Deportes',
    price: '$249.900',
    discount: null,
    image: '/fc25.jpg',
    dataGame: 'ea sports fc 25',
    dataPlatform: 'ps5',
  },
];

const PLATFORMS = [
  {
    id: 'playstation',
    name: 'PlayStation',
    description: 'Descubre aventuras para PS4 y PS5.',
    icon: 'fa-brands fa-playstation',
    link: '#play',
  },
  {
    id: 'xbox',
    name: 'Xbox',
    description: 'Acción, carreras y grandes historias.',
    icon: 'fa-brands fa-xbox',
    link: '#xbox',
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    description: 'La magia de Nintendo en un solo lugar.',
    icon: 'fa-solid fa-gamepad',
    link: '#nintendo',
  },
];

export function HeroBanner() {
  return (
    <section className="hero home-hero">
      <div className="hero-copy">
        <span className="eyebrow">★ NUEVO LANZAMIENTO</span>
        <h1>
          Descubre una nueva forma de <span>jugar.</span>
        </h1>
        <p>
          Compra y descubre videojuegos para PlayStation, Xbox y Nintendo desde
          una sola plataforma.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#explorar">
            Explorar catálogo
          </a>
          <a className="btn btn-secondary" href="#ofertas">
            Ver ofertas
          </a>
        </div>
      </div>
      <div className="hero-art">
        <img src="/banner.jpg" alt="Videojuegos" />
      </div>
    </section>
  );
}

export function PopularGames({ games = POPULAR_GAMES }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CATÁLOGO</span>
          <h2>Juegos populares</h2>
        </div>
        <a className="text-link" href="#explorar">
          Ver todo <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <article
            key={game.id}
            className="game-card"
            data-game={game.dataGame}
            data-platform={game.dataPlatform}
          >
            <a className="game-image" href={`#${game.id}`}>
              <img src={game.image} alt={game.title} />
              {game.discount && (
                <span className="discount-badge">{game.discount}</span>
              )}
            </a>
            <div className="game-info">
              <span className="game-platform">{game.platform}</span>
              <h3>{game.title}</h3>
              <p>{game.genre}</p>
              <div className="game-bottom">
                <strong>{game.price}</strong>
                <a className="small-link" href={`#${game.id}`}>
                  Ver juego
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PlatformsSection({ platforms = PLATFORMS }) {
  return (
    <section className="section platforms-section">
      <div className="section-heading centered">
        <div>
          <span className="eyebrow">ELIGE TU PLATAFORMA</span>
          <h2>Juega como quieras</h2>
        </div>
      </div>
      <div className="platform-grid">
        {platforms.map((platform) => (
          <a
            key={platform.id}
            className="platform-tile"
            href={platform.link}
          >
            <span>
              <i className={platform.icon}></i>
            </span>
            <h3>{platform.name}</h3>
            <p>{platform.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function PromoSection() {
  return (
    <section className="promo">
      <div>
        <span className="eyebrow">OFERTA ESPECIAL</span>
        <h2>Hasta 70% de descuento</h2>
        <p>
          Encuentra grandes juegos a precios especiales por tiempo limitado.
        </p>
        <a className="btn btn-primary" href="#ofertas">
          Ver ofertas
        </a>
      </div>
      <img src="/controller.jpg" alt="Control de videojuegos" />
    </section>
  );
}

export default function HeroSection() {
  return (
    <main>
      <HeroBanner />
      <PopularGames />
      <PlatformsSection />
      <PromoSection />
    </main>
  );
}

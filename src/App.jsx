import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Efectos de fondo ambiental */}
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      {/* Componentes principales divididos de index.html */}
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;

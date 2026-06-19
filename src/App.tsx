import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import FlavorShowcase from './components/FlavorShowcase';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FunFacts from './components/FunFacts';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <FlavorShowcase />
        <About />
        <WhyChoose />
        <Gallery />
        <Reviews />
        <FunFacts />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

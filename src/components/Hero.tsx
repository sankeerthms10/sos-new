import { motion } from 'framer-motion';
import { ChevronDown, Flame, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingChip {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  delay: number;
  color: string;
}

const chipColors = ['#E53935', '#FF6D00', '#FFD600', '#D32F2F', '#FF5722'];

export default function Hero() {
  const [floatingChips, setFloatingChips] = useState<FloatingChip[]>([]);
  const [spiceParticles, setSpiceParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const chips: FloatingChip[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      delay: i * 0.3,
      color: chipColors[Math.floor(Math.random() * chipColors.length)],
    }));
    setFloatingChips(chips);

    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSpiceParticles(particles);
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-spicy-red via-spicy-orange to-spicy-yellow">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)`
        }} />
      </div>

      {/* Floating Chips */}
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.id}
          initial={{
            x: `${chip.x}vw`,
            y: `${chip.y}vh`,
            rotate: chip.rotation,
            scale: chip.scale,
            opacity: 0
          }}
          animate={{
            y: [`${chip.y}vh`, `${chip.y - 10}vh`, `${chip.y}vh`],
            rotate: [chip.rotation, chip.rotation + 20, chip.rotation],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 4 + chip.delay,
            repeat: Infinity,
            delay: chip.delay,
            ease: 'easeInOut'
          }}
          className="absolute z-10 pointer-events-none"
        >
          <svg viewBox="0 0 100 80" className="w-16 h-12 sm:w-24 sm:h-16 drop-shadow-lg">
            <defs>
              <linearGradient id={`chip-${chip.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={chip.color} />
                <stop offset="100%" stopColor="#FFD600" />
              </linearGradient>
            </defs>
            <ellipse cx="50" cy="40" rx="48" ry="38" fill={`url(#chip-${chip.id})`} />
            <ellipse cx="50" cy="40" rx="42" ry="32" fill={chip.color} fillOpacity="0.7" />
            <ellipse cx="35" cy="25" rx="8" ry="5" fill="white" fillOpacity="0.4" />
          </svg>
        </motion.div>
      ))}

      {/* Spice Particles */}
      {spiceParticles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            delay: particle.id * 0.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute z-5 pointer-events-none"
        >
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-full" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8"
          >
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
            <span className="text-white font-display font-semibold text-sm sm:text-base">New Fiery Flavors Just Dropped!</span>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
          >
            CRUNCH INTO THE{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-300">FLAVOR</span>
              <motion.span
                className="absolute inset-0 bg-yellow-300/30 blur-xl rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            {' '}EXPLOSION!
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 font-body max-w-3xl mx-auto leading-relaxed"
          >
            Experience the ultimate taste adventure with SOS Chips.
            Every bite delivers an irresistible crunch packed with bold,
            spicy flavors that will ignite your taste buds!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProducts}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-spicy-red font-display font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-spicy-orange" />
              Explore Flavors
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-spicy-yellow" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-white text-white font-display font-bold text-lg sm:text-xl rounded-full hover:bg-white/10 transition-all"
            >
              Our Story
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {[
              { value: '50M+', label: 'Packs Sold' },
              { value: '15+', label: 'Flavors' },
              { value: '4.9', label: 'Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/80 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-body mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

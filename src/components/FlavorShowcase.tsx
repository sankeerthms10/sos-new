import { motion } from 'framer-motion';
import { useState } from 'react';
import { Flame, Star, Droplet, Sparkles } from 'lucide-react';

interface Flavor {
  id: number;
  name: string;
  description: string;
  color: string;
  gradient: string;
  icon: typeof Flame;
  intensity: number;
}

const flavors: Flavor[] = [
  {
    id: 1,
    name: 'Fiery Chilli',
    description: 'An explosive blend of spicy chilies that will set your taste buds on fire.',
    color: '#E53935',
    gradient: 'from-red-600 to-red-800',
    icon: Flame,
    intensity: 95,
  },
  {
    id: 2,
    name: 'Tangy Tomato',
    description: 'Sweet and tangy tomatoes with a hint of herbs. A classic favorite!',
    color: '#FF6D00',
    gradient: 'from-orange-500 to-red-500',
    icon: Droplet,
    intensity: 60,
  },
  {
    id: 3,
    name: 'Cream & Onion',
    description: 'Rich, creamy goodness with the perfect onion kick. Smooth and savory.',
    color: '#FFD600',
    gradient: 'from-yellow-400 to-yellow-600',
    icon: Sparkles,
    intensity: 40,
  },
  {
    id: 4,
    name: 'Hot Masala',
    description: 'A symphony of Indian spices. Bold, aromatic, and unforgettable.',
    color: '#FF5722',
    gradient: 'from-orange-600 to-red-600',
    icon: Flame,
    intensity: 85,
  },
  {
    id: 5,
    name: 'Cheese Blast',
    description: 'Double the cheese, double the fun! Creamy, cheesy perfection.',
    color: '#FFC107',
    gradient: 'from-yellow-500 to-amber-600',
    icon: Star,
    intensity: 50,
  },
  {
    id: 6,
    name: 'Peri Peri',
    description: 'African bird\'s eye chili with citrus notes. Exotic and thrilling!',
    color: '#D32F2F',
    gradient: 'from-red-500 to-red-700',
    icon: Flame,
    intensity: 90,
  },
];

export default function FlavorShowcase() {
  const [activeFlavor, setActiveFlavor] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextFlavor = () => {
    setDirection(1);
    setActiveFlavor((prev) => (prev + 1) % flavors.length);
  };

  const prevFlavor = () => {
    setDirection(-1);
    setActiveFlavor((prev) => (prev - 1 + flavors.length) % flavors.length);
  };

  const currentFlavor = flavors[activeFlavor];
  const Icon = currentFlavor.icon;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="flavors" className="py-16 sm:py-24 bg-gradient-to-b from-orange-50 via-white to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
            Taste The Difference
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">Flavors</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Each flavor is crafted with passion to bring you the ultimate snacking experience
          </p>
        </motion.div>

        {/* Flavor Carousel */}
        <div className="relative">
          {/* Main Flavor Display */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Flavor Image/Visual */}
            <div className="flex-1 w-full lg:w-1/2">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{ backgroundColor: currentFlavor.color }}
                />

                {/* Main Circle */}
                <motion.div
                  key={currentFlavor.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`relative aspect-square bg-gradient-to-br ${currentFlavor.gradient} rounded-full shadow-2xl flex items-center justify-center`}
                >
                  {/* Inner Content */}
                  <div className="text-center text-white p-8">
                    <Icon className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 opacity-90" />
                    <h3 className="text-3xl sm:text-4xl font-display font-black mb-2">{currentFlavor.name}</h3>
                    <p className="text-sm sm:text-base opacity-90 max-w-xs">{currentFlavor.description}</p>

                    {/* Intensity Bar */}
                    <div className="mt-6 w-48 mx-auto">
                      <div className="flex justify-between text-xs mb-2">
                        <span>Intensity</span>
                        <span>{currentFlavor.intensity}%</span>
                      </div>
                      <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentFlavor.intensity}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Chips Around */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <motion.div
                      key={angle}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.8, 1, 0.8],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                      className="absolute"
                      style={{
                        top: `${50 - 45 * Math.cos((angle * Math.PI) / 180)}%`,
                        left: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className="w-8 h-5 sm:w-12 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Flavor Selector */}
            <div className="flex-1 w-full lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {flavors.map((flavor, index) => (
                  <motion.button
                    key={flavor.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setDirection(index > activeFlavor ? 1 : -1);
                      setActiveFlavor(index);
                    }}
                    className={`p-4 sm:p-6 rounded-2xl transition-all ${
                      activeFlavor === index
                        ? `bg-gradient-to-br ${flavor.gradient} text-white shadow-xl scale-105`
                        : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <flavor.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${
                      activeFlavor === index ? 'text-white' : 'text-gray-400'
                    }`} />
                    <span className="font-display font-bold text-sm sm:text-base">{flavor.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevFlavor}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-spicy-red transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextFlavor}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-spicy-red transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

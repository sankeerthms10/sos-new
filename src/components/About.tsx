import { motion } from 'framer-motion';
import { Flame, Heart, Leaf, Award, Sparkles, Zap } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { icon: Leaf, title: 'Natural Ingredients', description: 'Made with 100% real potatoes and natural spices' },
  { icon: Flame, title: 'Bold Flavors', description: 'Authentic recipes crafted for maximum taste' },
  { icon: Heart, title: 'Made with Love', description: 'Every chip is made with passion and care' },
  { icon: Award, title: 'Quality Assured', description: 'Rigorous quality checks on every batch' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">SOS</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Born from a passion for bold flavors and the perfect crunch, SOS Chips started in a small kitchen with one simple mission: <span className="text-spicy-red font-semibold">create the most irresistible chips the world has ever tasted</span>.
              </p>
              <p>
                We source the finest potatoes from trusted farms, carefully selecting each one for quality and taste. Our unique recipes blend traditional spices with modern flavors, creating a snacking experience that's truly unforgettable.
              </p>
              <p>
                From our famous Mad Angles to our extreme Chilli Blast, every chip tells a story of dedication, creativity, and a whole lot of love. We're not just making chips - we're crafting moments of joy, one crunch at a time.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-spicy-red to-spicy-orange flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dmcykk44y/image/upload/v1781925377/abt_sos_dbj9go.jpg"
                  alt="SOS Chips Creation"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spicy-red/30 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 w-32 h-32"
              >
                <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="floating-chip-about" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E53935" />
                      <stop offset="100%" stopColor="#FFD600" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="50" cy="40" rx="48" ry="38" fill="url(#floating-chip-about)" />
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 w-24 h-24"
              >
                <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="floating-chip-2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6D00" />
                      <stop offset="100%" stopColor="#FFD600" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="50" cy="40" rx="48" ry="38" fill="url(#floating-chip-2)" />
                </svg>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spicy-red to-spicy-orange flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-black text-gray-900">10+</div>
                    <div className="text-xs text-gray-500">Years of Excellence</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spicy-orange to-spicy-yellow flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-black text-gray-900">50M+</div>
                    <div className="text-xs text-gray-500">Chips Crunching Daily</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-spicy-red via-spicy-orange to-spicy-yellow rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white mb-4">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              "To bring joy to every snack lover through chips that are not just food, but a flavorful adventure.
              We believe that every crunch should be a moment of happiness."
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full text-white font-display font-semibold">
              <Heart className="w-5 h-5" />
              Made with passion since 2014
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

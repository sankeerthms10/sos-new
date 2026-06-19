import { motion } from 'framer-motion';
import { Leaf, Flame, Sparkles, Shield, ChefHat, Heart, Star, Globe, Package } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description: 'We source only the finest potatoes and natural spices from trusted farms for uncompromising quality.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Flame,
    title: 'Bold Flavors',
    description: 'Our unique spice blends create unforgettable taste experiences that keep you coming back for more.',
    color: 'from-red-500 to-orange-600',
  },
  {
    icon: Sparkles,
    title: 'Crunchy Texture',
    description: 'Perfectly sliced and fried to achieve the ideal balance of crispiness and satisfying crunch.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality checks at every stage ensure only the best chips reach your hands.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: ChefHat,
    title: 'Innovative Recipes',
    description: 'Our culinary experts constantly create exciting new flavors that surprise and delight.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Loved By Snack Lovers',
    description: 'Join millions of happy customers who have made SOS their go-to snacking choice.',
    color: 'from-pink-500 to-rose-600',
  },
];

const stats = [
  { value: '50M+', label: 'Packs Sold', icon: Package },
  { value: '4.9', label: 'Customer Rating', icon: Star },
  { value: '15+', label: 'Countries', icon: Globe },
  { value: '100%', label: 'Natural', icon: Leaf },
];

export default function WhyChoose() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
            The SOS Difference
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">SOS</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes SOS Chips the preferred choice for millions of snack lovers worldwide
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-spicy-red" />
              <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-body mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-spicy-red transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 text-spicy-orange opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${reason.color} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4">Ready to experience the difference?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#products');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-spicy-red to-spicy-orange text-white font-display font-bold rounded-full shadow-xl inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Try SOS Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

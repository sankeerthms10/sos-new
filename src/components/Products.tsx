import { motion } from 'framer-motion';
import { Flame, Star, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  heat: number;
  badge?: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'SOS Mad Angles',
    category: 'Style Chips',
    description: 'Triangular chips with bold spices and an unforgettable crunch. Perfect for those who love it spicy!',
    image: 'https://images.pexels.com/photos/1346356/pexels-photo-1346356.jpeg?auto=compress&cs=tinysrgb&w=400',
    heat: 4,
    badge: 'Best Seller',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    name: 'SOS Potato Chips',
    category: 'Classic Chips',
    description: 'Thin, crispy, and perfectly salted. The classic chip experience elevated to perfection.',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400',
    heat: 2,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 3,
    name: 'SOS Tedhe Medhe',
    category: 'Style Chips',
    description: 'Wavy, twisted chips packed with tangy masala flavors. A dance of spices in every bite.',
    image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400',
    heat: 4,
    badge: 'Spicy',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 4,
    name: 'SOS Nachos',
    category: 'Tortilla Chips',
    description: 'Authentic tortilla chips with a satisfying crunch. Perfect with your favorite dips.',
    image: 'https://images.pexels.com/photos/2087907/pexels-photo-2087907.jpeg?auto=compress&cs=tinysrgb&w=400',
    heat: 3,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 5,
    name: 'SOS Masala Crunch',
    category: 'Flavored Chips',
    description: 'A symphony of Indian spices on crispy chips. Your taste buds will thank you!',
    image: 'https://images.pexels.com/photos/2368870/pexels-photo-2368870.jpeg?auto=compress&cs=tinysrgb&w=400',
    heat: 5,
    badge: 'New',
    color: 'from-red-600 to-yellow-500',
  },
  {
    id: 6,
    name: 'SOS Chilli Blast',
    category: 'Extreme Heat',
    description: 'For the brave! Intense chili heat with a savory kick that will wake up your senses.',
    image: 'https://images.pexels.com/photos/1119907/pexels-photo-1119907.jpeg?auto=compress&cs=tinysrgb&w=400',
    heat: 5,
    badge: 'Extreme',
    color: 'from-red-700 to-red-900',
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <div className={`absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r ${product.color} text-white text-xs font-display font-bold rounded-full shadow-lg`}>
          {product.badge}
        </div>
      )}

      {/* Heat Level */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
        <Flame className="w-4 h-4 text-red-500" />
        <span className="text-xs font-bold text-gray-700">{product.heat}/5</span>
      </div>

      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs font-display font-semibold text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-xs text-gray-500 ml-2">(128 reviews)</span>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 bg-gradient-to-r ${product.color} text-white font-display font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
        >
          View Details
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.span>
        </motion.button>
      </div>

      {/* Floating Chips on Hover */}
      {isHovered && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 0.5, scale: 1, rotate: 45 }}
            className="absolute -top-4 -left-4 w-12 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 0.5, scale: 1, rotate: -30 }}
            transition={{ delay: 0.1 }}
            className="absolute -bottom-4 -right-4 w-10 h-6 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-sm"
          />
        </>
      )}
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
            Our Collection
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
            Irresistible <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium chips, each crafted to deliver the ultimate crunch and flavor explosion
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(229, 57, 53, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-spicy-red to-spicy-orange text-white font-display font-bold text-lg rounded-full shadow-xl inline-flex items-center gap-2"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

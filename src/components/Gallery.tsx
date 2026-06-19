import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1346356/pexels-photo-1346356.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'SOS Mad Angles',
    category: 'Product',
    size: 'large',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Snack Time',
    category: 'Lifestyle',
    size: 'small',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2368870/pexels-photo-2368870.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'SOS Masala Crunch',
    category: 'Product',
    size: 'small',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dmcykk44y/image/upload/f_auto,q_auto/4_qbygs7',
    title: 'Classic Crunch',
    category: 'Lifestyle',
    size: 'medium',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2087907/pexels-photo-2087907.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Nachos Night',
    category: 'Campaign',
    size: 'medium',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1119907/pexels-photo-1119907.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'SOS Party Pack',
    category: 'Product',
    size: 'large',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Friends & Chips',
    category: 'Lifestyle',
    size: 'small',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'SOS Festival',
    category: 'Campaign',
    size: 'small',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Product', 'Lifestyle', 'Campaign'];

  const filteredImages = galleryImages.filter(
    (img) => filter === 'All' || img.category === filter
  );

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
            Visual Feast
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through the world of SOS Chips
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-display font-semibold text-sm transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-spicy-red to-spicy-orange text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {filteredImages.map((image, index) => {
            const sizeClasses =
              image.size === 'large'
                ? 'col-span-2 row-span-2'
                : image.size === 'medium'
                  ? 'col-span-1 row-span-2'
                  : 'col-span-1 row-span-1';

            return (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                onClick={() => setSelectedImage(image.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg ${sizeClasses}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white/80 font-display uppercase tracking-wide">{image.category}</span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">{image.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
            >
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src}
                alt="Gallery"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h3 className="text-xl font-display font-bold text-white">
                  {galleryImages.find((img) => img.id === selectedImage)?.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {galleryImages.find((img) => img.id === selectedImage)?.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

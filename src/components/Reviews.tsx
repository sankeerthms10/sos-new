import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sankeerth ms',
    location: 'Kerala, India',
    rating: 4,
    title: 'Best chips ever!',
    text: 'The Mad Angles are absolutely incredible! The spice level is perfect and the crunch is unmatched. SOS has become my go-to snack for movie nights.',
    avatar: 'https://res.cloudinary.com/dmcykk44y/image/upload/v1781926039/rev3_zrxvnb.jpg',
    product: 'Mad Angles',
  },
  {
    id: 2,
    name: 'Gautham JL Krishna',
    location: 'Delhi, India',
    rating: 5,
    title: 'Flavor explosion!',
    text: 'Tried the Chilli Blast and WOW! It actually lives up to its name. The heat is intense but so addictive. Can\'t stop at just one pack!',
    avatar: 'https://res.cloudinary.com/dmcykk44y/image/upload/v1781926039/rev_2_bamp7p.jpg',
    product: 'Chilli Blast',
  },
  {
    id: 3,
    name: 'Dayana Jony',
    location: 'Bangalore, India',
    rating: 5,
    title: 'Family favorite',
    text: 'We always have SOS chips in our pantry. The Cream & Onion flavor is perfect for my kids, and I love the Hot Masala. Something for everyone!',
    avatar: 'https://res.cloudinary.com/dmcykk44y/image/upload/v1781926039/rev_1_vtiktu.jpg',
    product: 'Cream & Onion',
  },
  {
    id: 4,
    name: 'Vikram',
    location: 'Chennai, India',
    rating: 5,
    title: 'Anjali Krishnan',
    text: 'Got the SOS Nachos for a party and they were a hit! Everyone kept asking where I got them. The quality is top-notch.',
    avatar: 'https://res.cloudinary.com/dmcykk44y/image/upload/v1781926284/rev4_trwk7w.jpg',
    product: 'Nachos',
  },
  {
    id: 5,
    name: 'Meera',
    location: 'karnataka, India',
    rating: 5,
    title: 'Premium quality',
    text: 'You can taste the difference. Real potatoes, real spices, no artificial taste. The Masala Crunch has the most authentic flavor!',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    product: 'Masala Crunch',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
            What People Say
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
            Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">Reviews</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our amazing community of snack lovers
          </p>
        </motion.div>

        {/* Main Review Card */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-spicy-red to-spicy-orange flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-xs font-bold rounded-full">
                    {current.product}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3">
                  {current.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  "{current.text}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-display font-bold text-gray-900">{current.name}</div>
                  <div className="text-sm text-gray-500">{current.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:left-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-spicy-red transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:right-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-spicy-red transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-spicy-red to-spicy-orange'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '50,000+', label: 'Happy Reviews' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '15+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

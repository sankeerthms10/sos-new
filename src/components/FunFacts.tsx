import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Package, Users, Flame, ShoppingBag } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: 50000000,
    suffix: '+',
    label: 'Packs Sold',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Users,
    value: 10000000,
    suffix: '+',
    label: 'Happy Customers',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Flame,
    value: 15,
    suffix: '+',
    label: 'Flavor Variants',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: ShoppingBag,
    value: 50000,
    suffix: '+',
    label: 'Retail Stores',
    color: 'from-amber-500 to-orange-500',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-display font-black">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function FunFacts() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-spicy-red via-spicy-orange to-spicy-yellow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Chips */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${20 + i * 15}%`,
            y: `${20 + i * 10}%`,
            rotate: 0,
            opacity: 0.1,
          }}
          animate={{
            y: [`${20 + i * 10}%`, `${25 + i * 10}%`, `${20 + i * 10}%`],
            rotate: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          className="absolute z-0"
        >
          <svg viewBox="0 0 100 80" className="w-16 h-12 sm:w-24 sm:h-16">
            <ellipse cx="50" cy="40" rx="48" ry="38" fill="white" fillOpacity="0.3" />
          </svg>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-display font-semibold rounded-full mb-4">
            Numbers Speak
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4">
            Fun Facts About SOS
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            We're not just making chips - we're creating snacking history!
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl`}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Value */}
                <div className="text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base text-white/80 font-display">
                  {stat.label}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${stat.color} opacity-20 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-xl sm:text-2xl text-white font-display">
            And we're just getting started!
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block ml-2"
            >
              🔥
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

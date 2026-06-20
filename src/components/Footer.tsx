import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About Us', href: '#about' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const policies = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Refund Policy', href: '#' },
  { name: 'Shipping Info', href: '#' },
  { name: 'Cookie Policy', href: '#' },
];

const products = [
  { name: 'Mad Angles', href: '#products' },
  { name: 'Potato Chips', href: '#products' },
  { name: 'Tedhe Medhe', href: '#products' },
  { name: 'Nachos', href: '#products' },
  { name: 'Masala Crunch', href: '#products' },
  { name: 'Chilli Blast', href: '#products' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-spicy-red/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-spicy-orange/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spicy-red via-spicy-orange to-spicy-yellow flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-black text-lg">SOS</span>
              </div>
              <span className="font-display font-bold text-2xl">CHIPS</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium chips crafted with passion and the finest ingredients.
              Every crunch tells a story of quality and bold flavors.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-spicy-red hover:to-spicy-orange transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-spicy-orange transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <button
                    onClick={() => scrollToSection(product.href)}
                    className="text-gray-400 hover:text-spicy-orange transition-colors"
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spicy-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Vizhinjam, Trivandrum, Kerala 695102</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-spicy-orange flex-shrink-0" />
                <span className="text-gray-400">+91 7034429454</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-spicy-orange flex-shrink-0" />
                <span className="text-gray-400">hello@soschips.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-bold text-lg mb-1">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm">Get updates on new flavors and exclusive offers!</p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-spicy-orange focus:outline-none transition-colors w-full sm:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-spicy-red to-spicy-orange font-display font-bold rounded-xl whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} SOS Chips. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              {policies.slice(0, 3).map((policy, index) => (
                <span key={policy.name} className="flex items-center gap-4">
                  <a href={policy.href} className="hover:text-spicy-orange transition-colors">
                    {policy.name}
                  </a>
                  {index < 2 && <span className="hidden sm:inline">|</span>}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              Developed by Sankeerth MS | Computer Engineering Student
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

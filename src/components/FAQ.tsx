import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Are SOS Chips made with real potatoes?',
    answer: 'Yes! We use only 100% real potatoes sourced from trusted farms. Every chip is made from carefully selected potatoes that meet our strict quality standards. No artificial substitutes - just pure, natural goodness.',
  },
  {
    id: 2,
    question: 'What makes SOS Chips different from other brands?',
    answer: 'Our unique spice blends and cooking process create the perfect crunch and flavor balance. We use traditional recipes with a modern twist, and our quality control ensures every chip meets the highest standards.',
  },
  {
    id: 3,
    question: 'Are SOS Chips vegetarian/vegan friendly?',
    answer: 'Most of our flavors are 100% vegetarian! We clearly mark all ingredients on our packaging. Our Cream & Onion and Cheese Blast flavors contain dairy, but our other flavors are suitable for vegans.',
  },
  {
    id: 4,
    question: 'How should I store my SOS Chips to keep them fresh?',
    answer: 'Store in a cool, dry place away from direct sunlight. Once opened, reseal the pack tightly or transfer to an airtight container. For best crunch, consume within 2-3 days of opening.',
  },
  {
    id: 5,
    question: 'Do you offer different spice levels?',
    answer: 'Absolutely! We have options for everyone - from mild Cream & Onion to extreme Chilli Blast. Each product shows a spice level indicator from 1-5, so you can choose your perfect heat level.',
  },
  {
    id: 6,
    question: 'Where can I buy SOS Chips?',
    answer: 'SOS Chips are available at major retail stores, supermarkets, and convenience stores across India. You can also order online through our website or popular e-commerce platforms.',
  },
  {
    id: 7,
    question: 'Are your products tested for quality?',
    answer: 'Yes, every batch goes through rigorous quality testing. We have multiple checkpoints during production, and our products meet all FSSAI standards. Quality is our top priority.',
  },
  {
    id: 8,
    question: 'Do you offer bulk orders for events or parties?',
    answer: 'Yes! We have special party packs and bulk ordering options. Contact our sales team through the contact form or call us directly for custom orders and corporate gifting.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-spicy-red/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-spicy-red flex-shrink-0" />
          <span className="font-display font-semibold text-gray-900 text-left">{faq.question}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-spicy-red' : 'text-gray-400'}`} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden bg-gray-50"
      >
        <div className="px-6 py-5 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-spicy-red to-spicy-orange text-white text-sm font-display font-semibold rounded-full mb-4">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-spicy-red to-spicy-orange">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about SOS Chips
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 p-8 bg-gradient-to-r from-spicy-red to-spicy-orange rounded-3xl"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-white/80 mb-6">
            We're here to help! Reach out to our friendly support team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-white text-spicy-red font-display font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-brand-blush/30 bg-white rounded-xl shadow-luxury overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer hover:bg-brand-nude-dark/40 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-brand-charcoal font-serif font-semibold text-base md:text-lg pr-4">
                {item.question}
              </span>
              <span className={`text-xs md:text-sm text-brand-rose flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-5 md:p-6 pt-0 text-brand-gray text-sm md:text-base leading-relaxed border-t border-brand-nude/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

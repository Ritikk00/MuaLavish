import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/90 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-brand-blush text-2xl z-50 p-2 cursor-pointer transition-colors"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <FaTimes />
        </button>

        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-blush text-3xl z-50 p-3 cursor-pointer bg-brand-charcoal/40 hover:bg-brand-charcoal/80 rounded-full transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
          />
          {currentImage.title && (
            <div className="mt-4 text-center max-w-lg px-4">
              <h3 className="text-white text-xl font-serif">{currentImage.title}</h3>
              <p className="text-brand-gray-light text-sm mt-1">{currentImage.description}</p>
            </div>
          )}
        </motion.div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-blush text-3xl z-50 p-3 cursor-pointer bg-brand-charcoal/40 hover:bg-brand-charcoal/80 rounded-full transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Image counter at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-gray-light text-sm tracking-widest font-sans">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCarousel({ reviews }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-12 py-8">
      {/* Background quote mark */}
      <div className="absolute top-0 left-0 md:left-6 text-brand-blush/20 text-7xl md:text-9xl font-serif pointer-events-none select-none">
        <FaQuoteLeft />
      </div>

      <div className="relative overflow-hidden min-h-[320px] md:min-h-[250px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white p-6 md:p-8 rounded-2xl border border-brand-blush/20 shadow-luxury"
          >
            {/* Client Image */}
            <div className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-blush shadow-md">
              <img
                src={reviews[activeIndex].image}
                alt={reviews[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review content */}
            <div className="flex-grow text-center md:text-left">
              {/* Star Rating */}
              <div className="flex justify-center md:justify-start gap-1 text-brand-gold mb-3">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-brand-charcoal text-base md:text-lg italic leading-relaxed mb-4">
                "{reviews[activeIndex].text}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="text-brand-charcoal font-semibold text-lg font-serif">
                  {reviews[activeIndex].name}
                </h4>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 justify-center md:justify-start mt-1">
                  <span className="text-brand-gray text-xs uppercase tracking-wider">
                    {reviews[activeIndex].location}
                  </span>
                  <span className="hidden md:inline text-brand-blush text-xs">•</span>
                  <span className="text-brand-rose text-xs font-semibold uppercase tracking-wider">
                    {reviews[activeIndex].service}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-brand-blush text-brand-charcoal hover:text-white p-3 rounded-full border border-brand-blush/30 shadow-md cursor-pointer transition-all focus:outline-none"
        aria-label="Previous review"
      >
        <FaChevronLeft size={14} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-brand-blush text-brand-charcoal hover:text-white p-3 rounded-full border border-brand-blush/30 shadow-md cursor-pointer transition-all focus:outline-none"
        aria-label="Next review"
      >
        <FaChevronRight size={14} />
      </button>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-brand-rose w-6" : "bg-brand-blush"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

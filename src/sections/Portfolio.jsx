import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { portfolio } from "../data/siteData";
import Lightbox from "../components/Lightbox";

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredPortfolio = portfolio.slice(0, 12);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPortfolio.length) % featuredPortfolio.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPortfolio.length);
  };

  const openCompletePortfolio = () => {
    if (typeof window !== "undefined") {
      window.open("/portfolio.html", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white via-brand-nude/40 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-rose">
            Featured Editorial Work
          </span>
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal md:text-4xl">
            Premium Makeup, Curated for the Spotlight
          </h2>
          <div className="mx-auto h-0.5 w-20 bg-brand-rose/80"></div>
          <p className="text-sm font-light text-brand-gray md:text-base">
            A refined showcase of radiant festive, party, and evening transformations designed to feel elegant, polished, and timeless.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 md:px-6">
          {/* Custom Left Arrow */}
          <button
            type="button"
            className="portfolio-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-rose/25 bg-white/95 p-3.5 text-brand-charcoal shadow-luxury hover:scale-105 hover:text-brand-rose hover:border-brand-rose transition-all duration-300 hidden md:flex cursor-pointer"
            aria-label="Previous portfolio images"
          >
            <FaChevronLeft size={14} />
          </button>
          
          {/* Custom Right Arrow */}
          <button
            type="button"
            className="portfolio-next absolute right-0 top-1/2 z-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-rose/25 bg-white/95 p-3.5 text-brand-charcoal shadow-luxury hover:scale-105 hover:text-brand-rose hover:border-brand-rose transition-all duration-300 hidden md:flex cursor-pointer"
            aria-label="Next portfolio images"
          >
            <FaChevronRight size={14} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: ".portfolio-prev", nextEl: ".portfolio-next" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="portfolio-carousel"
          >
            {featuredPortfolio.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className="group relative h-[420px] overflow-hidden rounded-3xl border border-brand-rose/15 bg-white shadow-luxury hover:shadow-xl hover:border-brand-rose/30 transition-all duration-500 cursor-pointer animate-none"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Elegant overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent transition-opacity duration-300" />
                  
                  {/* Details content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white z-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full border border-white/30 px-3 py-1 text-[8px] uppercase tracking-[0.25em] text-brand-blush-light font-bold">
                        Featured Look
                      </span>
                      <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm shadow-md">
                        <FaSearchPlus size={12} className="text-white" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-1 text-xs text-brand-blush-light/90 font-light">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={openCompletePortfolio}
            className="rounded-full border border-brand-rose bg-brand-rose px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-charcoal hover:border-brand-charcoal"
          >
            View Complete Portfolio
          </button>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={featuredPortfolio}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}

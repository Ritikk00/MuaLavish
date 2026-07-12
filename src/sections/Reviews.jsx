import React from "react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { reviews } from "../data/siteData";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
          <span className="text-brand-rose text-xs uppercase tracking-[0.25em] font-bold">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">
            Love From Our Brides
          </h2>
          <div className="w-16 h-0.5 bg-brand-rose mx-auto"></div>
          <p className="text-brand-gray text-sm md:text-base font-light">
            Read stories of transformation and trust from real brides and party guests who styled their special days with MUA Lavish.
          </p>
        </div>

        {/* Carousel Component */}
        <TestimonialCarousel reviews={reviews} />
        
      </div>
    </section>
  );
}

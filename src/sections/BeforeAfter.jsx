import React from "react";
import ImageSlider from "../components/ImageSlider";
import { beforeAfter } from "../data/siteData";
import { FaRegCheckCircle, FaMagic } from "react-icons/fa";

export default function BeforeAfter() {
  const qualities = [
    "Even skin tone correction without cakey textures",
    "Enhanced features focusing on eyes and lips",
    "Long-lasting waterproof base suitable for 15+ hours",
    "Clean hygiene-first brush and tool application"
  ];

  return (
    <section className="py-20 bg-brand-nude/10 border-y border-brand-blush/15">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-brand-rose text-xs uppercase tracking-[0.25em] font-bold">
              <FaMagic /> Before & After
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal leading-tight">
              The Art of Glow: Real Transformations
            </h2>
            
            <div className="w-16 h-0.5 bg-brand-rose"></div>
            
            <p className="text-brand-gray text-sm md:text-base font-light leading-relaxed">
              {beforeAfter.description}
            </p>

            <ul className="space-y-3.5 pt-2">
              {qualities.map((qual, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-brand-charcoal/95 font-medium">
                  <FaRegCheckCircle size={16} className="text-brand-rose mt-0.5 flex-shrink-0" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-xs text-brand-rose italic font-medium">
                *Note: Drag the slider handle in the center to view before & after details.
              </p>
            </div>
          </div>

          {/* Slider Right */}
          <div className="lg:col-span-7">
            <ImageSlider
              beforeImage={beforeAfter.beforeImage}
              afterImage={beforeAfter.afterImage}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

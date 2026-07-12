import React from "react";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { pricingPackages, siteInfo } from "../data/siteData";

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-rose text-xs uppercase tracking-[0.25em] font-bold">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">
            Luxury Packages & Pricing
          </h2>
          <div className="w-16 h-0.5 bg-brand-rose mx-auto"></div>
          <p className="text-brand-gray text-sm md:text-base font-light">
            Select a package that fits your event. We offer transparent pricing with premium, skin-safe products and on-site support.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 ${
            pricingPackages.length > 1 ? "md:grid-cols-2 max-w-4xl" : "max-w-md"
          } gap-8 items-stretch mx-auto justify-center`}
        >
          {pricingPackages.map((pkg, index) => {
            const encodedMsg = encodeURIComponent(`Hello MUA Lavish! I am interested in booking the package: "${pkg.title}". Please let me know the availability.`);
            const waUrl = `https://wa.me/${siteInfo.whatsappNumber.replace("+", "")}?text=${encodedMsg}`;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border h-full hover:-translate-y-1 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-[#FFFDF9] to-brand-blush/10 border-2 border-brand-rose shadow-2xl scale-102 md:scale-105 z-10 hover:shadow-2xl"
                    : "bg-white border-brand-rose/15 shadow-luxury hover:shadow-xl hover:border-brand-rose/30"
                }`}
              >
                {/* Popular Tag */}
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-rose text-white text-[10px] uppercase tracking-widest font-bold px-5 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Package details */}
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-brand-charcoal mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-brand-gray text-[11px] md:text-xs leading-relaxed font-light mb-6">
                    {pkg.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-brand-rose">
                      {pkg.price}
                    </span>
                    <span className="text-brand-gray text-xs">/ event</span>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-charcoal/90 font-medium leading-tight">
                        <FaCheck size={12} className={`${pkg.popular ? "text-brand-gold" : "text-brand-rose"} mt-0.5 flex-shrink-0`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer transition-all duration-300 ${
                    pkg.popular
                      ? "bg-brand-rose text-white hover:bg-brand-charcoal"
                      : "bg-brand-charcoal text-white hover:bg-brand-rose"
                  }`}
                >
                  <FaWhatsapp size={14} className="text-[#25D366]" />
                  {pkg.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Small T&C disclaimer */}
        <p className="text-center text-[10px] text-brand-gray mt-12 italic">
          * Travel charges are included for Delhi NCR bookings. For destination weddings outside NCR, accommodation and flight/travel charges will be covered by the client. Advance payment of 25% is required to secure the date.
        </p>

      </div>
    </section>
  );
}

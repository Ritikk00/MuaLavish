import React from "react";
import { motion } from "framer-motion";
import { whyChooseUs } from "../data/siteData";
// Import required icons
import { MdStars, MdCleanHands, MdFace } from "react-icons/md";
import { FaUserCheck, FaHome, FaRegClock } from "react-icons/fa";
import artistImg from "../assets/artist1.jpg";

// Icon Map helper
const iconMap = {
  MdStars: MdStars,
  FaUserCheck: FaUserCheck,
  FaHome: FaHome,
  MdCleanHands: MdCleanHands,
  FaRegClock: FaRegClock,
  MdFace: MdFace
};

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-20 bg-brand-nude/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-rose text-xs uppercase tracking-[0.25em] font-bold">
            Our Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">
            Why Clients Trust MUA Lavish
          </h2>
          <div className="w-16 h-0.5 bg-brand-rose mx-auto"></div>
          <p className="text-brand-gray text-sm md:text-base font-light">
            We don't just apply makeup; we craft an exquisite experience that makes you feel confident, relaxed, and absolutely breathtaking.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || MdStars;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white p-8 rounded-2xl border border-brand-blush/10 hover:border-brand-rose/20 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-brand-blush/30 text-brand-rose flex items-center justify-center mb-6 group-hover:bg-brand-rose group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComponent size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-serif font-bold text-brand-charcoal mb-3 group-hover:text-brand-rose transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Artist Intro Banner */}
        <div className="mt-20 bg-white rounded-3xl overflow-hidden border border-brand-blush/15 shadow-luxury grid grid-cols-1 lg:grid-cols-12">
          {/* Portrait side */}
          <div className="lg:col-span-5 h-[350px] lg:h-auto overflow-hidden relative">
            <img
              src={artistImg}
              alt="Lead Makeup Artist Portrait"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-brand-rose/10"></div>
          </div>

          {/* Description side */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <span className="text-brand-rose text-xs uppercase tracking-widest font-bold">Meet the Artist</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-charcoal">
              Lavish Kushwaha <span className="text-sm font-sans font-normal text-brand-gray uppercase tracking-widest block md:inline md:ml-2">| Freelancer makeup and hair Artist</span>
            </h3>
            <p className="text-brand-gray text-sm md:text-base font-light leading-relaxed">
              I am a passionate freelance makeup artist dedicated to enhancing natural beauty through elegant and customized makeup looks. From engagements and roka ceremonies to festive celebrations, I help clients look and feel their absolute best.
            </p>
            <p className="text-brand-gray text-sm md:text-base font-light leading-relaxed">
              With 2 years of professional training and experience across Delhi NCR, my goal is to create flawless, skin-like finishes that last all day. I work with premium, skin-safe brands like MAC, NARS, and Huda Beauty to ensure your makeover process is comfortable and completely personalized.
            </p>
            
            {/* Signature or Quote */}
            <div className="pt-4 border-t border-brand-nude">
              <span className="font-serif italic text-lg text-brand-rose font-bold">Lavish Kushwaha</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

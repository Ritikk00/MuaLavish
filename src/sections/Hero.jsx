import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaRegImages } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteInfo, stats } from "../data/siteData";
import heroBg from "../assets/hero-bg.jpg";

function CounterItem({ label, value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isRating = label.toLowerCase().includes("rating");
    const target = value;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      
      const currentValue = easeProgress * target;
      
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(isRating ? Number(currentValue.toFixed(1)) : Math.round(currentValue));
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [value, label]);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 xl:p-3.5 rounded-2xl text-left shadow-sm">
      <div className="text-lg xl:text-2xl font-serif font-bold text-brand-gold flex items-center gap-0.5">
        <span>{count}</span>
        <span className="text-brand-gold">{suffix}</span>
      </div>
      <p className="text-[8px] xl:text-[10px] uppercase tracking-wider text-brand-blush-light/85 font-medium mt-1">
        {label}
      </p>
    </div>
  );
}

function CounterItemMobile({ label, value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isRating = label.toLowerCase().includes("rating");
    const target = value;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * target;
      
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(isRating ? Number(currentValue.toFixed(1)) : Math.round(currentValue));
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [value, label]);

  return (
    <div className="bg-white border border-brand-rose/15 p-3 rounded-xl text-left shadow-sm">
      <div className="text-lg font-serif font-bold text-brand-rose flex items-center gap-0.5">
        <span>{count}</span>
        <span className="text-brand-rose">{suffix}</span>
      </div>
      <p className="text-[9px] uppercase tracking-wider text-brand-charcoal/80 font-medium mt-1">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const encodedMsg = encodeURIComponent("Hello MUA Lavish! I want to check availability for a freelance makeup booking.");
  const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber.replace("+", "")}?text=${encodedMsg}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 16 } }
  };

  return (
    <section
      id="home"
      className="w-full pt-32 sm:pt-24 md:pt-28 pb-8 md:pb-12 bg-brand-nude"
    >
      {/* Widescreen Aspect-Ratio Controlled Banner - Fits beautifully without stretching */}
      <div className="w-[92vw] max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative aspect-[16/13.5] sm:aspect-[16/11] md:aspect-[16/9.5] lg:aspect-[16/7.5] bg-brand-charcoal shadow-2xl border border-brand-rose/20 flex items-stretch">
        
        {/* Banner Background Image - Aligned to top to ensure watermark is not cut */}
        <img
          src={heroBg}
          alt="MUA Lavish Professional Festive & Party Makeup Artist"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        
        {/* Elegant Gradient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/25 lg:to-transparent z-0"></div>

        {/* Hero Content Overlay */}
        <div className="w-full flex flex-col justify-between relative z-10 p-4 sm:p-10 lg:py-10 lg:px-12 xl:py-12 xl:px-16 text-left select-none">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full h-full flex flex-col justify-between"
          >
            {/* Top Content: Badges, Title, Description */}
            <div className="space-y-1.5 sm:space-y-4 lg:space-y-6">
              {/* Tagline Badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-1.5 md:gap-3"
              >
                <span className="inline-block bg-brand-rose/25 border border-brand-rose/40 text-brand-blush-light text-[7px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] px-2.5 py-1 rounded-full font-bold">
                  Freelance Artist
                </span>
                <span className="inline-block bg-brand-gold/25 border border-brand-gold/40 text-brand-gold text-[7px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] px-2.5 py-1 rounded-full font-bold font-sans">
                  Premium Doorstep Service
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-base sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-serif text-white leading-tight"
              >
                Luxury Makeup Artist <br className="hidden md:inline" />
                for Every Special Occasion
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-brand-blush-light/85 text-[9px] sm:text-[11px] md:text-sm lg:text-base font-light leading-relaxed max-w-xl"
              >
                Transforming your beauty with premium wedding, engagement, party and 
                festive makeup services. Creating flawless looks that make every moment unforgettable.
              </motion.p>
            </div>

            {/* Bottom Content: CTAs and Stats (Stats only on desktop) */}
            <div className="space-y-3 sm:space-y-6 lg:space-y-8">
              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-4 w-full sm:w-auto"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba59] text-[8px] sm:text-[11px] md:text-xs lg:text-sm uppercase tracking-wider font-bold px-3.5 py-2 sm:px-8 sm:py-3.5 md:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  <FaWhatsapp size={16} />
                  Book Your Makeup Session
                </a>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white hover:bg-brand-rose hover:text-white text-[8px] sm:text-[11px] md:text-xs lg:text-sm uppercase tracking-wider font-bold px-3.5 py-2 sm:px-8 sm:py-3.5 md:py-4 rounded-full border border-white/30 hover:border-brand-rose transition-all duration-300 hover:-translate-y-0.5 text-center"
                >
                  <FaRegImages size={14} />
                  View Portfolio
                </a>
              </motion.div>

              {/* Integrated Stats Section inside Hero (Desktop only) */}
              <motion.div
                variants={itemVariants}
                className="hidden lg:block pt-5 border-t border-white/10 w-full"
              >
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, idx) => (
                    <CounterItem
                      key={idx}
                      label={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Stats Section below Banner (Mobile and Tablet only) */}
      <div className="lg:hidden w-[92vw] mx-auto mt-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => (
            <CounterItemMobile
              key={idx}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

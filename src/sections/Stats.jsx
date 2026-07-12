import React, { useEffect, useState, useRef } from "react";
import { stats } from "../data/siteData";

function CounterItem({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const isRating = label.toLowerCase().includes("rating");
    const target = value;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
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
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, label]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center p-6 text-center border-b md:border-b-0 md:border-r last:border-0 border-brand-blush/20"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-rose flex items-center justify-center">
        <span>{count}</span>
        <span className="text-brand-gold ml-0.5">{suffix}</span>
      </div>
      <p className="text-xs md:text-sm uppercase tracking-widest text-brand-charcoal/80 font-medium mt-2">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white border-y border-brand-blush/20 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-brand-nude/30 rounded-2xl border border-brand-blush/20 shadow-luxury">
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
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

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { siteInfo } from "../data/siteData";

export default function InstagramGrid() {
  const instaUrl = `https://instagram.com/${siteInfo.instagram.replace("@", "")}`;

  return (
    <section className="py-16 bg-brand-nude/15 border-t border-brand-blush/20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-blush/20 shadow-luxury flex flex-col items-center space-y-6">
          {/* Instagram Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
            <FaInstagram size={32} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-charcoal">
              Follow Us on Instagram
            </h2>
            <p className="text-brand-gray text-sm font-light">
              Get a daily dose of flawless transformations, tips, and behind-the-scenes diaries.
            </p>
          </div>

          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-charcoal text-white hover:bg-brand-rose px-8 py-3.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <FaInstagram size={18} />
            <span>Follow {siteInfo.instagram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

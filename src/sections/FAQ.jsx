import React from "react";
import Accordion from "../components/Accordion";
import { faqs } from "../data/siteData";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white border-t border-brand-blush/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-rose text-xs uppercase tracking-[0.25em] font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-brand-rose mx-auto"></div>
          <p className="text-brand-gray text-sm md:text-base font-light">
            Find answers to commonly asked questions about booking, payments, location coverage, and makeup techniques.
          </p>
        </div>

        {/* Accordion List */}
        <Accordion items={faqs} />

      </div>
    </section>
  );
}

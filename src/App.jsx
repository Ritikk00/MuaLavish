import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import BeforeAfter from "./sections/BeforeAfter";
import Reviews from "./sections/Reviews";
import WhyChooseUs from "./sections/WhyChooseUs";

import Pricing from "./sections/Pricing";
import InstagramGrid from "./sections/InstagramGrid";
import FAQ from "./sections/FAQ";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-nude overflow-x-hidden selection:bg-brand-rose/20 selection:text-brand-rose">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services List Grid */}
        <Services />

        {/* Masonry Filter Portfolio */}
        <Portfolio />

        {/* Drag image Before-After comparison */}
        <BeforeAfter />

        {/* Why Choose Us & Artist Banner */}
        <WhyChooseUs />

        {/* Client Testimonials */}
        <Reviews />

        {/* Pricing Section */}
        <Pricing />

        {/* Instagram Social Grid */}
        <InstagramGrid />

        {/* Collapsible FAQ Accordion */}
        <FAQ />

        {/* Booking Form with Call/Email Details */}
        <ContactForm />
      </main>

      {/* Footer Links & Contact */}
      <Footer />

      {/* Call, WhatsApp & Back-to-top floating nodes */}
      <FloatingActions />
    </div>
  );
}

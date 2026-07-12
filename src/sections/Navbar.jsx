import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { siteInfo } from "../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const encodedMsg = encodeURIComponent("Hello MUA Lavish! I want to check availability for an event booking.");
  const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber.replace("+", "")}?text=${encodedMsg}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-brand-rose/20 shadow-luxury py-3"
          : "bg-brand-nude/80 backdrop-blur-sm border-b border-brand-rose/10 py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <a href="#home" className="flex flex-col items-start select-none group">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-brand-charcoal group-hover:text-brand-rose transition-colors duration-300">
            {siteInfo.name.toUpperCase()}
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-brand-rose -mt-1 font-semibold">
            Freelance Makeup Artist
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm uppercase tracking-wider font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-rose after:transition-all after:duration-300 hover:after:w-full text-brand-charcoal/80 hover:text-brand-rose"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Book on WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-rose text-white hover:bg-brand-charcoal text-xs md:text-sm uppercase tracking-wider font-bold px-6 py-2.5 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <FaWhatsapp size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-brand-charcoal text-white hover:bg-brand-rose text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full cursor-pointer transition-colors"
          >
            <FaWhatsapp size={14} className="text-[#25D366]" />
            Book
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none cursor-pointer text-brand-charcoal"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-nude border-b border-brand-blush/20 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider font-semibold">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-brand-charcoal/80 hover:text-brand-rose py-2 border-b border-brand-blush/10 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

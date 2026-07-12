import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { siteInfo } from "../data/siteData";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Generate WhatsApp link
  const encodedMsg = encodeURIComponent("Hello! I am interested in booking a makeup session with MUA Lavish. Please share details.");
  const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber.replace("+", "")}?text=${encodedMsg}`;
  const callUrl = `tel:${siteInfo.phoneNumber}`;

  return (
    <div className="relative z-45">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-brand-charcoal hover:bg-brand-rose text-white p-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 z-45 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 flex items-center justify-center animate-bounce z-45"
        aria-label="Book on WhatsApp"
        style={{ animationDuration: "3s" }}
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
        <FaWhatsapp size={24} />
      </a>

      {/* Call Now Button */}
      <a
        href={callUrl}
        className="fixed bottom-6 left-6 bg-brand-rose text-white p-4 rounded-full shadow-xl hover:bg-brand-charcoal transition-all duration-300 hover:scale-105 flex items-center justify-center z-45"
        aria-label="Call MUA Lavish"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}

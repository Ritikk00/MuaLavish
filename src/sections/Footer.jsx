import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { siteInfo, services } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instaUrl = `https://instagram.com/${siteInfo.instagram.replace("@", "")}`;
  const fbUrl = `https://facebook.com/${siteInfo.facebook}`;
  const encodedMsg = encodeURIComponent("Hello! I'm interested in booking a makeover session with MUA Lavish.");
  const waUrl = `https://wa.me/${siteInfo.whatsappNumber.replace("+", "")}?text=${encodedMsg}`;

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-brand-rose/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex flex-col items-start select-none">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-brand-blush">
                {siteInfo.name.toUpperCase()}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-brand-rose -mt-1">
                Freelance Makeup Artist
              </span>
            </a>
            <p className="text-brand-gray-light text-xs md:text-sm font-light leading-relaxed">
              We specialize in creating flawless makeovers tailored to your individual style. From intimate ceremonies to festive parties and formal receptions, we make you look breathtaking.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-rose text-brand-blush hover:text-white flex items-center justify-center transition-all duration-300 shadow-md border border-white/5 hover:border-brand-rose"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={16} />
              </a>
          
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] text-brand-blush hover:text-white flex items-center justify-center transition-all duration-300 shadow-md border border-white/5 hover:border-brand-rose"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm uppercase tracking-widest font-bold text-brand-rose">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs md:text-sm font-light text-brand-gray-light">
              <li>
                <a href="#home" className="hover:text-brand-rose transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-rose transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-rose transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-rose transition-colors">About Us</a>
              </li>

              <li>
                <a href="#faq" className="hover:text-brand-rose transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-rose transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm uppercase tracking-widest font-bold text-brand-rose">
              Services
            </h3>
            <ul className="space-y-2 text-xs md:text-sm font-light text-brand-gray-light">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-brand-rose transition-colors block">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm uppercase tracking-widest font-bold text-brand-rose">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-xs md:text-sm font-light text-brand-gray-light">
              <li className="flex items-start gap-2.5">
                <FaPhoneAlt size={14} className="text-brand-rose mt-0.5 flex-shrink-0" />
                <a href={`tel:${siteInfo.phoneNumber}`} className="hover:text-brand-rose transition-colors">
                  {siteInfo.phoneNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaEnvelope size={14} className="text-brand-rose mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-brand-rose transition-colors">
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt size={14} className="text-brand-rose mt-0.5 flex-shrink-0" />
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                <span>
                  ⏰ <strong>Booking Hours:</strong><br />
                  {siteInfo.workingHours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-brand-gray-light font-light gap-4">
          <p>© {currentYear} {siteInfo.name}. All Rights Reserved. Crafted with love in Delhi NCR.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-brand-rose transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-brand-rose transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

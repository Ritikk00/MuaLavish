import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { siteInfo } from "../data/siteData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: "Party Makeup",
    location: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const eventTypes = [
    "Haldi Makeup",
    "Mehndi Makeup",
    "Party Makeup",
    "HD Makeup",
    "Reception Makeup",
    "Other Makeover"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.date) newErrors.date = "Event date is required";
    if (!formData.location.trim()) newErrors.location = "Event location is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Format WhatsApp message
    const waText = `Hello MUA Lavish! ✨
I would like to book a makeup slot. Here are my booking details:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Event Date:* ${formData.date}
*Event Type:* ${formData.eventType}
*Location:* ${formData.location}
*Message:* ${formData.message || "None"}

Please confirm availability. Thanks!`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber.replace("+", "")}?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-brand-nude/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-rose text-xs uppercase tracking-[0.25em] font-bold">
            Reservation
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">
            Book Your Makeover Session
          </h2>
          <div className="w-16 h-0.5 bg-brand-rose mx-auto"></div>
          <p className="text-brand-gray text-sm md:text-base font-light">
            Fill out the form below to check slot availability. Your submission will immediately redirect to WhatsApp chat for instant confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Left */}
          <div className="lg:col-span-5 bg-brand-charcoal text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold border-b border-white/10 pb-4">
                Contact Information
              </h3>
              
              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-blush flex-shrink-0">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-brand-gray-light font-semibold">Call or Text</h4>
                    <a href={`tel:${siteInfo.phoneNumber}`} className="text-sm md:text-base hover:text-brand-blush transition-colors">
                      {siteInfo.phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-blush flex-shrink-0">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-brand-gray-light font-semibold">Email Us</h4>
                    <a href={`mailto:${siteInfo.email}`} className="text-sm md:text-base hover:text-brand-blush transition-colors">
                      {siteInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-blush flex-shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-brand-gray-light font-semibold">Location Coverage</h4>
                    <p className="text-sm text-brand-gray-light font-light">
                      {siteInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-blush flex-shrink-0">
                    <FaRegClock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-brand-gray-light font-semibold">Working Hours</h4>
                    <p className="text-sm text-brand-gray-light font-light">
                      {siteInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="text-xs text-brand-gray-light leading-relaxed">
                ✨ <strong>Note:</strong> We recommend booking at least <strong>1-2 months in advance</strong> to guarantee availability for your special makeover events.
              </p>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-brand-blush/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Full Name <span className="text-brand-rose">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-brand-nude/10 text-brand-charcoal text-sm outline-none transition-all ${
                      errors.name ? "border-red-400 focus:border-red-400" : "border-brand-blush/40 focus:border-brand-rose focus:bg-white"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Phone Number <span className="text-brand-rose">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit number"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-brand-nude/10 text-brand-charcoal text-sm outline-none transition-all ${
                      errors.phone ? "border-red-400 focus:border-red-400" : "border-brand-blush/40 focus:border-brand-rose focus:bg-white"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold">{errors.phone}</span>}
                </div>

                {/* Date */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="date" className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Event Date <span className="text-brand-rose">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-brand-nude/10 text-brand-charcoal text-sm outline-none transition-all ${
                      errors.date ? "border-red-400 focus:border-red-400" : "border-brand-blush/40 focus:border-brand-rose focus:bg-white"
                    }`}
                  />
                  {errors.date && <span className="text-[10px] text-red-500 font-semibold">{errors.date}</span>}
                </div>

                {/* Event Type */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="eventType" className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Event / Makeover Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-blush/40 bg-brand-nude/10 text-brand-charcoal text-sm outline-none focus:border-brand-rose focus:bg-white transition-all cursor-pointer"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Event Location */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="location" className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                  Event Venue / Location Address <span className="text-brand-rose">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Hotel Leela, Chanakyapuri or Home Address"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-brand-nude/10 text-brand-charcoal text-sm outline-none transition-all ${
                    errors.location ? "border-red-400 focus:border-red-400" : "border-brand-blush/40 focus:border-brand-rose focus:bg-white"
                  }`}
                />
                {errors.location && <span className="text-[10px] text-red-500 font-semibold">{errors.location}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                  Additional Details / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your preferences, outfit colors, or special requirements..."
                  className="w-full px-4 py-3.5 rounded-xl border border-brand-blush/40 bg-brand-nude/10 text-brand-charcoal text-sm outline-none focus:border-brand-rose focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white hover:bg-[#20ba59] py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <FaWhatsapp size={18} />
                Send Booking Inquiry On WhatsApp
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

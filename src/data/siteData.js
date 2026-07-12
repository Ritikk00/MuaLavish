// MUA Lavish - siteData.js
// Freelance Makeup Artist based in Delhi NCR - Lavish Kushwaha

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";

export const siteInfo = {
  name: "MUA Lavish",
  title: "Freelance Makeup Artist in Delhi NCR",
  tagline: "Elegant. Flawless. Professional. Specialized in custom Haldi, Mehndi, Party, HD, and Reception makeup delivered directly at your venue or home.",
  whatsappNumber: "+919310212761",
  phoneNumber: "+919310212761",
  email: "lavishlavish891@gmail.com",
  address: "Delhi NCR (Available for Travel / Doorstep Services)",
  instagram: "@lavish_avrl",
  facebook: "lavish_avrl",
  workingHours: "Mon - Sun: 7:00 AM - 8:00 PM (Booking via Appointment)"
};


export const stats = [
  { label: "Makeup Transformations", value: 200, suffix: "+" },
  { label: "Happy Clients", value: 190, suffix: "+" },
  { label: "Events Booked", value: 50, suffix: "+" },
  { label: "Average Rating", value: 4.8, suffix: "★" }

];

export const services = [
  {
    id: "haldi-makeup",
    title: "Haldi Makeup",
    image: "https://charmacyworld.com/cdn/shop/files/Haldi-Mehendi-Look-banner.jpg?v=1721997866&width=900",
    description: "Fresh, radiant, and dewy makeup designed to look bright and beautiful in yellow ceremonial lights and photography.",
    duration: "1.5 - 2 Hours",
    features: ["Dewy glow base", "Lightweight & sweat-resistant", "Hairstyling included", "Flower accessory setting", "Custom lashes"]
  },
  {
    id: "mehndi-makeup",
    title: "Mehndi Makeup",
    image: "https://i.pinimg.com/736x/03/91/6d/03916d28f27fcf03383e24317b78b77d.jpg",
    description: "Vibrant, creative, and colorful eye look paired with a long-wear base that allows you to sit comfortably during your mehndi application.",
    duration: "2 Hours",
    features: ["Semi-matte or glow finish", "Smudge-proof eye drama", "Elegant hairstyle/braid styling", "Dupatta draping support"]
  },
  {
    id: "engagement-makeup",
    title: "Engagement Makeup",
    image: "https://rhythmwellnessbd.com/wp-content/uploads/2026/01/AIEnhancer_makeup-artist-applying-elegant.png",
    description: "A radiant and refined camera-ready base paired with sophisticated eyes, designed for your special engagement ceremony.",
    duration: "2 Hours",
    features: ["High-definition base", "Premium mink lashes", "Sophisticated custom hair", "Dupatta & jewelry setting"]
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    image: "https://media-api.xogrp.com/images/72929d76-c33d-4685-8980-ce1bc942d1a1~rs_768.h-cr_0.238.1365.1603",
    description: "Clean, elegant, and sophisticated makeup tailored for festival nights, cocktail dinners, family events, or guests.",
    duration: "1.5 Hours",
    features: ["Flawless base", "Lashes included", "Blow-dry or curls", "Saree/Dupatta pinning and pleating"]
  },
  {
    id: "hd-makeup",
    title: "HD Makeup",
    image: "https://wallpaperaccess.com/full/695772.jpg",
    description: "High-definition camera-ready makeover using ultra-fine micro particles that diffuse light for a smooth, poreless, and flawless finish.",
    duration: "2 Hours",
    features: ["Studio-ready base", "Blemish & texture correction", "Long-lasting lock technology", "Professional hairstyling"]
  },
  {
    id: "reception-makeup",
    title: "Reception Makeup",
    image: "https://img.freepik.com/premium-photo/professional-makeup-artist-prepares-bride-special-event_1284935-3122.jpg?w=1480",
    description: "Glamorous and striking look with contoured definition and bold lip options, designed to stand out in indoor reception lighting.",
    duration: "2 - 2.5 Hours",
    features: ["Flawless glow finish", "Advanced eye styling (glitter/smokey)", "Modern open locks or classic bun styling", "Outfit draping support"]
  }
];

export const portfolio = [
  {
    id: 1,
    category: "reception",
    title: "Traditional Reception Elegance",
    image: "/portfolio-1.jpg",
    description: "Stunning red reception saree look featuring flawless HD base and ornate gold jewelry setting."
  },
  {
    id: 2,
    category: "party-makeup",
    title: "Vibrant Festive Glow",
    image: "/portfolio-2.jpg",
    description: "Bright party guest makeover with peach undertones and half-tied curls."
  },
  {
    id: 3,
    category: "party-makeup",
    title: "Bridesmaid & Guest Styling",
    image: "/portfolio-3.jpg",
    description: "Clean party makeup and custom hairstyling for special family occasions."
  },
  {
    id: 4,
    category: "hd-makeup",
    title: "Sapphire Eye Drama",
    image: "/portfolio-4.jpg",
    description: "Luxury high-definition glitter eye look using rich blue and champagne pigments."
  },
  {
    id: 5,
    category: "party-makeup",
    title: "Elegant Occasion Wear",
    image: "/portfolio-5.jpg",
    description: "Refined evening makeup paired with wine-toned traditional outfit and matching drape."
  },
  {
    id: 6,
    category: "party-makeup",
    title: "Sagan Celebration Glow",
    image: "/portfolio-6.jpg",
    description: "Radiant party makeup for family functions, paired with vibrant red traditional wear."
  },
  {
    id: 7,
    category: "reception",
    title: "Smoky Glitter Glam",
    image: "/portfolio-7.jpg",
    description: "Luxurious evening makeup with shimmering eyes, contoured base, and bold lips."
  },
  {
    id: 8,
    category: "party-makeup",
    title: "Polka Dot Saree Glam",
    image: "/portfolio-8.jpg",
    description: "Retro-inspired look featuring defined wing liner, deep berry lips, and classic saree styling."
  },
  {
    id: 9,
    category: "hd-makeup",
    title: "Soft Engagement Look",
    image: "/portfolio-9.jpg",
    description: "Elegant HD base paired with subtle pink lips and traditional diamond jewelry setting."
  },
  {
    id: 10,
    category: "hd-makeup",
    title: "Studio-Ready Satin Finish",
    image: "/portfolio-10.jpg",
    description: "Airbrushed complexion with sculpted cheekbones and luminous contouring."
  },
  {
    id: 11,
    category: "mehndi",
    title: "Rich Jewel-Toned Festive Look",
    image: "/portfolio-11.jpg",
    description: "Smoky emerald eyes and a glossy nude pout for a grand festive evening."
  },
  {
    id: 12,
    category: "reception",
    title: "Opulent Evening Glam",
    image: "/portfolio-12.jpg",
    description: "Sculpted features, bold lashes, and a high-shine finish made for evening brilliance."
  }
];

export const beforeAfter = {
  beforeImage: pic1,
  afterImage: pic2,
  title: "Transformation Glam",
  description: "Witness the power of premium HD makeup that enhances natural features, corrects skin tone, and creates a camera-ready glow while keeping the skin feeling lightweight and comfortable."
};

export const reviews = [
  {
    id: 1,
    name: "Rinky kushwaha",
    location: "Gurgaon",
    image: review1,
    rating: 5,
    service: "party Makeup",
    text: "Lavish did my makeup for my party and I was absolutely thrilled! The makeup was flawless, did not look cakey, and lasted for 12+ hours. She is extremely polite and professional. Highly recommended!"
  },
  {
    id: 2,
    name: "ridhima kushwaha",
    location: "gurgaon ",
    image: review2,
    rating: 5,
    service: "party Makeup",
    text: "Loved my party look. She completely understood the vibe I wanted - subtle, dewy, and elegant. Got so many compliments on my hairstyle as well. Thank you for making my day special!"
  },
  {
    id: 3,
    name: "Sneha Goel",
    location: "Noida, NCR",
    image: review3,
    rating: 5,
    service: "HD Party Makeup",
    text: "The makeup was extremely lightweight and survived all my dancing. Lavish arrived at the venue on time and did her job with absolute professionalism. 5 stars all the way!"
  },
  {
    id: 4,
    name: "Pooja Gupta",
    location: "Dwarka, Delhi",
    image: review4,
    rating: 5,
    service: "Haldi Makeup",
    text: "Booked party makeup for my sister's wedding events. Excellent styling! The saree draping was so neat and comfortable that I could easily move around all night. Will definitely book again."
  }
];

export const whyChooseUs = [
  {
    title: "Premium Products Only",
    description: "We use high-end international brands like MAC, Estée Lauder, NARS, Dior, Huda Beauty, and Charlotte Tilbury to ensure safety and quality.",
    icon: "MdStars"
  },
  {
    title: "Certified Freelancer",
    description: "Led by professional artist Lavish Kushwaha with 2 years of experience in customized party, festive, and event makeovers.",
    icon: "FaUserCheck"
  },
  {
    title: "Travels to Your Venue",
    description: "Sit back and relax. Lavish travels to your home, hotel room, or event venue anywhere in Delhi NCR with a full kit and lighting.",
    icon: "FaHome"
  },
  {
    title: "Hygiene First",
    description: "Strict sanitation protocols: deep cleaned brushes for every client, sanitized makeup kits, disposable applicators, and masks.",
    icon: "MdCleanHands"
  },
  {
    title: "Long Lasting Makeup",
    description: "Specialized sweat-proof, waterproof priming and setting techniques keeping your look intact and fresh for up to 15 hours.",
    icon: "FaRegClock"
  },
  {
    title: "Personalized Beauty Looks",
    description: "No template styles. We study your face shape, skin undertone, and outfit to customize a look that feels uniquely you.",
    icon: "MdFace"
  }
];

export const faqs = [
  {
    question: "Do you travel to home or venue for makeup?",
    answer: "Yes, I am a freelance makeup artist and travel directly to your home, hotel, or event venue anywhere in Delhi NCR (Delhi, Noida, Gurgaon, Ghaziabad, Faridabad) fully equipped with professional lighting and makeup kits."
  },
  {
    question: "How do I secure my booking slot?",
    answer: "You can book directly by filling out the booking form at the bottom of the page, which redirects to my WhatsApp. Once we confirm availability for your date, a small advance payment secures your slot."
  },
  {
    question: "Which makeup brands do you use?",
    answer: "I use exclusively premium international brands to ensure safety, skin compatibility, and long-lasting glow. My kit features MAC, Estée Lauder, Huda Beauty, NARS, Charlotte Tilbury, Fenty Beauty, and Dior."
  },
  {
    question: "Do you offer hairstyling and draping too?",
    answer: "Yes, all my makeup services include hairstyling and dupatta/saree draping support so that you get a complete, finished look for your event."
  },
  {
    question: "Is there an advance booking fee?",
    answer: "Yes, to confirm and lock the slot, a small token advance is required. The remaining balance can be cleared on the day of the event after the service is completed."
  }
];

export const pricingPackages = [
  {
    title: "Engagement Makeup",
    price: "₹4,999",
    description: "Stunning HD base, elegant custom hairstyling, and draping perfect for your engagement ceremony.",
    features: [
      "HD camera-ready makeup base",
      "Premium mink lashes",
      "Sophisticated custom hairstyling",
      "Outfit & jewelry setting support",
      "On-site service in Delhi NCR"
    ],
    cta: "Book Engagement Look",
    popular: true
  }
];

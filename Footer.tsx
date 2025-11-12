import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  const customerSupport = [
    { label: "FAQ", link: "#" },
    { label: "Exchange & Returns", link: "#" },
    { label: "Shipping Information", link: "#" },
    { label: "Contact Us", link: "#" },
    { label: "Track Your Order", link: "#" },
  ];

  const legal = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Service", link: "#" },
    { label: "Artisan Partnership", link: "#" },
    { label: "Sustainability", link: "#" },
  ];

  const quickLinks = [
    { label: "About The Banjara", link: "#" },
    { label: "Our Artisans", link: "#" },
    { label: "State Collections", link: "#" },
    { label: "Gift Cards", link: "#" },
  ];

  return (
    <footer className="bg-[#1a1614] text-[#e8dcc8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 
              className="text-2xl text-[#c9a55f] mb-4 tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              THE BANJARA
            </h3>
            <p 
              className="text-[#e8dcc8]/70 mb-6 leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Celebrating India's handcrafted heritage from Kashmir to Kanyakumari. 
              Each piece tells a story of tradition and artistry.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#c9a55f]" />
                <span 
                  className="text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  New Delhi, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a55f]" />
                <span 
                  className="text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a55f]" />
                <span 
                  className="text-sm"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  hello@thebanjara.com
                </span>
              </div>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h4 
              className="text-lg text-[#c9a55f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Customer Support
            </h4>
            <ul className="space-y-3">
              {customerSupport.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-[#e8dcc8]/70 hover:text-[#c9a55f] transition-colors duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg text-[#c9a55f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-[#e8dcc8]/70 hover:text-[#c9a55f] transition-colors duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 
                className="text-lg text-[#c9a55f] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-[#e8dcc8]/70 hover:text-[#c9a55f] transition-colors duration-300"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 
              className="text-lg text-[#c9a55f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stay Connected
            </h4>
            <p 
              className="text-[#e8dcc8]/70 mb-4 text-sm"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Subscribe to our newsletter for exclusive offers and artisan stories
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#e8dcc8]/10 border-[#c9a55f]/30 text-white placeholder:text-[#e8dcc8]/40"
                style={{ fontFamily: "'Lora', serif" }}
              />
              <Button 
                className="bg-[#c9a55f] hover:bg-[#b8934d] text-white px-6"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Join
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h5 
                className="text-sm text-[#c9a55f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Follow Us
              </h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#c9a55f]/20 flex items-center justify-center hover:bg-[#c9a55f] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#c9a55f] hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#c9a55f]/20 flex items-center justify-center hover:bg-[#c9a55f] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#c9a55f] hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#c9a55f]/20 flex items-center justify-center hover:bg-[#c9a55f] transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-[#c9a55f] hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c9a55f]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-[#e8dcc8]/60 text-sm text-center md:text-left"
              style={{ fontFamily: "'Lora', serif" }}
            >
              © 2025 The Banjara. All rights reserved. Handcrafted with love in India.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#e8dcc8]/60 hover:text-[#c9a55f] text-sm transition-colors duration-300"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-[#e8dcc8]/60 hover:text-[#c9a55f] text-sm transition-colors duration-300"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

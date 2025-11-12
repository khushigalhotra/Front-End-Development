import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Collections", value: "collections" },
    { label: "Artisans", value: "artisans" },
    { label: "Gallery", value: "gallery" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1614]/95 backdrop-blur-sm border-b border-[#c9a55f]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex flex-col items-start"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#c9a55f] tracking-[0.3em] text-sm">THE</span>
            <span className="text-[#f5f1e8] tracking-[0.2em]">BANJARA</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="text-[#e8dcc8] hover:text-[#c9a55f] transition-colors duration-300"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f5f1e8]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-[#e8dcc8] hover:text-[#c9a55f] transition-colors duration-300 py-2"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

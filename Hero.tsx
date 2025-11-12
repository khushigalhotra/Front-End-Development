import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1614]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640292343595-889db1c8262e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc2FuJTIwY3JhZnRpbmd8ZW58MXx8fHwxNzYxNzUxNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Indian artisan crafting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/60 via-[#1a1614]/80 to-[#1a1614]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-[#c9a55f] mb-4 tracking-[0.15em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            THE BANJARA
          </h1>
          <div className="w-32 h-[2px] bg-[#c9a55f] mx-auto mb-6"></div>
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-[#e8dcc8] tracking-wide"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Handcrafted Treasures of India
          </p>
        </div>

        <p 
          className="text-[#f5f1e8]/90 max-w-2xl mx-auto mb-12 text-lg"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Journey through India's rich artisan heritage, from the snow-capped peaks of Kashmir 
          to the vibrant shores of Kanyakumari. Each piece tells a story, each craft carries a memory.
        </p>

        <button 
          className="bg-[#c9a55f] hover:bg-[#b8934d] text-[#1a1614] px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Explore Collections
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#c9a55f]/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#c9a55f]/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

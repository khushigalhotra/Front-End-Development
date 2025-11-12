import { Heart, Users, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const storyPoints = [
  {
    icon: Heart,
    title: "Why We Started",
    description: "Born from a deep love for India's artistic heritage, The Banjara was founded to preserve and celebrate the timeless crafts that define our cultural identity. We believe every handcrafted piece is a labor of love, carrying centuries of tradition.",
  },
  {
    icon: Users,
    title: "Our True Intention",
    description: "We exist to keep people connected to India's art and culture. By supporting local artisans and their communities, we ensure these traditional crafts thrive for generations to come. Every purchase empowers an artisan and their family.",
  },
  {
    icon: MapPin,
    title: "A Memory from Every State",
    description: "Each product in our collection carries the essence of a place you've loved or dreamed of visiting. From the serene valleys of Kashmir to the vibrant temples of Kanyakumari, we bring India's diverse beauty into your home.",
  },
];

export function OurStory() {
  return (
    <section className="py-20 px-6 bg-[#1a1614]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#c9a55f] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Heart Behind The Banjara
          </h2>
          <div className="w-24 h-[2px] bg-[#c9a55f] mx-auto mb-6"></div>
          <p 
            className="text-[#e8dcc8]/80 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            More than a brand, we are storytellers preserving India's soul
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1640292343595-889db1c8262e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc2FuJTIwY3JhZnRpbmd8ZW58MXx8fHwxNzYxNzUxNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614]/60 to-transparent"></div>
          </div>

          <div className="space-y-8">
            {storyPoints.map((point, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#c9a55f]/20 flex items-center justify-center group-hover:bg-[#c9a55f]/30 transition-colors duration-300">
                    <point.icon className="w-6 h-6 text-[#c9a55f]" />
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-2xl text-[#c9a55f] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {point.title}
                  </h3>
                  <p 
                    className="text-[#e8dcc8]/80 leading-relaxed"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="relative py-16 px-8 md:px-16 bg-[#c9a55f]/10 rounded-lg border border-[#c9a55f]/20">
          <div className="absolute top-8 left-8 text-8xl text-[#c9a55f]/20">"</div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p 
              className="text-xl md:text-2xl text-[#e8dcc8] mb-6 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every thread woven, every clay molded, every color painted tells a story of India's 
              timeless heritage. We are the bridge between India's master artisans and the world.
            </p>
            <div className="w-16 h-[1px] bg-[#c9a55f] mx-auto mb-4"></div>
            <p 
              className="text-[#c9a55f] tracking-wider"
              style={{ fontFamily: "'Lora', serif" }}
            >
              The Banjara Team
            </p>
          </div>
          <div className="absolute bottom-8 right-8 text-8xl text-[#c9a55f]/20 rotate-180">"</div>
        </div>
      </div>
    </section>
  );
}

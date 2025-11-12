import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stateCollections = [
  {
    id: 1,
    state: "Kashmir",
    craft: "Pashmina & Carpets",
    description: "Luxurious handwoven shawls and intricately knotted carpets",
    image: "https://images.unsplash.com/photo-1740321073421-dbd7c5f501e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwcGFzaG1pbmElMjBzaGF3bHxlbnwxfHx8fDE3NjE3NTE3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    state: "Rajasthan",
    craft: "Blue Pottery & Textiles",
    description: "Vibrant block prints and glazed pottery with Persian influence",
    image: "https://images.unsplash.com/photo-1760156885430-cd0bd9609ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHBvdHRlcnl8ZW58MXx8fHwxNzYxNzUxNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    state: "West Bengal",
    craft: "Kantha & Terracotta",
    description: "Embroidered quilts and traditional earthenware",
    image: "https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjE3NTE3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    state: "Tamil Nadu",
    craft: "Temple Jewelry & Bronze",
    description: "Sacred ornaments and Chola dynasty bronze sculptures",
    image: "https://images.unsplash.com/photo-1761721133695-e7558dce99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBqZXdlbHJ5JTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYxNzUxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    state: "Gujarat",
    craft: "Bandhani & Mirror Work",
    description: "Tie-dye fabrics and embroidered textiles with mirror embellishments",
    image: "https://images.unsplash.com/photo-1604074867235-6829038ab657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjcmFmdHMlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjE3NTE3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    state: "Bihar",
    craft: "Madhubani Art",
    description: "Colorful folk paintings depicting mythology and nature",
    image: "https://images.unsplash.com/photo-1715625911538-e9d312a5b45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwYWludGluZyUyMGFydHxlbnwxfHx8fDE3NjE3NTE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    state: "Odisha",
    craft: "Pattachitra & Silver Filigree",
    description: "Traditional scroll paintings and delicate silver work",
    image: "https://images.unsplash.com/photo-1640292343595-889db1c8262e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc2FuJTIwY3JhZnRpbmd8ZW58MXx8fHwxNzYxNzUxNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    state: "Assam",
    craft: "Bamboo & Cane Work",
    description: "Sustainable handicrafts from Northeast India",
    image: "https://images.unsplash.com/photo-1699800751646-6e0584f004f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBiYXNrZXQlMjB3ZWF2aW5nfGVufDF8fHx8MTc2MTc1MTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    state: "Karnataka",
    craft: "Mysore Silk & Sandalwood",
    description: "Lustrous silk sarees and carved sandalwood artifacts",
    image: "https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjE3NTE3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function StateCollections() {
  return (
    <section className="py-20 px-6 bg-[#e8dcc8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#1a1614] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Kashmir to Kanyakumari
          </h2>
          <div className="w-24 h-[2px] bg-[#c9a55f] mx-auto mb-6"></div>
          <p 
            className="text-[#1a1614]/70 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Treasures of Every State
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateCollections.map((collection) => (
            <Card 
              key={collection.id}
              className="border-none shadow-lg overflow-hidden group cursor-pointer bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={collection.image}
                    alt={`${collection.state} crafts`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614]/95 via-[#1a1614]/50 to-transparent group-hover:from-[#c9a55f]/90 transition-all duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                    <p 
                      className="text-[#c9a55f] group-hover:text-white text-sm mb-2 tracking-widest uppercase"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {collection.state}
                    </p>
                    <h3 
                      className="text-2xl mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {collection.craft}
                    </h3>
                    <p 
                      className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {collection.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-[#1a1614] hover:bg-[#c9a55f] text-[#f5f1e8] px-10 py-4 rounded-sm transition-all duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}

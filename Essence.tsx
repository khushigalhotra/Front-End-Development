import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const iconicCrafts = [
  {
    id: 1,
    name: "Pashmina Shawls",
    state: "Kashmir",
    description: "Luxuriously soft handwoven shawls from the valleys of Kashmir",
    image: "https://images.unsplash.com/photo-1740321073421-dbd7c5f501e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwcGFzaG1pbmElMjBzaGF3bHxlbnwxfHx8fDE3NjE3NTE3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Traditional Pottery",
    state: "Rajasthan",
    description: "Hand-painted terracotta and blue pottery with intricate designs",
    image: "https://images.unsplash.com/photo-1760156885430-cd0bd9609ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHBvdHRlcnl8ZW58MXx8fHwxNzYxNzUxNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Handloom Textiles",
    state: "West Bengal",
    description: "Exquisite handwoven fabrics with traditional weaving techniques",
    image: "https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjE3NTE3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Temple Jewelry",
    state: "Tamil Nadu",
    description: "Ornate handcrafted jewelry inspired by ancient temple art",
    image: "https://images.unsplash.com/photo-1761721133695-e7558dce99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBqZXdlbHJ5JTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYxNzUxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Madhubani Paintings",
    state: "Bihar",
    description: "Vibrant traditional paintings depicting mythology and nature",
    image: "https://images.unsplash.com/photo-1715625911538-e9d312a5b45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwYWludGluZyUyMGFydHxlbnwxfHx8fDE3NjE3NTE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Bamboo Crafts",
    state: "Assam",
    description: "Sustainable and beautiful handwoven bamboo creations",
    image: "https://images.unsplash.com/photo-1699800751646-6e0584f004f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBiYXNrZXQlMjB3ZWF2aW5nfGVufDF8fHx8MTc2MTc1MTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Essence() {
  return (
    <section className="py-20 px-6 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#1a1614] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Essence of Indian Craftsmanship
          </h2>
          <div className="w-24 h-[2px] bg-[#c9a55f] mx-auto mb-6"></div>
          <p 
            className="text-[#1a1614]/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Discover the finest handcrafted treasures from every corner of India, 
            each piece representing generations of artistic excellence
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {iconicCrafts.map((craft) => (
              <CarouselItem key={craft.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg overflow-hidden group cursor-pointer bg-white">
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <ImageWithFallback
                        src={craft.image}
                        alt={craft.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614]/90 via-[#1a1614]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p 
                          className="text-[#c9a55f] text-sm mb-2 tracking-wider"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          {craft.state}
                        </p>
                        <h3 
                          className="text-2xl mb-2"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {craft.name}
                        </h3>
                        <p 
                          className="text-sm text-white/80"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          {craft.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-12 bg-[#c9a55f] text-white border-none hover:bg-[#b8934d]" />
          <CarouselNext className="right-0 translate-x-12 bg-[#c9a55f] text-white border-none hover:bg-[#b8934d]" />
        </Carousel>
      </div>
    </section>
  );
}

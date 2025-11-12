import { useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Essence } from "./components/Essence";
import { StateCollections } from "./components/StateCollections";
import { OurStory } from "./components/OurStory";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    let targetRef;
    
    switch (section) {
      case "home":
        targetRef = heroRef;
        break;
      case "collections":
        targetRef = collectionsRef;
        break;
      case "about":
      case "artisans":
      case "gallery":
        targetRef = aboutRef;
        break;
      case "contact":
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        return;
      default:
        targetRef = heroRef;
    }

    targetRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Navigation onNavigate={handleNavigate} />
      
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        
        <Essence />
        
        <div ref={collectionsRef}>
          <StateCollections />
        </div>
        
        <div ref={aboutRef}>
          <OurStory />
        </div>
        
        <div ref={loginRef}>
          <Login />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

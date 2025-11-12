import { Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Login() {
  return (
    <section className="py-20 px-6 bg-[#f5f1e8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Left Side - Image */}
          <div className="relative h-full min-h-[600px] hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1604074867235-6829038ab657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjcmFmdHMlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjE3NTE3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indian crafts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1614]/80 to-transparent flex items-center justify-center">
              <div className="text-white text-center px-8">
                <h3 
                  className="text-4xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Join Our Journey
                </h3>
                <p 
                  className="text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Become part of a community celebrating India's artisan heritage
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12">
            <div className="mb-8">
              <h2 
                className="text-4xl text-[#1a1614] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Welcome Back
              </h2>
              <p 
                className="text-[#1a1614]/60"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Sign in to explore our handcrafted collections
              </p>
            </div>

            {/* Special Offer Banner */}
            <div className="mb-8 p-4 bg-[#c9a55f]/10 border border-[#c9a55f]/30 rounded-lg">
              <p 
                className="text-[#c9a55f] text-center"
                style={{ fontFamily: "'Lora', serif" }}
              >
                🎁 Get 10% off on your first purchase!
              </p>
            </div>

            {/* Gmail Login */}
            <Button 
              className="w-full mb-6 py-6 bg-white hover:bg-gray-50 text-[#1a1614] border-2 border-[#1a1614]/20 hover:border-[#c9a55f] transition-colors duration-300"
              style={{ fontFamily: "'Lora', serif" }}
            >
              <Mail className="mr-3 h-5 w-5" />
              Continue with Gmail
            </Button>

            <div className="relative mb-6">
              <Separator className="my-4" />
              <span 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[#1a1614]/60 text-sm"
                style={{ fontFamily: "'Lora', serif" }}
              >
                or sign in with email
              </span>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-6">
              <div>
                <Label 
                  htmlFor="email" 
                  className="text-[#1a1614]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-2 border-[#1a1614]/20 focus:border-[#c9a55f]"
                  style={{ fontFamily: "'Lora', serif" }}
                />
              </div>

              <div>
                <Label 
                  htmlFor="password" 
                  className="text-[#1a1614]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 border-[#1a1614]/20 focus:border-[#c9a55f]"
                  style={{ fontFamily: "'Lora', serif" }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-[#1a1614]/70">
                  <input type="checkbox" className="mr-2" />
                  <span style={{ fontFamily: "'Lora', serif" }}>Remember me</span>
                </label>
                <button 
                  type="button"
                  className="text-[#c9a55f] hover:underline"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Forgot Password?
                </button>
              </div>

              <Button 
                type="submit"
                className="w-full py-6 bg-[#c9a55f] hover:bg-[#b8934d] text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sign In
              </Button>
            </form>

            <p 
              className="mt-6 text-center text-[#1a1614]/60"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Don't have an account?{" "}
              <button className="text-[#c9a55f] hover:underline">
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

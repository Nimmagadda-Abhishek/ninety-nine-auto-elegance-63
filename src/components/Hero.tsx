import { Button } from "./ui/button";
import { ArrowRight, Star, Shield, Award } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroCarImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-4 sm:mb-6 fade-in-up text-xs sm:text-sm">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">India's Trusted Car Spare Parts Platform</span>
            <span className="sm:hidden">Trusted Spare Parts Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-premium mb-4 sm:mb-6 fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
            Authentic Car Spare Parts
            <span className="text-primary block sm:inline"> Delivered Nationwide</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
            At 99cars.in, we're redefining how India buys car spare parts. Quality parts, competitive prices, and reliable service - delivered to every corner of India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 fade-in-up px-4" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="btn-premium w-full sm:w-auto"
              onClick={() => scrollToSection("cars")}
            >
              Browse Spare Parts
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              className="btn-outline-premium w-full sm:w-auto"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto fade-in-up px-4" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center justify-center sm:justify-start space-x-3 p-2">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">Genuine Parts</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Verified Manufacturers</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 p-2">
              <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">Nationwide Delivery</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pan-India Coverage</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 p-2">
              <Star className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">Customer Rated</p>
                <p className="text-xs sm:text-sm text-muted-foreground">4.8/5 Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
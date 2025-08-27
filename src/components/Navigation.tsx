import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Car, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold text-foreground leading-none">
                99cars
              </span>
              <span className="text-xs text-primary font-semibold leading-none">
                .in
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("cars")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Spare Parts
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button className="btn-premium">
              <Phone className="w-4 h-4 mr-2" />
              8125122133
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("cars")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Spare Parts
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 pt-2">
                <Button className="btn-premium w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  8125122133
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Spare Parts", href: "#cars" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Genuine Spare Parts",
    "Custom Conversions", 
    "Model Conversions",
    "Nationwide Delivery",
    "Quality Assurance",
    "Technical Support"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="relative">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></div>
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
            
            <p className="text-muted-foreground text-sm sm:text-base">
              India's trusted platform for authentic car spare parts. Quality parts, competitive prices, and reliable nationwide delivery - building India's most reliable car care ecosystem.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm sm:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground text-sm sm:text-base">8125122133</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground text-sm sm:text-base">99carsdelhi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-xs sm:text-sm">3rd floor, Aruna inn</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Shankarmattam Main Road</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Visakhapatnam 530016</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-muted-foreground text-xs sm:text-sm">
              © 2024 99cars.in. All rights reserved.
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm text-muted-foreground text-center">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
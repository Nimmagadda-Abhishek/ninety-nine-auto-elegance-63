import { Package, Wrench, Settings, Zap, Truck, Shield } from "lucide-react";
import { Button } from "./ui/button";
import sparePartsImage from "@/assets/spare-parts.jpg";
import conversionsImage from "@/assets/conversions.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Genuine Spare Parts",
      description: "Wide range of authentic spare parts covering major car brands and models across India. Sourced only from verified manufacturers and distributors.",
      image: sparePartsImage,
      features: [
        "OEM Genuine Parts",
        "Quality Aftermarket Options", 
        "All Major Car Brands",
        "Verified Manufacturers"
      ]
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Fast and reliable delivery service to customers and workshops across India. We ensure your parts reach you quickly and safely.",
      image: sparePartsImage,
      features: [
        "Pan-India Coverage",
        "Fast Delivery Service",
        "Secure Packaging",
        "Real-time Tracking"
      ]
    },
    {
      icon: Settings,
      title: "Custom Conversions",
      description: "Transform your vehicle with our expert conversion services. From performance upgrades to complete model transformations.",
      image: conversionsImage,
      features: [
        "Performance Upgrades",
        "Interior Customization", 
        "Model Conversions",
        "Professional Installation"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every part comes with quality guarantee. Our customer-first approach ensures smooth transactions and quick resolutions.",
      image: conversionsImage,
      features: [
        "Quality Guarantee",
        "Customer Support",
        "Return Policy",
        "Technical Assistance"
      ]
    }
  ];

  return (
    <section id="services" className="section-premium bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="subheading-premium mb-3 sm:mb-4 fade-in-up">
            Our Premium Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
            Comprehensive automotive solutions focused on spare parts and conversions. Making quality auto parts accessible, affordable, and reliable across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium p-4 sm:p-6 md:p-8 fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs sm:text-sm justify-center sm:justify-start">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="btn-outline-premium w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 fade-in-up px-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3 sm:mb-4">
              Need Help Finding Parts?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Contact our expert team today to find the right spare parts for your vehicle. We're here to provide personalized solutions with competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="btn-premium w-full sm:w-auto">
                Call 8125122133
              </Button>
              <Button className="btn-outline-premium w-full sm:w-auto">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
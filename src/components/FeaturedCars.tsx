import { Button } from "./ui/button";
import { Package, ShoppingCart, Heart, Share2, Star, Wrench, Shield } from "lucide-react";
import sparePartsImage from "@/assets/spare-parts.jpg";

const FeaturedCars = () => {
  const spareParts = [
    {
      id: 1,
      name: "Brake Pads Set",
      brand: "Bosch",
      category: "Braking System",
      price: "₹2,499",
      originalPrice: "₹3,200",
      image: sparePartsImage,
      specs: {
        compatibility: "Multi-Brand",
        warranty: "2 Years",
        type: "OEM"
      },
      features: [
        "Genuine OEM Quality",
        "Long Lasting Performance",
        "Easy Installation",
        "Warranty Included"
      ],
      discount: "22% OFF",
      rating: 4.8
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      brand: "Mann Filter",
      category: "Engine Parts",
      price: "₹899",
      originalPrice: "₹1,150",
      image: sparePartsImage,
      specs: {
        compatibility: "Honda/Toyota",
        warranty: "1 Year",
        type: "OEM"
      },
      features: [
        "High Filtration Efficiency",
        "Genuine Quality",
        "Perfect Fit Guarantee",
        "Quick Delivery"
      ],
      discount: "22% OFF",
      rating: 4.9
    },
    {
      id: 3,
      name: "Headlight Assembly",
      brand: "Osram",
      category: "Lighting",
      price: "₹4,999",
      originalPrice: "₹6,500",
      image: sparePartsImage,
      specs: {
        compatibility: "Maruti Suzuki",
        warranty: "3 Years",
        type: "OEM"
      },
      features: [
        "Crystal Clear Visibility",
        "Weather Resistant",
        "Easy Installation",
        "Long Life LED"
      ],
      discount: "23% OFF",
      rating: 4.7
    }
  ];

  const handleViewDetails = (partId: number) => {
    console.log(`Viewing details for spare part ${partId}`);
  };

  return (
    <section id="cars" className="section-premium">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="subheading-premium mb-3 sm:mb-4 fade-in-up">
            Featured Spare Parts
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
            Discover our premium collection of genuine spare parts. Each part is sourced from verified manufacturers with quality guarantee and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {spareParts.map((part, index) => (
            <div
              key={part.id}
              className="card-premium overflow-hidden group fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Part Image */}
              <div className="relative overflow-hidden">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    {part.discount}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Part Details */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="flex-1 pr-2">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(part.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({part.rating})</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-playfair font-semibold text-foreground mb-1 leading-tight">
                      {part.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{part.brand} • {part.category}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{part.price}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground line-through">{part.originalPrice}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4 p-2 sm:p-3 bg-muted/30 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-1">
                    <Package className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    <span className="text-xs sm:text-sm text-foreground text-center">{part.specs.type}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-1">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    <span className="text-xs sm:text-sm text-foreground text-center">{part.specs.warranty}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-1">
                    <Wrench className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    <span className="text-xs sm:text-sm text-foreground text-center">{part.specs.compatibility}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Key Features</h4>
                  <ul className="space-y-1">
                    {part.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="flex items-center text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {part.features.length > 2 && (
                      <li className="text-xs sm:text-sm text-primary cursor-pointer hover:underline">
                        +{part.features.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button 
                    className="btn-premium flex-1 text-sm"
                    onClick={() => handleViewDetails(part.id)}
                  >
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button className="btn-outline-premium text-sm sm:w-auto">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Parts CTA */}
        <div className="text-center mt-8 sm:mt-12 fade-in-up px-4">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Looking for specific parts? Browse our complete inventory of genuine spare parts for all major brands.
          </p>
          <Button className="btn-outline-premium w-full sm:w-auto">
            View All Spare Parts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
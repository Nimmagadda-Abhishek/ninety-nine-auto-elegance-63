import { Award, Users, Clock, Shield, Star, TrendingUp, Car, Package, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10000+",
      label: "Happy Customers",
      description: "Satisfied customers across India"
    },
    {
      icon: Package,
      number: "50000+",
      label: "Spare Parts",
      description: "Quality parts in stock"
    },
    {
      icon: Car,
      number: "500+",
      label: "Car Models",
      description: "Major brands covered"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Customer Rating",
      description: "Based on verified reviews"
    }
  ];

  const whyChooseUs = [
    {
      icon: Package,
      title: "Wide Range of Spare Parts",
      description: "Covering major car brands and models across India with comprehensive inventory."
    },
    {
      icon: Shield,
      title: "Quality You Can Trust",
      description: "Sourced only from verified manufacturers and distributors for guaranteed authenticity."
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Making spare parts affordable without compromising on quality or service."
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      description: "Our support team ensures smooth transactions and quick resolutions for all queries."
    },
    {
      icon: MapPin,
      title: "Nationwide Reach",
      description: "Delivering parts to customers and workshops across India with reliable logistics."
    }
  ];

  return (
    <section id="about" className="section-premium bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <div className="flex justify-center mb-4 sm:mb-6 fade-in-up">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Car className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-600 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl sm:text-2xl font-bold text-foreground leading-none">
                  99cars
                </span>
                <span className="text-xs sm:text-sm text-primary font-semibold leading-none">
                  .in
                </span>
              </div>
            </div>
          </div>
          <h2 className="subheading-premium mb-3 sm:mb-4 fade-in-up" style={{ animationDelay: "0.1s" }}>
            About 99cars.in
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
            At 99cars.in, we are redefining the way India buys car spare parts. Founded with a clear vision – to make high-quality auto parts accessible, affordable, and reliable – we aim to become the most trusted name in the automobile spare parts industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 px-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1 text-xs sm:text-sm md:text-base">{stat.label}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20 px-4">
          <div className="fade-in-left">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4 sm:mb-6">
              Our Story
            </h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
              <p>
                We understand the challenges car owners and garages face when searching for genuine spare parts. Limited availability, high costs, and unreliable sources often leave customers frustrated. That's where we step in.
              </p>
              <p>
                At 99cars.in, we are not just selling spare parts – we are building India's most reliable car care ecosystem. Whether you are a car owner, mechanic, or garage, we are here to power your journey with trust and convenience.
              </p>
              <p>
                Join us as we drive ahead to revolutionize the auto spare parts industry in India, making quality parts accessible to every corner of the country.
              </p>
            </div>
          </div>
          
          <div className="fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                <h4 className="text-lg sm:text-xl font-playfair font-semibold text-foreground mb-3 sm:mb-4">
                  Our Mission
                </h4>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  To provide authentic, affordable, and easily accessible car spare parts to every corner of India, while delivering a seamless online shopping experience.
                </p>
                
                <h4 className="text-lg sm:text-xl font-playfair font-semibold text-foreground mb-3 sm:mb-4">
                  Our Vision
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  To establish 99cars.in as India's most preferred car spare parts platform and emerge as a strong competitor to Boodmo within just one year.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 sm:mb-16 md:mb-20 px-4">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground text-center mb-8 sm:mb-12 fade-in-up">
            Why Choose Us?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg fade-in-up mx-4">
          <h3 className="text-xl sm:text-2xl font-playfair font-bold text-foreground text-center mb-6 sm:mb-8">
            Get In Touch
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Phone</h4>
              <p className="text-muted-foreground text-sm sm:text-base">8125122133</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Email</h4>
              <p className="text-muted-foreground text-sm sm:text-base">99carsdelhi@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Address</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">3rd floor, Aruna inn, Shankarmattam Main Road, Visakhapatnam 530016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
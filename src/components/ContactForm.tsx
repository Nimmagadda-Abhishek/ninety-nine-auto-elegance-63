import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-premium">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="subheading-premium mb-3 sm:mb-4 fade-in-up">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
            Need help finding the right spare parts for your vehicle? Contact our expert team at 99cars.in for personalized assistance and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="fade-in-left px-4">
            <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-foreground mb-6 sm:mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">8125122133</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">99carsdelhi@gmail.com</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Parts Inquiry & Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Address</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">3rd floor, Aruna inn</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Shankarmattam Main Road</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Visakhapatnam 530016</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Business Hours</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground text-xs">Online Support 24/7</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 sm:mt-8 h-48 sm:h-64 bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm sm:text-base">Interactive Map Coming Soon</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <div className="card-premium p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-foreground mb-4 sm:mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spare-parts">Genuine Spare Parts</SelectItem>
                      <SelectItem value="custom-conversions">Custom Conversions</SelectItem>
                      <SelectItem value="model-conversion">Model Conversion</SelectItem>
                      <SelectItem value="parts-inquiry">Parts Inquiry</SelectItem>
                      <SelectItem value="bulk-order">Bulk Orders</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your vehicle and the parts you need..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="btn-premium w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
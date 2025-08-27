import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedCars from "@/components/FeaturedCars";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedCars />
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
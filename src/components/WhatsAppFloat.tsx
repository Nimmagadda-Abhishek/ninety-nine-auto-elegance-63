import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const phoneNumber = "8125122133";
    const message = "Hello! I'm interested in your car spare parts at 99cars.in. Can you help me find the right parts for my vehicle?";
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppFloat;
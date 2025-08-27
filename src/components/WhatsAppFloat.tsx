const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const phoneNumber = "8125122133";
    const message =
      "Hello! I'm interested in your car spare parts at 99cars.in. Can you help me find the right parts for my vehicle?";
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      />
    </button>
  );
};

export default WhatsAppFloat;

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917204002666?text=Hi%2C%20I%20want%20to%20book%20an%20appointment";

export default function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      className="fixed right-6 bottom-6 md:bottom-6 z-[9999] w-14 h-14 rounded-pill bg-whatsapp text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform max-md:bottom-20"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

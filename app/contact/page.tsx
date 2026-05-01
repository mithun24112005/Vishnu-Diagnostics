import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import BookButton from "../components/BookButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shree Vishnu Scans & Diagnostics at Kattigenahalli, Bangalore. Phone, WhatsApp, address, and Google Maps directions.",
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <h1 className="text-display-lg text-ink mb-12">Find Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-surface border border-hairline rounded-lg p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-body font-medium text-ink mb-1">
                    Address
                  </h3>
                  <p className="text-body-sm text-ink-muted">
                    No 41, Bagalur Cross, Near Brindavana College of
                    Engineering, Next to Kanti Sweets, Shivapura,
                    Kattigenahalli, Bengaluru - 560063
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-surface border border-hairline rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-body font-medium text-ink mb-1">
                    Phone
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+917204002666"
                      className="block text-body-sm text-ink-muted hover:text-orange transition-colors"
                    >
                      7204002666
                    </a>
                    <a
                      href="tel:+917204384666"
                      className="block text-body-sm text-ink-muted hover:text-orange transition-colors"
                    >
                      7204384666
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-surface border border-hairline rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-body font-medium text-ink mb-1">
                    Working Hours
                  </h3>
                  <p className="text-body-sm text-ink-muted">
                    Lab: 7:00 AM – 9:00 PM
                  </p>
                  <p className="text-body-sm text-ink-muted">
                    Scan: 9:00 AM – 9:00 PM
                  </p>
                  <p className="text-caption text-ink-subtle mt-1">
                    Open 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/917204002666?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-button px-[18px] py-[10px] rounded-md bg-whatsapp text-white hover:brightness-110 transition-all"
              >
                WhatsApp Us
              </a>
              <BookButton label="Book Appointment" />
            </div>
          </div>

          {/* Right — Google Maps Embed */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.621928!3d13.121508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa2d70e8cfa3e2a5!2sShree+Vishnu+Diagnostics!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Vishnu Scans & Diagnostics Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

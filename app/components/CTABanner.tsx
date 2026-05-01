import BookButton from "./BookButton";
import { Phone } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to book your diagnostic test?",
  subtext = "Our team will confirm your appointment within 30 minutes.",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="content-container">
        <div className="bg-surface border border-hairline rounded-xxl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage:
                "url(https://shreevishnudiagnostics.com/assets/imgs/real_img_7.jpg)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-headline text-ink">{headline}</h2>
            <p className="text-body-lg text-ink-muted mt-2">{subtext}</p>
          </div>
          <div className="relative z-10 flex items-center gap-4 shrink-0">
            <BookButton label="Book Appointment" />
            <a
              href="tel:+917204002666"
              className="inline-flex items-center gap-2 text-button text-ink hover:text-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              7204002666
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

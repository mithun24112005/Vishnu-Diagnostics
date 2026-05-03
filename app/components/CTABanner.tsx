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
        <div className="relative rounded-xxl overflow-hidden border border-hairline card-shadow">
          {/* Background image at 4% opacity */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "url(https://shreevishnudiagnostics.com/assets/imgs/real_img_7.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.04,
            }}
          />
          {/* White overlay at 96% opacity */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.96)" }}
          />
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-headline text-ink">{headline}</h2>
              <p className="text-body-lg text-ink-muted mt-2">{subtext}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
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
      </div>
    </section>
  );
}

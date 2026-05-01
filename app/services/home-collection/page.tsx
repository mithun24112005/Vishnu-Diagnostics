import type { Metadata } from "next";
import { MapPin, Clock, UserCheck } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import BookButton from "../../components/BookButton";
import CTABanner from "../../components/CTABanner";

export const metadata: Metadata = {
  title: "Home Sample Collection in Bangalore",
  description:
    "Home blood test sample collection service in Kattigenahalli, Yelahanka, and North Bangalore. Trained phlebotomists at your doorstep.",
};

const FEATURES = [
  {
    icon: UserCheck,
    title: "Trained Phlebotomists",
    desc: "Our certified phlebotomists ensure a comfortable, hygienic sample collection experience at your home.",
  },
  {
    icon: Clock,
    title: "Convenient Scheduling",
    desc: "Choose a time slot that works for you. Early morning and evening slots available 7 days a week.",
  },
  {
    icon: MapPin,
    title: "Timely Report Delivery",
    desc: "Digital reports delivered within 6–24 hours via WhatsApp or email after sample processing.",
  },
];

const SERVICE_AREAS = [
  "Kattigenahalli",
  "Yelahanka",
  "Bagalur",
  "Jakkur",
  "Thanisandra",
  "Hebbal",
  "Sahakara Nagar",
  "North Bangalore",
];

export default function HomeCollectionPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Home Collection" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-display-lg text-ink mb-4">
              Home Sample Collection
            </h1>
            <p className="text-body-lg text-ink-muted mb-6">
              Can&apos;t visit the centre? We bring diagnostic testing to your
              doorstep. Book a home visit and our trained phlebotomists will
              collect your samples at a time convenient for you.
            </p>
            <BookButton label="Book Home Collection" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <SectionHeader
            eyebrow="How it works"
            headline="Easy Home Collection"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-canvas border border-hairline-soft rounded-lg p-6 text-center"
              >
                <div className="w-11 h-11 rounded-md bg-surface flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-card-title text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-ink-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-container">
          <SectionHeader
            eyebrow="Service coverage"
            headline="Areas We Cover"
            subtext="We provide home sample collection across North Bangalore and surrounding areas."
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="text-body-sm bg-surface border border-hairline px-4 py-2 rounded-pill"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a home visit?"
        subtext="Book sample collection at your doorstep — quick, hygienic, and convenient."
      />
    </>
  );
}

import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import BookButton from "../../components/BookButton";
import CTABanner from "../../components/CTABanner";

export const metadata: Metadata = {
  title: "Endoscopy in Bangalore",
  description:
    "Endoscopy and Colonoscopy services at Shree Vishnu Diagnostics, Kattigenahalli Bangalore. Experienced gastroenterology team.",
};

const SERVICES = [
  {
    name: "Endoscopy",
    desc: "Upper gastrointestinal endoscopy to examine the esophagus, stomach, and duodenum. Used for diagnosis of ulcers, GERD, and other conditions.",
  },
  {
    name: "Colonoscopy",
    desc: "Examination of the large intestine for polyps, inflammation, tumors, and other abnormalities. Recommended for colorectal screening.",
  },
];

export default function GastroenterologyPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Gastroenterology" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-display-lg text-ink mb-4">
              Gastroenterology
            </h1>
            <p className="text-body-lg text-ink-muted mb-6">
              Diagnostic endoscopy and colonoscopy services performed by
              experienced gastroenterology specialists in a safe, comfortable
              environment.
            </p>
            <BookButton label="Book Appointment" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <SectionHeader
            eyebrow="Gastroenterology tests"
            headline="Our Procedures"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-canvas border border-hairline-soft rounded-lg p-6"
              >
                <h3 className="text-card-title text-ink mb-2">
                  {service.name}
                </h3>
                <p className="text-body-sm text-ink-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a gastroenterology consultation?"
        subtext="Book your endoscopy or colonoscopy appointment today."
      />
    </>
  );
}

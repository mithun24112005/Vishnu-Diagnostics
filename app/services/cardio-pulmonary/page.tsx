import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import BookButton from "../../components/BookButton";
import CTABanner from "../../components/CTABanner";
import FadeIn from "../../components/FadeIn";
import { StaggerChildren, StaggerItem } from "../../components/StaggerChildren";

export const metadata: Metadata = {
  title: "ECG & 2D Echo Test in Bangalore",
  description:
    "12 Lead ECG, 2D Echocardiography, and Pulmonary Function Tests at Shree Vishnu Diagnostics, Kattigenahalli Bangalore.",
};

const SERVICES = [
  {
    name: "12 Lead ECG",
    desc: "Non-invasive electrocardiogram to detect heart rhythm abnormalities, heart attacks, and other cardiac conditions.",
  },
  {
    name: "2D Echocardiography",
    desc: "Ultrasound-based cardiac imaging to assess heart structure, valve function, and blood flow in real time.",
  },
  {
    name: "Pulmonary Function Test (PFT)",
    desc: "Comprehensive lung function assessment to diagnose asthma, COPD, and other respiratory conditions.",
  },
];

export default function CardioPulmonaryPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Cardio-Pulmonary" },
            ]}
          />
          <FadeIn className="max-w-3xl">
            <h1 className="text-display-lg text-ink mb-4">
              Cardio-Pulmonary Diagnostics
            </h1>
            <p className="text-body-lg text-ink-muted mb-6">
              Heart and lung diagnostic services including ECG, 2D Echo, and
              Pulmonary Function Testing for comprehensive cardiac and
              respiratory assessment.
            </p>
            <BookButton label="Book Cardiac Test" />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Cardiac & pulmonary tests"
              headline="Our Tests"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service) => (
              <StaggerItem key={service.name}>
                <div className="bg-canvas border border-hairline-soft rounded-lg p-6">
                  <h3 className="text-card-title text-ink mb-2">
                    {service.name}
                  </h3>
                  <p className="text-body-sm text-ink-muted">{service.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FadeIn>
        <CTABanner
          headline="Need a cardiac test?"
          subtext="Book your ECG, 2D Echo, or PFT test today."
        />
      </FadeIn>
    </>
  );
}

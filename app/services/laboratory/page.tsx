import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import DoctorCard from "../../components/DoctorCard";
import BookButton from "../../components/BookButton";
import CTABanner from "../../components/CTABanner";
import FadeIn from "../../components/FadeIn";
import { StaggerChildren, StaggerItem } from "../../components/StaggerChildren";

export const metadata: Metadata = {
  title: "Blood Test Lab in Bangalore",
  description:
    "Comprehensive blood tests, haematology, biochemistry, and hormonal assays at Shree Vishnu Diagnostics, Kattigenahalli Bangalore.",
};

const BASE_URL = "https://shreevishnudiagnostics.com/assets/imgs";

const SERVICES = [
  {
    name: "Haematology",
    desc: "Complete blood count (CBC), ESR, blood grouping, coagulation studies, and peripheral smear examination.",
  },
  {
    name: "SFNAC / Biopsy",
    desc: "Fine needle aspiration cytology and biopsy services for tissue diagnosis and cancer screening.",
  },
  {
    name: "Biochemistry",
    desc: "Liver function tests (LFT), kidney function tests (KFT), lipid profile, blood sugar, and more.",
  },
  {
    name: "Hormonal Assay",
    desc: "Thyroid panel (T3, T4, TSH), reproductive hormones, cortisol, and other endocrine testing.",
  },
];

export default function LaboratoryPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Laboratory" },
            ]}
          />
          <FadeIn className="max-w-3xl">
            <h1 className="text-display-lg text-ink mb-4">
              Laboratory Services
            </h1>
            <p className="text-body-lg text-ink-muted mb-6">
              Accurate and timely blood tests, pathology, and biochemistry
              services with quality-controlled processes.
            </p>
            <BookButton label="Book Lab Test" />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Lab services"
              headline="Comprehensive Testing"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

      <section className="section-padding">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Our pathologist"
              headline="Expert Lab Oversight"
            />
          </FadeIn>
          <FadeIn className="max-w-sm mx-auto">
            <DoctorCard
              name="Dr. Shruthi H P"
              role="Pathologist"
              image={`${BASE_URL}/doctors/drShruthi.jpg`}
              bio="Pathologist overseeing all laboratory diagnostic services including haematology, biochemistry, and histopathology."
            />
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTABanner
          headline="Need a blood test?"
          subtext="Book your lab test online — reports within 6–24 hours."
        />
      </FadeIn>
    </>
  );
}

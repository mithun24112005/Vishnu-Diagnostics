import type { Metadata } from "next";
import {
  ScanLine,
  FlaskConical,
  Heart,
  Activity,
  Home,
  Baby,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Our Diagnostic Services",
  description:
    "Explore diagnostic services at Shree Vishnu Scans — Radiology, Lab Tests, ECG, 2D Echo, Endoscopy, and Home Collection in Bangalore.",
};

const BASE_URL = "https://shreevishnudiagnostics.com/assets/imgs";

const SERVICES = [
  {
    icon: ScanLine,
    title: "Radiology",
    tests: [
      "Multislice CT Scan (24x7)",
      "Premium 4D Ultrasonography",
      "Doppler Studies",
      "Obstetric Scan (Pregnancy)",
      "Digital X-Ray",
    ],
    ctaLabel: "Book Radiology Test",
    href: "/services/radiology",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    tests: [
      "Haematology (CBC, ESR)",
      "SFNAC / Biopsy",
      "Biochemistry (LFT, KFT, Lipid)",
      "Hormonal Assay (Thyroid, etc.)",
    ],
    ctaLabel: "Book Lab Test",
    href: "/services/laboratory",
  },
  {
    icon: Heart,
    title: "Cardio-Pulmonary",
    tests: [
      "12 Lead ECG",
      "2D Echo",
      "Pulmonary Function Test (PFT)",
    ],
    ctaLabel: "Book Cardio Test",
    href: "/services/cardio-pulmonary",
  },
  {
    icon: Activity,
    title: "Gastroenterology",
    tests: ["Endoscopy", "Colonoscopy"],
    ctaLabel: "Book Appointment",
    href: "/services/gastroenterology",
  },
  {
    icon: Home,
    title: "Home Collection",
    tests: [
      "Convenient Sample Collection at Home",
      "Trained Phlebotomists",
      "Timely Report Delivery",
      "Covers North Bangalore",
    ],
    ctaLabel: "Book Home Visit",
    href: "/services/home-collection",
  },
  {
    icon: Baby,
    title: "Ultrasound / Pregnancy Scans",
    tests: [
      "Obstetric Scan",
      "4D Pregnancy Scan",
      "Anomaly Scan",
      "NT Scan",
    ],
    ctaLabel: "Book Scan",
    href: "/services/radiology",
  },
];

export default function ServicesPage() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <Breadcrumb items={[{ label: "Services" }]} />
        <SectionHeader
          headline="Our Diagnostic Services"
          subtext="Comprehensive imaging, laboratory, and specialist diagnostic services under one roof."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
      <CTABanner />
    </section>
  );
}

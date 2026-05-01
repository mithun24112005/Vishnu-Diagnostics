import type { Metadata } from "next";
import { FlaskConical, Heart, Activity, Home, ScanLine } from "lucide-react";
import BookButton from "../components/BookButton";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your diagnostic test at Shree Vishnu Scans & Diagnostics, Bangalore. Radiology, Lab Tests, ECG, Ultrasound. Quick online booking.",
};

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdZQy26b8F4JG3bKwd4HiWfXUU_d-y6U8B_juk20QprKXHsQA/viewform?usp=dialog";

const BOOKING_SERVICES = [
  {
    icon: ScanLine,
    title: "Radiology",
    tests: [
      "Multislice CT Scan (24x7)",
      "4D Ultrasonography",
      "Doppler Studies",
      "Obstetric Scan",
      "Digital X-Ray",
    ],
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    tests: ["Haematology", "SFNAC / Biopsy", "Biochemistry", "Hormonal Assay"],
  },
  {
    icon: Heart,
    title: "Cardio-Pulmonary",
    tests: ["12 Lead ECG", "2D Echo", "Pulmonary Function Test (PFT)"],
  },
  {
    icon: Activity,
    title: "Gastroenterology",
    tests: ["Endoscopy", "Colonoscopy"],
  },
  {
    icon: Home,
    title: "Home Collection",
    tests: [
      "Convenient Sample Collection",
      "Trained Phlebotomists",
      "Timely Report Delivery",
    ],
  },
];

export default function AppointmentPage() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <SectionHeader
          headline="Book Your Appointment"
          subtext="Choose your service and click Book Now — our team will confirm within 30 minutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BOOKING_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-hairline rounded-lg p-6 flex flex-col"
            >
              <div className="w-11 h-11 rounded-md bg-canvas flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-orange" />
              </div>
              <h3 className="text-card-title text-ink mb-3">{service.title}</h3>
              <ul className="space-y-1.5 mb-6 flex-1">
                {service.tests.map((test, i) => (
                  <li
                    key={i}
                    className="text-body-sm text-ink-muted flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange mt-2 shrink-0" />
                    {test}
                  </li>
                ))}
              </ul>
              <BookButton label="Book Now" className="w-full justify-center" />
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 bg-surface border border-hairline rounded-lg p-6 max-w-2xl mx-auto text-center">
          <p className="text-body text-ink mb-2">Prefer to call?</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <a
              href="tel:+917204002666"
              className="text-body-lg text-orange font-medium hover:underline"
            >
              7204002666
            </a>
            <span className="text-ink-muted">/</span>
            <a
              href="tel:+917204384666"
              className="text-body-lg text-orange font-medium hover:underline"
            >
              7204384666
            </a>
          </div>
          <a
            href="https://wa.me/917204002666?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body text-ink hover:text-orange transition-colors underline-offset-2 hover:underline font-medium"
          >
            WhatsApp us →
          </a>
          <p className="text-body-sm text-ink-muted mt-4">
            After submitting the form, our staff will call to confirm your slot.
          </p>
        </div>
      </div>
    </section>
  );
}

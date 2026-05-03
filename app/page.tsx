import Image from "next/image";
import Link from "next/link";
import {
  ScanLine,
  FlaskConical,
  Heart,
  Activity,
  Home,
  Baby,
  Zap,
  Users,
  FileText,
  HeartHandshake,
} from "lucide-react";
import BookButton from "./components/BookButton";
import SectionHeader from "./components/SectionHeader";
import ServiceCard from "./components/ServiceCard";
import DoctorCard from "./components/DoctorCard";
import TestimonialCard from "./components/TestimonialCard";
import TrustBar from "./components/TrustBar";
import PackageCard from "./components/PackageCard";
import CTABanner from "./components/CTABanner";
import FAQAccordion from "./components/FAQAccordion";
import FadeIn from "./components/FadeIn";
import { StaggerChildren, StaggerItem } from "./components/StaggerChildren";

const BASE_URL = "https://shreevishnudiagnostics.com/assets/imgs";

const SERVICES = [
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
    ctaLabel: "Book Radiology Test",
    href: "/services/radiology",
    iconBg: "rgba(0, 112, 243, 0.10)",
    iconColor: "#0070F3",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    tests: ["Haematology", "SFNAC / Biopsy", "Biochemistry", "Hormonal Assay"],
    ctaLabel: "Book Lab Test",
    href: "/services/laboratory",
    iconBg: "rgba(16, 185, 129, 0.10)",
    iconColor: "#10B981",
  },
  {
    icon: Heart,
    title: "Cardio-Pulmonary",
    tests: ["12 Lead ECG", "2D Echo", "Pulmonary Function Test (PFT)"],
    ctaLabel: "Book Cardio Test",
    href: "/services/cardio-pulmonary",
    iconBg: "rgba(239, 68, 68, 0.10)",
    iconColor: "#EF4444",
  },
  {
    icon: Activity,
    title: "Gastroenterology",
    tests: ["Endoscopy", "Colonoscopy"],
    ctaLabel: "Book Appointment",
    href: "/services/gastroenterology",
    iconBg: "rgba(139, 92, 246, 0.10)",
    iconColor: "#8B5CF6",
  },
  {
    icon: Home,
    title: "Home Collection",
    tests: [
      "Convenient Sample Collection",
      "Trained Phlebotomists",
      "Timely Reports",
    ],
    ctaLabel: "Book Home Visit",
    href: "/services/home-collection",
    iconBg: "rgba(245, 158, 11, 0.10)",
    iconColor: "#F59E0B",
  },
  {
    icon: Baby,
    title: "Ultrasound / Pregnancy Scans",
    tests: ["Obstetric Scan", "4D Pregnancy Scan", "Anomaly Scan"],
    ctaLabel: "Book Scan",
    href: "/services/radiology",
    iconBg: "rgba(236, 72, 153, 0.10)",
    iconColor: "#EC4899",
  },
];

const DOCTORS = [
  {
    name: "Dr. Vinay Kumar K M",
    role: "Consultant Diagnostic & Interventional Radiologist",
    image: `${BASE_URL}/doctors/drVinay.jpg`,
  },
  {
    name: "Dr. Mahantesh S Magadum",
    role: "Consultant Radiologist, Fetal Medicine Specialist",
    image: `${BASE_URL}/doctors/drMahantesh.jpg`,
  },
  {
    name: "Dr. Shruthi H P",
    role: "Pathologist",
    image: `${BASE_URL}/doctors/drShruthi.jpg`,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Excellent service and courteous staff. The check-up was prompt, and Dr. Vinay was very responsive. A wonderful experience!",
    name: "Patient, Bangalore",
  },
  {
    quote:
      "Quick and efficient blood tests and X-ray services. The staff was very helpful and guided me through the process. Highly recommend!",
    name: "Patient, Bangalore",
  },
  {
    quote:
      "Really a great place — support staff and doctors are very caring. Dr Vinay explained everything clearly. Very clean centre with blood checkup, ECG, X-ray and ultrasound scans.",
    name: "Patient, Bangalore",
  },
];

const FAQ_ITEMS = [
  {
    question: "What diagnostic services do you offer?",
    answer:
      "We offer Radiology (CT, MRI, Ultrasound, X-Ray), Laboratory testing, Cardio-Pulmonary diagnostics (ECG, 2D Echo, PFT), Gastroenterology (Endoscopy, Colonoscopy), and Home Sample Collection.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Click 'Book Appointment' on our website to fill a quick Google Form. Our team will call you within 30 minutes to confirm. You can also WhatsApp us or call 7204002666.",
  },
  {
    question: "When will I receive my test results?",
    answer:
      "Most lab reports are ready within 6–24 hours. Radiology and scan reports are typically available the same day. Urgent reports can be expedited on request.",
  },
  {
    question: "Do you offer home sample collection?",
    answer:
      "Yes, we send trained phlebotomists to your home for blood and urine sample collection across Bangalore. Book via our website or WhatsApp.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Lab: 7:00 AM to 9:00 PM. Scans: 9:00 AM to 9:00 PM. We are open 7 days a week including Sundays.",
  },
];

const PACKAGES = [
  {
    name: "Basic Health Check",
    tests: ["CBC", "Urine Routine", "Random Blood Sugar"],
    price: "₹499",
  },
  {
    name: "Full Body Checkup",
    tests: [
      "40+ parameters",
      "CBC, LFT, KFT",
      "Lipid Profile",
      "Thyroid Panel",
      "Urine Routine",
    ],
    price: "₹999",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Cardiac Profile",
    tests: ["ECG", "2D Echo", "Lipid Panel", "BP Check"],
    price: "₹1499",
  },
];

const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Shree Vishnu Scans & Diagnostics",
  description: "Premier diagnostic centre in Bangalore",
  url: "https://shreevishnudiagnostics.com",
  telephone: "+917204002666",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 41, Bagalur Cross, Near Brindavana College",
    addressLocality: "Kattigenahalli, Yelahanka",
    addressRegion: "Karnataka",
    postalCode: "560063",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.121508,
    longitude: 77.621928,
  },
  openingHours: ["Mo-Su 07:00-21:00"],
  medicalSpecialty: [
    "Radiology",
    "Pathology",
    "Cardiology",
    "Gastroenterology",
  ],
  hasMap:
    "https://www.google.com/maps?cid=18027945034474075813",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinicJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="section-padding bg-canvas">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left — Text (60%) */}
            <div className="lg:w-[60%]">
              <FadeIn>
                <p className="text-eyebrow text-ink-muted mb-4">
                  Trusted Diagnostic Centre in Bangalore
                </p>
                <h1 className="text-display-lg text-ink mb-6">
                  Accurate Diagnostics.
                  <br />
                  Trusted Care.
                </h1>
                <p className="text-body-lg text-ink-muted mb-8 max-w-lg">
                  State-of-the-art imaging, laboratory, and cardiac diagnostic
                  services in Kattigenahalli, North Bangalore. Reports within 24
                  hours.
                </p>
              </FadeIn>
              <div className="flex flex-wrap items-center gap-3">
                <BookButton label="Book Appointment" className="btn-pulse" />
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center text-button px-[18px] py-[10px] rounded-md border border-hairline bg-surface text-ink hover:bg-surface-2 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right — Image (40%) */}
            <div className="lg:w-[40%] w-full">
              <div className="relative rounded-xl overflow-hidden" style={{ minHeight: "480px" }}>
                <Image
                  src={`${BASE_URL}/real_img_7.jpg`}
                  alt="Shree Vishnu Scans & Diagnostics Centre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={true}
                />
                {/* Open Today badge — overlaps bottom-left of image */}
                <div
                  className="absolute flex items-center gap-2 bg-surface border border-hairline rounded-md px-3 py-2 w-fit shadow-sm"
                  style={{ bottom: "16px", left: "16px" }}
                >
                  <span className="w-2 h-2 rounded-full bg-status-green animate-pulse" />
                  <span className="text-body-sm text-ink">
                    Open Today: 7 AM – 9 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — TRUST BAR ═══ */}
      <TrustBar />

      {/* ═══ SECTION 3 — OUR SERVICES ═══ */}
      <section className="py-24 max-md:py-12">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="What we offer"
              headline="Comprehensive Diagnostic Services"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ SECTION 4 — WHY CHOOSE US ═══ */}
      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionHeader
                  eyebrow="Why patients trust us"
                  headline="The Shree Vishnu Difference"
                  align="left"
                />
              </FadeIn>
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Zap,
                    title: "Advanced Technology",
                    desc: "State-of-the-art diagnostic equipment for accurate results",
                  },
                  {
                    icon: Users,
                    title: "Expert Specialists",
                    desc: "5 qualified doctors across all departments",
                  },
                  {
                    icon: FileText,
                    title: "Fast Reports",
                    desc: "Digital reports delivered within 24 hours",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Patient-First Care",
                    desc: "Personalized, compassionate diagnostics",
                  },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-canvas border border-hairline-soft rounded-lg p-5 h-full">
                      <item.icon className="w-5 h-5 text-orange mb-3" />
                      <h3 className="text-body font-medium text-ink mb-1">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-ink-muted">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={`${BASE_URL}/real_img_8.jpg`}
                  alt="Advanced diagnostic equipment at Shree Vishnu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — MEET OUR DOCTORS ═══ */}
      <section className="py-24 max-md:py-12">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Our team"
              headline="Experienced Specialists You Can Trust"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCTORS.map((doctor) => (
              <StaggerItem key={doctor.name}>
                <DoctorCard {...doctor} />
              </StaggerItem>
            ))}
          </StaggerChildren>
          <div className="text-center mt-8">
            <Link
              href="/doctors"
              className="text-body text-ink hover:text-orange transition-colors underline-offset-2 hover:underline font-medium"
            >
              Meet All Our Doctors →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — HEALTH PACKAGES ═══ */}
      <section className="py-24 max-md:py-12 bg-canvas">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Health packages"
              headline="Preventive Care Made Affordable"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PACKAGES.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <PackageCard {...pkg} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ SECTION 7 — TESTIMONIALS ═══ */}
      <section className="py-24 max-md:py-12">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="What patients say"
              headline="Trusted by Thousands in Bangalore"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <StaggerItem key={index}>
                <TestimonialCard {...testimonial} />
              </StaggerItem>
            ))}
          </StaggerChildren>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps?cid=18027945034474075813"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-ink hover:text-orange transition-colors underline-offset-2 hover:underline font-medium"
            >
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — GALLERY STRIP ═══ */}
      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Our facility"
              headline="Clean, Modern Infrastructure"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: `${BASE_URL}/real_img_3.jpg`, alt: "Reception area" },
              { src: `${BASE_URL}/real_img_5.jpg`, alt: "Radiology suite" },
              { src: `${BASE_URL}/real_img_10.jpg`, alt: "Clean infrastructure" },
            ].map((img, index) => (
              <StaggerItem key={index}>
                <div className="relative h-[280px] rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="text-body text-ink hover:text-orange transition-colors underline-offset-2 hover:underline font-medium"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — FAQ ACCORDION ═══ */}
      <section className="py-24 max-md:py-12">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionHeader
                  eyebrow="Common questions"
                  headline="Everything You Need to Know"
                  align="left"
                />
              </FadeIn>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sticky top-20">
                <Image
                  src={`${BASE_URL}/real_img_4.jpg`}
                  alt="Consultation room"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10 — CTA BANNER ═══ */}
      <FadeIn>
        <CTABanner />
      </FadeIn>
    </>
  );
}

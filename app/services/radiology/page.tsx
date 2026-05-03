import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import SectionHeader from "../../components/SectionHeader";
import DoctorCard from "../../components/DoctorCard";
import BookButton from "../../components/BookButton";
import CTABanner from "../../components/CTABanner";
import FadeIn from "../../components/FadeIn";
import { StaggerChildren, StaggerItem } from "../../components/StaggerChildren";

export const metadata: Metadata = {
  title: "Radiology & CT Scan Centre in Bangalore",
  description:
    "Get CT Scan, MRI, X-Ray, Ultrasound and Doppler studies at Shree Vishnu Diagnostics, Kattigenahalli Bangalore.",
};

const BASE_URL = "https://shreevishnudiagnostics.com/assets/imgs";

const SERVICES = [
  {
    name: "Multislice CT Scan",
    desc: "High-resolution computed tomography imaging available 24x7 for emergency and routine cases.",
    badge: "Available 24x7",
  },
  {
    name: "Premium 4D Ultrasonography",
    desc: "Advanced 4D ultrasound for detailed imaging of organs, pregnancy, and soft tissue structures.",
  },
  {
    name: "Doppler Studies",
    desc: "Non-invasive vascular imaging to evaluate blood flow in arteries and veins.",
  },
  {
    name: "Obstetric Scan (Pregnancy)",
    desc: "Comprehensive pregnancy scans including anomaly scan, NT scan, and growth monitoring.",
  },
  {
    name: "Digital X-Ray",
    desc: "Fast, high-quality digital X-ray imaging with minimal radiation exposure.",
  },
];

const DOCTORS = [
  {
    name: "Dr. Vinay Kumar K M",
    role: "Consultant Diagnostic & Interventional Radiologist",
    image: `${BASE_URL}/doctors/drVinay.jpg`,
    bio: "Consultant Diagnostic and Interventional Radiologist with expertise in CT, MRI, and Doppler imaging. Patients praise his clear explanations and thorough approach.",
  },
  {
    name: "Dr. Mahantesh S Magadum",
    role: "Consultant Radiologist, Fetal Medicine Specialist",
    image: `${BASE_URL}/doctors/drMahantesh.jpg`,
    bio: "Consultant Radiologist and Fetal Medicine Specialist with advanced training in obstetric and 4D ultrasound imaging.",
  },
];

export default function RadiologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="content-container">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Radiology" },
            ]}
          />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <FadeIn className="lg:w-1/2">
              <h1 className="text-display-lg text-ink mb-4">
                Radiology & Imaging
              </h1>
              <p className="text-body-lg text-ink-muted mb-6">
                Advanced diagnostic imaging with state-of-the-art CT, 4D
                ultrasound, Doppler, and digital X-ray — available 7 days a
                week.
              </p>
              <BookButton label="Book Radiology Test" />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={`${BASE_URL}/real_img_8.jpg`}
                  alt="Radiology equipment at Shree Vishnu Diagnostics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-surface border-y border-hairline">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Our imaging services"
              headline="What We Offer"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service) => (
              <StaggerItem key={service.name}>
                <div className="bg-canvas border border-hairline-soft rounded-lg p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-card-title text-ink">{service.name}</h3>
                    {service.badge && (
                      <span className="text-caption bg-status-red text-white px-2 py-0.5 rounded-pill font-medium shrink-0 ml-2">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-body-sm text-ink-muted">{service.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Doctor Spotlight */}
      <section className="section-padding">
        <div className="content-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Our radiologists"
              headline="Expert Imaging Specialists"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {DOCTORS.map((doctor) => (
              <StaggerItem key={doctor.name}>
                <DoctorCard {...doctor} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FadeIn>
        <CTABanner
          headline="Need a radiology test?"
          subtext="Book your CT Scan, Ultrasound, X-Ray, or Doppler study today."
        />
      </FadeIn>
    </>
  );
}

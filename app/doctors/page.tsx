import type { Metadata } from "next";
import DoctorCard from "../components/DoctorCard";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the experienced radiologists, pathologists, and specialists at Shree Vishnu Scans & Diagnostics, Bangalore.",
};

const BASE_URL = "https://shreevishnudiagnostics.com/assets/imgs";

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
  {
    name: "Dr. Shruthi H P",
    role: "Pathologist",
    image: `${BASE_URL}/doctors/drShruthi.jpg`,
    bio: "Pathologist overseeing all laboratory diagnostic services including haematology, biochemistry, and histopathology.",
  },
  {
    name: "Chetan",
    role: "Lab Incharge",
    image: `${BASE_URL}/doctors/drChetan.jpg`,
    bio: "Lab Incharge ensuring quality control, timely processing, and accuracy of all laboratory results.",
  },
  {
    name: "Naveen Chand B E",
    role: "Centre Head & Managing Director",
    image: `${BASE_URL}/doctors/drNaveen.jpg`,
    bio: "Centre Head and Managing Director, driving Shree Vishnu's mission of accessible, high-quality diagnostics for North Bangalore.",
  },
];

export default function DoctorsPage() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <SectionHeader
          eyebrow="Meet our team"
          headline="Expert Specialists Committed to Your Health"
          subtext="Our team of experienced doctors and technicians ensures accurate diagnostics and compassionate care for every patient."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCTORS.slice(0, 3).map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {DOCTORS.slice(3).map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

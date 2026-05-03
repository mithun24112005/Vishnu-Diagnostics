import type { Metadata } from "next";
import SectionHeader from "../components/SectionHeader";
import GalleryLightbox from "../components/GalleryLightbox";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the state-of-the-art facility and infrastructure at Shree Vishnu Scans & Diagnostics, Bangalore.",
};

const BASE_URL = "https://shreevishnudiagnostics.com/assets/imgs";

const GALLERY_IMAGES = [
  { src: `${BASE_URL}/real_img_3.jpg`, caption: "Reception & Patient Area" },
  { src: `${BASE_URL}/real_img_4.jpg`, caption: "Consultation Room" },
  { src: `${BASE_URL}/real_img_5.jpg`, caption: "Radiology Suite" },
  { src: `${BASE_URL}/real_img_6.jpg`, caption: "Laboratory" },
  { src: `${BASE_URL}/real_img_7.jpg`, caption: "Diagnostic Centre Entrance" },
  { src: `${BASE_URL}/real_img_8.jpg`, caption: "Advanced Imaging Equipment" },
  { src: `${BASE_URL}/real_img_9.jpg`, caption: "Waiting Area" },
  { src: `${BASE_URL}/real_img_10.jpg`, caption: "Clean Infrastructure" },
  { src: `${BASE_URL}/real_img_11.jpg`, caption: "Patient Care Room" },
  { src: `${BASE_URL}/real_img_12.jpg`, caption: "Ultrasound Suite" },
  { src: `${BASE_URL}/real_img_13.jpg`, caption: "Modern Facilities" },
];

export default function GalleryPage() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <FadeIn>
          <SectionHeader
            headline="Our Facility"
            subtext="State-of-the-art infrastructure designed for patient comfort."
          />
          <GalleryLightbox images={GALLERY_IMAGES} />
        </FadeIn>
      </div>
    </section>
  );
}

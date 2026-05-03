"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import BookButton from "./BookButton";
import NavMobile from "./NavMobile";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Radiology", href: "/services/radiology" },
  { label: "Laboratory", href: "/services/laboratory" },
  { label: "Cardio-Pulmonary", href: "/services/cardio-pulmonary" },
  { label: "Gastroenterology", href: "/services/gastroenterology" },
  { label: "Home Collection", href: "/services/home-collection" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-canvas h-14 border-b transition-shadow duration-300 ${scrolled ? "shadow-[var(--shadow-sm)] border-transparent" : "border-hairline-soft"}`}>
      <div className="content-container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="https://shreevishnudiagnostics.com/assets/imgs/header_logo_clean.png"
            alt="Shree Vishnu Scans & Diagnostics"
            width={160}
            height={40}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Right side — phone + CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+917204002666"
            className="hidden lg:flex items-center gap-1.5 text-body-sm text-ink hover:text-orange transition-colors"
          >
            <Phone className="w-4 h-4" />
            7204002666
          </a>
          <div className="hidden md:block">
            <BookButton label="Book Appointment" className="text-[13px] px-3 py-2" />
          </div>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}

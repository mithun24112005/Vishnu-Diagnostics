import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import BookButton from "./BookButton";
import NavMobile from "./NavMobile";

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
  return (
    <header className="sticky top-0 z-50 bg-canvas h-14 border-b border-hairline-soft">
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
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-body-sm text-ink hover:text-orange transition-colors py-4"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-surface border border-hairline rounded-lg shadow-sm py-2 min-w-[200px]">
                      {SERVICE_LINKS.map((sLink) => (
                        <Link
                          key={sLink.href}
                          href={sLink.href}
                          className="block px-4 py-2.5 text-body-sm text-ink hover:text-orange hover:bg-canvas transition-colors"
                        >
                          {sLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm text-ink hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

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

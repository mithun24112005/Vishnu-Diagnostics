"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import BookButton from "./BookButton";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
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

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-ink"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-canvas border-b border-hairline z-50">
          <nav className="content-container py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between py-3 text-body-sm text-ink hover:text-orange transition-colors"
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1 pb-2">
                        {SERVICE_LINKS.map((sLink) => (
                          <Link
                            key={sLink.href}
                            href={sLink.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-body-sm text-ink-muted hover:text-orange transition-colors"
                          >
                            {sLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-body-sm text-ink hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-hairline-soft">
              <BookButton label="Book Appointment" className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

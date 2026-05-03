"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Our Doctors", href: "/doctors", hasDropdown: false },
  { label: "Gallery", href: "/gallery", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

const SERVICE_LINKS = [
  { label: "Radiology", href: "/services/radiology" },
  { label: "Laboratory", href: "/services/laboratory" },
  { label: "Cardio-Pulmonary", href: "/services/cardio-pulmonary" },
  { label: "Gastroenterology", href: "/services/gastroenterology" },
  { label: "Home Collection", href: "/services/home-collection" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAV_LINKS.map((link) => {
        const active = isActive(link.href);

        if (link.hasDropdown) {
          return (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-body-sm transition-colors py-4 border-b-2 ${
                  active
                    ? "text-orange border-orange"
                    : "text-ink hover:text-orange border-transparent"
                }`}
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
            className={`text-body-sm transition-colors py-4 border-b-2 ${
              active
                ? "text-orange border-orange"
                : "text-ink hover:text-orange border-transparent"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

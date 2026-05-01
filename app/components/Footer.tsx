import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";

const SERVICE_LINKS = [
  { label: "Radiology", href: "/services/radiology" },
  { label: "Laboratory", href: "/services/laboratory" },
  { label: "Cardio-Pulmonary", href: "/services/cardio-pulmonary" },
  { label: "Gastroenterology", href: "/services/gastroenterology" },
  { label: "Home Collection", href: "/services/home-collection" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Book Appointment", href: "/appointment" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Logo + Tagline + Hours */}
          <div>
            <Link href="/">
              <Image
                src="https://shreevishnudiagnostics.com/assets/imgs/header_logo_clean.png"
                alt="Shree Vishnu Scans & Diagnostics"
                width={160}
                height={40}
                className="h-9 w-auto mb-4"
              />
            </Link>
            <p className="text-body-sm text-ink-muted mb-4">
              Accurate Diagnostics. Trusted Care.
            </p>
            <div className="flex items-start gap-2 text-body-sm text-ink-muted">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p>Lab: 7:00 AM – 9:00 PM</p>
                <p>Scan: 9:00 AM – 9:00 PM</p>
                <p className="text-caption text-ink-subtle">Mon – Sun</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-eyebrow text-ink mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink-muted hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="text-eyebrow text-ink mb-4">Quick links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink-muted hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-eyebrow text-ink mb-4">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-body-sm text-ink-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p>
                  No 41, Bagalur Cross, Near Brindavana College of Engineering,
                  Next to Kanti Sweets, Shivapura, Kattigenahalli, Bengaluru -
                  560063
                </p>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-ink-muted">
                <Phone className="w-4 h-4 shrink-0" />
                <div>
                  <a
                    href="tel:+917204002666"
                    className="hover:text-orange transition-colors"
                  >
                    7204002666
                  </a>
                  {" / "}
                  <a
                    href="tel:+917204384666"
                    className="hover:text-orange transition-colors"
                  >
                    7204384666
                  </a>
                </div>
              </div>
              <a
                href="https://www.google.com/maps?ll=13.121508,77.621928&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=18027945034474075813"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-body-sm text-orange hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hairline-soft mt-12 pt-6 text-center">
          <p className="text-caption text-ink-subtle">
            © {new Date().getFullYear()} Shree Vishnu Scans & Diagnostics. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

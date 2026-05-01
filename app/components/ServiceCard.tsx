import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import BookButton from "./BookButton";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  tests: string[];
  ctaLabel: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  tests,
  ctaLabel,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-surface border border-hairline rounded-lg p-6 flex flex-col h-full">
      <div className="w-11 h-11 rounded-md bg-canvas flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-orange" />
      </div>
      <h3 className="text-card-title text-ink mb-3">{title}</h3>
      <ul className="space-y-1.5 mb-6 flex-1">
        {tests.map((test, index) => (
          <li key={index} className="text-body-sm text-ink-muted flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-orange mt-2 shrink-0" />
            {test}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 mt-auto">
        <BookButton label={ctaLabel} className="text-[13px] px-3 py-2" />
        <Link
          href={href}
          className="text-body-sm text-ink hover:text-orange transition-colors underline-offset-2 hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}

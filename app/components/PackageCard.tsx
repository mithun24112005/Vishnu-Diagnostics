import BookButton from "./BookButton";

interface PackageCardProps {
  name: string;
  tests: string[];
  price: string;
  featured?: boolean;
  badge?: string;
}

export default function PackageCard({
  name,
  tests,
  price,
  featured = false,
  badge,
}: PackageCardProps) {
  if (featured) {
    return (
      <div className="bg-ink text-white border border-ink rounded-lg p-6 flex flex-col h-full relative shadow-[0_0_0_2px_rgba(255,86,0,0.2),var(--shadow-md)]">
        {badge && (
          <span className="absolute -top-3 left-6 bg-orange text-white text-caption px-3 py-1 rounded-pill font-medium">
            {badge}
          </span>
        )}
        <h3 className="text-card-title text-white mt-2">{name}</h3>
        <ul className="space-y-1.5 mt-4 mb-6 flex-1">
          {tests.map((test, index) => (
            <li
              key={index}
              className="text-body-sm text-white/70 flex items-start gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-orange mt-2 shrink-0" />
              {test}
            </li>
          ))}
        </ul>
        <p className="text-display-md text-white mb-4">{price}</p>
        <BookButton label="Book Now" className="w-full justify-center" />
      </div>
    );
  }

  return (
    <div className="bg-surface border border-hairline rounded-lg p-6 flex flex-col h-full card-shadow">
      <h3 className="text-card-title text-ink">{name}</h3>
      <ul className="space-y-1.5 mt-4 mb-6 flex-1">
        {tests.map((test, index) => (
          <li
            key={index}
            className="text-body-sm text-ink-muted flex items-start gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-orange mt-2 shrink-0" />
            {test}
          </li>
        ))}
      </ul>
      <p className="text-display-md text-ink mb-4">{price}</p>
      <BookButton label="Book Now" className="w-full justify-center" />
    </div>
  );
}

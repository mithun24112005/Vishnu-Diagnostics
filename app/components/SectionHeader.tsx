interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignment} mb-12`}>
      {eyebrow && (
        <p className="text-eyebrow text-ink-muted mb-3">{eyebrow}</p>
      )}
      <h2 className="text-display-md text-ink">{headline}</h2>
      {subtext && (
        <p className="text-body-lg text-ink-muted mt-4 max-w-2xl mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}

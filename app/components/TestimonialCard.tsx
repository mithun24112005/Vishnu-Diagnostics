import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface border border-hairline rounded-lg p-8 flex flex-col h-full">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-orange text-orange"
          />
        ))}
      </div>
      <blockquote className="text-body-lg text-ink flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="text-body-sm text-ink-muted">— {name}</p>
    </div>
  );
}

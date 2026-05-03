import Image from "next/image";
import BookButton from "./BookButton";

interface DoctorCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  showBookButton?: boolean;
}

export default function DoctorCard({
  name,
  role,
  image,
  bio,
  showBookButton = true,
}: DoctorCardProps) {
  return (
    <div className="bg-surface border border-hairline rounded-lg p-6 flex flex-col items-center text-center card-shadow">
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-hairline-soft"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <h3 className="text-card-title text-ink">{name}</h3>
      <p className="text-body-sm text-ink-muted mt-1">{role}</p>
      {bio && (
        <p className="text-body-sm text-ink-muted mt-3 leading-relaxed">
          {bio}
        </p>
      )}
      {showBookButton && (
        <div className="mt-4">
          <BookButton
            label="Book Appointment"
            className="text-[13px] px-3 py-2"
          />
        </div>
      )}
    </div>
  );
}

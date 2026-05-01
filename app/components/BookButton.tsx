import Link from "next/link";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdZQy26b8F4JG3bKwd4HiWfXUU_d-y6U8B_juk20QprKXHsQA/viewform?usp=dialog";

interface BookButtonProps {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function BookButton({
  label = "Book Appointment",
  className = "",
  variant = "primary",
}: BookButtonProps) {
  if (variant === "secondary") {
    return (
      <Link
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center text-button px-[18px] py-[10px] rounded-md border border-hairline bg-surface text-ink hover:bg-surface-2 transition-colors ${className}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center text-button px-[18px] py-[10px] rounded-md bg-orange text-white hover:brightness-110 transition-all ${className}`}
    >
      {label}
    </Link>
  );
}

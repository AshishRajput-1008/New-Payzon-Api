import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface ButtonProps {
  href: string;
  label: string;
  variant?: "primary-dark" | "primary-pill";
  size?: "default" | "large";
  className?: string;
}

export default function Button({
  href,
  label,
  variant = "primary-dark",
  size = "default",
  className = "",
}: ButtonProps) {
  const baseClass =
    variant === "primary-pill"
      ? "btn bg-primary text-dark rounded-pill"
      : "btn bg-primary text-dark btn-rounded";

  const sizeClass = size === "large" ? "" : "";

  return (
    <Link
      href={href}
      className={`${baseClass} ${sizeClass} ${className}`.trim()}
    >
      <span className="btn_label">{label}</span>
      <span className="btn_icon">
        <ArrowIcon size={size === "large" ? 34 : 20} height={size === "large" ? 24 : 16} />
      </span>
    </Link>
  );
}
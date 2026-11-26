import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "outline";
}

export default function Button({
  text,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button button-${variant}`}
    >
      {text}
    </Link>
  );
};
"use client";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button2({ text, href, onClick, className = "" }: ButtonProps) {
  const baseStyles =
  "border px-6 py-2 text-base font-medium text-white bg-primary " +
    "hover:bg-secondary hover:text-custom-background transition tracking-[-0.03em]";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${className}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {text}
    </button>
  );
}

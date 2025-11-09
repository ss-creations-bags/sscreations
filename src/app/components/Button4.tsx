"use client";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, href, onClick, className = "" }: ButtonProps) {
  const baseStyles =
    "border border-white px-8 py-3 text-base font-medium text-white " +
    "hover:bg-secondary-light hover:text-primary transition-colors duration-300 tracking-[-0.03em]";

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

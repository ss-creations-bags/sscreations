"use client";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button3({ text, href, onClick, className = "", disabled = false, type = "button" }: ButtonProps) {
  const baseStyles =
    "bg-primary text-custom-background px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base tracking-wide " +
    "hover:bg-secondary transition-colors " +
    "disabled:bg-primary/40 disabled:cursor-not-allowed";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${className} ${disabled ? 'pointer-events-none opacity-40' : ''}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {text}
    </button>
  );
}
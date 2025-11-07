"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 w-full z-50 bg-custom-background border-b border-accent/30 shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="sr-only">Home</span>
              <span className="cormorant-500 text-4xl text-primary">
                SS Creations
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-base">
              <li>
                <Link 
                  href="/" 
                  className="text-primary font-medium tracking-wide transition hover:text-secondary relative group"
                >
                  Home
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-primary font-medium tracking-wide transition hover:text-secondary relative group"
                >
                  Collections
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/clients" 
                  className="text-primary font-medium tracking-wide transition hover:text-secondary relative group"
                >
                  Clientele
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-primary font-medium tracking-wide transition hover:text-secondary relative group"
                >
                  Our Story
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                {/* <Link 
                  href="/contact" 
                  className="px-6 py-2 bg-primary text-custom-background font-medium tracking-wide transition hover:bg-secondary hover:text-primary rounded-sm"
                >
                  Connect
                </Link> */}
                <Link 
                  href="/contact" 
                  className="text-primary font-medium tracking-wide transition hover:text-secondary relative group"
                >
                  Connect
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary transition hover:text-secondary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 border-t border-accent/30">
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Collections" },
                { href: "/clients", label: "Clientele" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Connect" }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    onClick={handleNavClick}
                    className="block py-2 text-primary tracking-wide hover:text-secondary transition text-base relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

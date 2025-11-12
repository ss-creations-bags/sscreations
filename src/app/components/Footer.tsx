"use client";

import Link from "next/link";
import { useState, useEffect, FormEvent } from "react";

// Define types for the product category
interface ProductCategory {
  name: string;
  id: string;
}

interface ProductLink {
  name: string;
  filterId: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [productLinks, setProductLinks] = useState<ProductLink[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the assets.json file
    fetch('/assets.json')
      .then(response => response.json())
      .then(data => {
        // Map categories to product links
        const links = data.categories.map((category: ProductCategory) => ({
          name: category.name,
          filterId: category.id
        }));
        setProductLinks(links);
      })
      .catch(error => console.error('Error loading product categories:', error));
  }, []);

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "676d2e90-7610-4d90-a192-d63dc62ebf7b", // Replace with your Web3Forms access key
          email: email,
          subject: "New Newsletter Subscription - SS Creations",
          message: `New newsletter subscriber: ${email}`,
          from_name: "SS Creations Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of the component remains the same
  return (
    <footer className="bg-primary text-custom-background">
      {/* Newsletter Section */}
      <div className="border-b border-custom-background/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif tracking-wide mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-custom-background/80">
                Get the latest updates on new products and bulk order offers
              </p>
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-custom-background/10 border border-custom-background/30 text-custom-background placeholder-custom-background/60 focus:outline-none focus:border-secondary-light w-full sm:min-w-[280px]"
                  required
                  disabled={isSubmitting || isSubscribed}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubscribed}
                  className="px-6 py-2 bg-custom-background text-primary font-medium tracking-wide transition hover:bg-[#f5f3ed] hover:text-primary/95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? "Subscribed!" : isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {message && (
                <div className="mt-3 px-4 py-2 rounded-sm border bg-red-900/20 border-red-400/30 text-red-200">
                  <p className="text-sm text-center sm:text-left font-light tracking-wide">
                    {message}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl cormorant-500 text-custom-background">
                SS Creations
              </span>
            </Link>
            <p className="text-sm text-custom-background/80 leading-relaxed">
              Premium bag manufacturers specializing in non-woven, BOPP laminated,
              and custom bags for all your packaging needs.
            </p>
          </div>

          {/* Empty column to push Products and Contact to the right */}
          <div></div>

          {/* Products - Moved to 3rd column */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-4">Our Products</h3>
            <ul className="space-y-3 text-sm">
              {productLinks.map((product) => (
                <li key={product.filterId}>
                  <Link
                    href={`/products?category=${product.filterId}`}
                    className="text-custom-background/80 hover:text-secondary-light transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Moved to 4th column */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-custom-background/80">
                1172, Chatta Madan Gopal,<br />
                Maliwara, Chandni Chowk<br />
                Delhi-110006
              </li>
              <li>
                <a
                  href="tel:+919999503148"
                  className="text-custom-background/80 hover:text-secondary-light transition-colors"
                >
                  +91 9999 503 148
                </a>
              </li>
              <li className="text-custom-background/80">
                Mon - Sat: 9:00 AM - 6:00 PM
              </li>
              <li>
                <Link href="/contact" className="text-custom-background/80 hover:text-secondary-light transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services - Commented out as requested */}
      {/* <div>
        <h3 className="text-sm tracking-widest uppercase mb-4">Services</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <Link href="/contact" className="text-custom-background/80 hover:text-secondary-light transition-colors">
              Custom Printing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-custom-background/80 hover:text-secondary-light transition-colors">
              Bulk Orders
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-custom-background/80 hover:text-secondary-light transition-colors">
              Design Consultation
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-custom-background/80 hover:text-secondary-light transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/clients" className="text-custom-background/80 hover:text-secondary-light transition-colors">
              Our Clients
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-custom-background/80 hover:text-secondary-light transition-colors">
              Request Quote
            </Link>
          </li>
        </ul>
      </div> */}
      {/* Bottom Bar */}
      <div className="border-t border-custom-background/20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-custom-background/70">
              <p>© {currentYear} SS Creations. All Rights Reserved.</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/919999503148"
                className="text-custom-background/70 hover:text-secondary-light transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.indiamart.com/sscreations-chandnichowk-newdelhi/?srsltid=AfmBOoqgSjCxMDgDr9Ynw_gec8Ii9cDJoZkBwKe8tJvV0l4KmYLe1Px-"
                className="transition-colors"
                aria-label="India Mart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/india_mart.svg"
                  alt="India Mart"
                  className="w-6 h-6 opacity-100 hover:opacity-100 transition-all hover:[filter:brightness(1.2)_sepia(1)_saturate(3)_hue-rotate(10deg)]"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/shweta-jain-6674404b"
                className="text-custom-background/70 hover:text-secondary-light transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
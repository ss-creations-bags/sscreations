"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Title() {
  const counters = [
    { label: "Years of Excellence", target: 15, suffix: "+" },
    { label: "Satisfied Clients", target: 500, suffix: "+" },
    { label: "Premium Quality", target: 100, suffix: "%" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-custom-background">
      <div className="mx-auto max-w-8xl px-4 py-8 sm:py-12 lg:py-16">
        {/* SVG Background container with margins + rounded edges */}
        <div className="relative mx-4 sm:mx-8 lg:mx-16 rounded-2xl overflow-hidden">
          {/* Darker background behind SVG */}
          <div className="absolute inset-0 bg-[rgb(var(--custom-background-dark))]" />

          {/* SVG patterned layer */}
          <div
            className="relative w-full bg-cover bg-center bg-repeat py-8 sm:py-12 rounded-3xl"
            style={{
              backgroundImage: `url('/images/royal_background.svg')`,
              backgroundSize: "400px 400px",
            }}
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              {/* Blurred overlay card */}
              <div className="bg-custom-background/80 backdrop-blur-xl rounded-lg px-4 sm:px-6 py-6 sm:py-8 shadow-lg">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-serif text-primary leading-tight text-center">
                  Elegance in Every Stitch,
                  <span className="block mt-2 text-secondary">
                    Excellence in Every Detail
                  </span>
                </h1>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary/80 leading-relaxed text-center">
                  Discover the art of refined craftsmanship. SS Creations brings together
                  premium materials, meticulous attention to detail, and timeless design to
                  create bags that elevate your brand and exceed expectations.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/products"
                    className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-primary text-custom-background tracking-wide transition hover:bg-secondary rounded-sm text-center text-sm sm:text-base"
                  >
                    Explore Our Collection
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-block px-6 sm:px-8 py-2 sm:py-3 border border-primary/30 text-primary tracking-wide transition hover:border-[#EAD151] hover:text-secondary rounded-sm text-center text-sm sm:text-base"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Trust Indicators */}
        <div className="relative mt-8 sm:mt-12 rounded-2xl overflow-hidden mx-4 sm:mx-8 lg:mx-16">
          {/* Subtle darker base background */}
          <div className="absolute inset-0 bg-[rgb(var(--custom-background-dark))]" />

          {/* Optional patterned overlay (matches above) */}
          <div
            className="absolute inset-0 bg-repeat opacity-10"
            style={{
              backgroundImage: `url('/images/royal_background.svg')`,
              backgroundSize: "350px 350px",
            }}
          />

          {/* Slight gradient for depth */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-[rgba(245,243,237,0.9)]" /> */}
          <div className="absolute inset-0 bg-custom-background-dark" />
          {/* Content Layer */}
          <div
            ref={ref}
            className="relative backdrop-blur-md py-10 sm:py-14 text-center"
          >
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8
                 text-lg sm:text-xl font-medium text-primary"
            >
              {counters.map((counter, i) => (
                <CounterItem
                  key={i}
                  label={counter.label}
                  target={counter.target}
                  suffix={counter.suffix}
                  start={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterItem({
  label,
  target,
  suffix,
  start,
}: {
  label: string;
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500; // ms
    const step = target / (duration / 16); // ~60fps

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(interval);
  }, [start, target]);

  return (
    <div>
      <p className="text-2xl sm:text-3xl font-serif text-secondary">
        {count}
        {suffix}
      </p>
      <p className="mt-1 sm:mt-2 text-base sm:text-lg text-primary/80 tracking-wide">
        {label}
      </p>
    </div>
  );
}

"use client";
import Image from "next/image";
import Button from "./Button";
import Button4 from "./Button4";

export default function ClientsPage() {
  const clients = [
    {
      name: "Premium Retail Chains",
      description: "Leading retail brands trust SS Creations for consistent, high-quality packaging solutions."
    },
    {
      name: "E-commerce Businesses",
      description: "From startups to established platforms, we deliver custom bags that enhance unboxing experiences."
    },
    {
      name: "Corporate Enterprises",
      description: "Fortune 500 companies rely on our expertise for branded packaging and bulk orders."
    },
    {
      name: "Fashion & Apparel",
      description: "Luxury brands choose us for premium, customized packaging that reflects their identity."
    },
    {
      name: "Hospitality & Gifting",
      description: "Hotels, resorts, and gift shops partner with us for elegant, durable bag solutions."
    },
    {
      name: "Food & Beverage",
      description: "Restaurants and food brands trust our hygienic, professional-grade packaging."
    }
  ];

  const testimonials = [
    {
      text: "SS Creations transformed our packaging strategy. Their attention to detail and quality is unmatched in the industry.",
      author: "Rajesh Kumar",
      company: "Premium Fashion Retail"
    },
    {
      text: "Reliable, professional, and incredibly responsive. Working with SS Creations has been a pleasure.",
      author: "Priya Singh",
      company: "E-commerce Solutions"
    },
    {
      text: "The customization options and bulk order management are seamless. Highly recommended for any brand.",
      author: "Amit Verma",
      company: "Corporate Gifting"
    }
  ];

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center pt-12 sm:pt-16 pb-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-4">
              Our Clients
            </h2>
            <div className="flex items-center justify-center">
              <span className="text-6xl text-primary font-bold leading-none">✳</span>
            </div>
          </div>

          {/* Image + Text Section */}
          <div className="bg-[#f5f5f5] overflow-hidden flex flex-col md:flex-row items-center justify-center shadow-sm mb-8">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-[500px] lg:h-[600px] relative">
              <Image
                src="/images/client3.png"
                alt="Our valued clients and collaborations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2 px-8 sm:px-12 py-12 flex flex-col items-center text-center justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary cormorant-500 tracking-[-0.02em] mb-6">
                Trusted by Leading Brands
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                We are proud to serve an extensive clientele across India, ranging from retail stores to
                corporate brands. Our clients value our commitment to quality, timely delivery, and custom
                solutions that help elevate their brand presence.
              </p>
              <Button text="Work With Us" href="/contact" />
            </div>
          </div>

          {/* Client Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-6">Who We Serve</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="border border-accent/70 p-6 hover:border-secondary-light transition-all"
                >
                  <h3 className="text-lg text-primary mb-2">
                    {client.name}
                  </h3>
                  <p className="text-sm text-primary/100 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-6">Client Testimonials</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-primary/5 border border-accent/40 p-6"
                >
                  <div className="mb-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-primary/80 leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="border-t border-accent/40 pt-4">
                    <p className="text-sm font-medium text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-primary/60">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary p-8 text-center text-custom-background mb-8">
            <h3 className="text-2xl font-serif mb-2">
              Join Our Growing Client Base
            </h3>
            <p className="text-sm text-custom-background/90 mb-6 max-w-2xl mx-auto">
              Experience premium packaging solutions tailored to your brand's needs.
            </p>
            <Button4 text="Get in Touch" href="/contact"/>
          </div>
        </div>
      </section>
    </>
  );
}
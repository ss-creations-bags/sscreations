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
      <main className="bg-custom-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-serif text-primary mb-2">Our Clients</h1>
            <p className="text-base text-primary/70 max-w-2xl">
              Trusted by leading brands and businesses across India for premium packaging solutions.
            </p>
          </div>

          {/* Client Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-primary mb-6">Who We Serve</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="border border-accent/40 rounded-sm p-6 hover:border-secondary-light transition-all"
                >
                  <h3 className="text-lg text-primary mb-2">
                    {client.name}
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-primary mb-6">Client Testimonials</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-primary/5 border border-accent/40 rounded-sm p-6"
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
          <div className="bg-primary rounded-sm p-8 text-center text-custom-background">
            <h3 className="text-2xl font-serif mb-2">
              Join Our Growing Client Base
            </h3>
            <p className="text-sm text-custom-background/90 mb-6 max-w-2xl mx-auto">
              Experience premium packaging solutions tailored to your brand's needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-custom-background text-primary font-medium tracking-wide transition hover:bg-[#f5f3ed] hover:text-primary/95 rounded-sm whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

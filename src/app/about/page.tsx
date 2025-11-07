export default function AboutPage() {
  const values = [
    {
      title: "Quality",
      description: "Uncompromising standards in every bag we manufacture, using premium materials and precision craftsmanship."
    },
    {
      title: "Reliability",
      description: "Consistent delivery, responsive service, and trustworthy partnerships with our clients across India."
    },
    {
      title: "Innovation",
      description: "Continuously evolving our manufacturing processes and exploring new materials for sustainable solutions."
    },
    {
      title: "Integrity",
      description: "Transparent communication, fair pricing, and ethical business practices in every transaction."
    }
  ];

  const milestones = [
    { year: "2010", achievement: "Founded SS Creations with focus on non-woven bag manufacturing" },
    { year: "2014", achievement: "Expanded to BOPP laminated and custom bag production" },
    { year: "2018", achievement: "Achieved 500+ satisfied clients across retail, e-commerce, and corporate sectors" },
    { year: "2023", achievement: "Introduced eco-friendly jute bag line and advanced customization services" }
  ];

  return (
    <>
      <main className="bg-custom-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-serif text-primary mb-2">About SS Creations</h1>
            <p className="text-base text-primary/70 max-w-2xl">
              Premium bag manufacturing with 15 years of excellence, serving brands across India with precision and integrity.
            </p>
          </div>

          {/* Company Story */}
          <div className="mb-12 pb-12 border-b border-accent/40">
            <h2 className="text-2xl font-serif text-primary mb-4">Our Story</h2>
            <div className="space-y-4 text-sm text-primary/80 leading-relaxed">
              <p>
                SS Creations began with a simple vision: to deliver premium-quality bags that exceed expectations. 
                Founded in 2010 in the heart of Delhi's commercial hub, Chandni Chowk, we've grown from a small 
                manufacturing unit to a trusted partner for leading brands and businesses.
              </p>
              <p>
                Our journey has been defined by our commitment to quality, innovation, and customer satisfaction. 
                We started with non-woven bag manufacturing and have since expanded to include BOPP laminated bags, 
                stitched bags, zip pouches, and fully customized solutions tailored to our clients' unique needs.
              </p>
              <p>
                Today, we proudly serve over 500 clients including retail chains, e-commerce platforms, corporate 
                enterprises, and luxury brands. Each bag that leaves our facility carries our promise of excellence.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12 pb-12 border-b border-accent/40">
            <h2 className="text-2xl font-serif text-primary mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border border-accent/40 rounded-sm p-4 hover:border-secondary-light transition-all"
                >
                  <h3 className="text-lg text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-primary/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-12 pb-12 border-b border-accent/40">
            <h2 className="text-2xl font-serif text-primary mb-6">Our Journey</h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="text-lg font-serif text-secondary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow pt-1 border-l-2 border-accent/40 pl-4">
                    <p className="text-sm text-primary/80">
                      {milestone.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-primary mb-6">Why Choose SS Creations</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="bg-primary/5 border border-accent/40 rounded-sm p-6">
                <h3 className="text-base text-primary mb-2">Expertise & Experience</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  15+ years of manufacturing excellence with deep knowledge of materials, processes, and industry standards.
                </p>
              </div>
              <div className="bg-primary/5 border border-accent/40 rounded-sm p-6">
                <h3 className="text-base text-primary mb-2">Customization Capability</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  From design consultation to bulk production, we customize every aspect to match your brand identity.
                </p>
              </div>
              <div className="bg-primary/5 border border-accent/40 rounded-sm p-6">
                <h3 className="text-base text-primary mb-2">Reliable Partnership</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  Responsive service, on-time delivery, and transparent communication ensure your peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary rounded-sm p-8 text-center text-custom-background">
            <h3 className="text-2xl font-serif mb-2">
              Ready to Elevate Your Packaging?
            </h3>
            <p className="text-sm text-custom-background/90 mb-6">
              Let's discuss how SS Creations can provide premium bags tailored to your brand.
            </p>
            {/* <a
              href="/contact"
              className="inline-block px-8 py-3 bg-secondary-light text-primary tracking-wide hover:bg-secondary transition-colors rounded-sm"
            >
              Start a Conversation
            </a> */}
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-custom-background text-primary font-medium tracking-wide transition hover:bg-[#f5f3ed] hover:text-primary/95 rounded-sm whitespace-nowrap"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

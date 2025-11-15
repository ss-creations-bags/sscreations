"use client";
import Image from "next/image";
import Button from "./Button";
import Button4 from "./Button4";

export default function AboutUs() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center pt-4 pb-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary cormorant-500 tracking-[-0.03em] sm:mb-4 sm:mt-4">
                        Our Story
                    </h2>
                </div>

                {/* Combined Content Section */}
                <div className="bg-[#f5f5f5] overflow-hidden flex flex-col md:flex-row items-stretch shadow-sm mb-8">
                    {/* Left Side - Image */}
                    <div className="w-full md:w-1/2 relative min-h-72 sm:min-h-96 md:min-h-0">
                        <Image
                            src="/images/about.jpg"
                            alt="SS Creations workshop and products"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="w-full md:w-1/2 px-8 sm:px-12 py-3 flex flex-col items-center text-center justify-center order-2 md:order-2">
                        {/* Who We Are */}
                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-primary cormorant-500 tracking-[-0.02em] mb-6">
                                Who We Are
                            </h3>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                                SS Creations, established in 2011, offers a versatile selection of bags,
                                including Non-Woven, BOPP, and Jute bags. Our commitment to quality products
                                and competitive pricing sets us apart in the market.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-primary cormorant-500 tracking-[-0.02em] mb-6">
                                Our Mission
                            </h3>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                                To excel in providing superior bag solutions that cater to businesses
                                and retailers alike.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-primary cormorant-500 tracking-[-0.02em] mb-6">
                                Why Choose Us
                            </h3>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                                We prioritize customer satisfaction and efficiency, ensuring that your
                                packaging needs are met with our diverse product range and exceptional service.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center mt-8">
                            <Button text="Explore Our Products" href="/products" />
                        </div>
                    </div>
                </div>
                <div className="mt-16 bg-primary p-8 text-center text-custom-background mb-8">
                    <h3 className="text-2xl font-serif mb-2">
                        Be A Part Of Our Story
                    </h3>
                    <p className="text-sm text-custom-background/90 mb-6">
                        Let's discuss how SS Creations can provide premium bags tailored to your brand.
                    </p>
                    <Button4 text="Start a Conversation" href="/contact" />
                </div>
            </div>
        </section>
    );
}
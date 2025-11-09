"use client";
import Image from "next/image";
import Button from "./Button";
import Button4 from "./Button4";

export default function AboutUs() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center pt-12 sm:pt-16 pb-8">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-4">
                        Our Story
                    </h2>
                    <div className="flex items-center justify-center">
                        <span className="text-6xl text-primary font-bold leading-none">✳</span>
                    </div>
                </div>

                {/* Combined Content Section */}
                <div className="bg-[#f5f5f5] overflow-hidden flex flex-col md:flex-row items-center justify-center shadow-sm">
                    {/* Left Side - Text Content */}
                    <div className="w-full md:w-1/2 px-8 sm:px-12 py-3 flex flex-col items-center text-center justify-center">
                        {/* Who We Are */}
                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-primary cormorant-500 tracking-[-0.02em] mb-6">
                                Who We Are
                            </h3>
                            <p className="text-base sm:text-lgtext-gray-700 leading-relaxed max-w-2xl">
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
                            <p className="text-base sm:text-lgtext-gray-700 leading-relaxed max-w-2xl">
                                To excel in providing superior bag solutions that cater to businesses
                                and retailers alike.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-primary cormorant-500 tracking-[-0.02em] mb-6">
                                Why Choose Us
                            </h3>
                            <p className="text-base sm:text-lgtext-gray-700 leading-relaxed max-w-2xl">
                                We prioritize customer satisfaction and efficiency, ensuring that your
                                packaging needs are met with our diverse product range and exceptional service.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center mt-8">
                            <Button text="Explore Our Products" href="/products" />
                        </div>
                    </div>

                    {/* Right Side - Single Image */}
                    <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-[500px] lg:h-[600px] relative">
                        <Image
                            src="/images/about.jpg"
                            alt="SS Creations workshop and products"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
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
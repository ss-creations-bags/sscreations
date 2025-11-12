"use client";
import Image from "next/image";
import Button from "./Button";

export default function Title() {
  return (
    <section className="bg-white py-0 sm:py-16">
      <div
        className="mx-auto max-w-7xl bg-custom-background-dark overflow-hidden
                   flex flex-col md:flex-row items-center justify-center
                   shadow-sm"
      >
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 px-8 sm:px-12 py-6 md:py-8 flex flex-col items-center text-center justify-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary cormorant-500 tracking-[-0.03em]"
          >
            Your Reliable <br />
            Bag Supplier
          </h1>

          {/* Optional divider icon */}
          <div className="my-6 flex items-center justify-center">
            <span className="text-4xl sm:text-6xl text-primary font-bold leading-none">✳</span>
          </div>

          {/* Shop Now Button */}
          <div className="flex justify-center mt-4 sm:mt-8">
            <Button text="Shop Now" href="/products" />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 h-96 sm:h-[450px] md:h-[500px] lg:h-[600px] relative">
          <Image
            src="/images/header.jpeg"
            alt="Bags and fabric display"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
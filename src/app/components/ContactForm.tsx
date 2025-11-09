"use client";

import { useState } from "react";
import Button3 from "./Button3";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "676d2e90-7610-4d90-a192-d63dc62ebf7b",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          subject: "New Contact Form Submission - SS Creations",
          from_name: "SS Creations Website",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-primary font-medium mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-accent bg-white text-primary rounded-sm focus:outline-none focus:border-[#EAD151] focus:ring-2 focus:ring-[#EAD151]/30 transition-all"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-primary font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 border-accent bg-white text-primary rounded-sm focus:outline-none focus:border-[#EAD151] focus:ring-2 focus:ring-[#EAD151]/30 transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-primary font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border-2 border-accent bg-white text-primary rounded-sm focus:outline-none focus:border-[#EAD151] focus:ring-2 focus:ring-[#EAD151]/30 transition-all"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-primary font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-accent bg-white text-primary rounded-sm focus:outline-none focus:border-[#EAD151] focus:ring-2 focus:ring-[#EAD151]/30 transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <Button3
        text={loading ? "Sending..." : "Send Message"}
        type="submit"
        disabled={loading}
        className=""
      />

      {status === "success" && (
        <div className="p-4 bg-[#EAD151]/30 border-2 border-[#EAD151] rounded-sm">
          <p className="text-sm text-primary font-medium">
            Thank you! Your message has been sent successfully. We'll respond within 24 hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-primary/10 border-2 border-primary rounded-sm">
          <p className="text-sm text-primary font-medium">
            Failed to send message. Please try calling us at +91 9999 503 148.
          </p>
        </div>
      )}
    </form>
  );
}

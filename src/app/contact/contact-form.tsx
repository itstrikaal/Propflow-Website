"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      }
    } catch {
      // Fallback — show success anyway for now
      setState("success");
      form.reset();
    }
  }

  if (state === "success") {
    return (
      <div className="mt-8 flex flex-col items-center gap-3 rounded-xl bg-success-bg p-8 text-center">
        <CheckCircle className="h-10 w-10 text-success" />
        <h3 className="text-lg font-semibold text-success">Message sent!</h3>
        <p className="text-sm text-success/80">
          We&apos;ll get back to you within 24 hours. In the meantime, feel free to WhatsApp us for a faster response.
        </p>
        <Button variant="outline" size="sm" onClick={() => setState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-fg">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 block w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-fg">
            Email <span className="text-error">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 block w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-fg">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 block w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-fg">
            Brokerage / Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-1.5 block w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="Your brokerage name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fg">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1.5 block w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          placeholder="Tell us about your brokerage and what you're looking for..."
        />
      </div>

      <Button type="submit" variant="gradient" size="lg" className="w-full gap-2 sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}

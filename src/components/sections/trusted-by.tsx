"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const logos = [
  { name: "Mumbai Realtors", gradient: "from-brand-500 to-brand-600" },
  { name: "Delhi Property Hub", gradient: "from-brand-alt-500 to-brand-alt-600" },
  { name: "Bangalore Estates", gradient: "from-emerald-500 to-emerald-600" },
  { name: "Chennai Realty", gradient: "from-violet-500 to-violet-600" },
  { name: "Ahmedabad Group", gradient: "from-amber-500 to-amber-600" },
  { name: "Pune Properties", gradient: "from-rose-500 to-rose-600" },
  { name: "HYD Real Estate", gradient: "from-cyan-500 to-cyan-600" },
  { name: "Kolkata Ventures", gradient: "from-indigo-500 to-indigo-600" },
];

export function TrustedBySection() {
  return (
    <section className="border-b border-border bg-bg py-12" aria-label="Trusted by brokerages">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Trusted by brokerages across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <div
                className={`h-6 w-6 rounded-md bg-gradient-to-br ${logo.gradient} flex items-center justify-center`}
              >
                <span className="text-[10px] font-bold text-white">
                  {logo.name.charAt(0)}
                </span>
              </div>
              <span className="whitespace-nowrap text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

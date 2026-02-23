"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black/50 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Common <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Everything you need to know.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`bg-card border transition-all duration-300 ${
                  isOpen ? "border-primary/50" : "border-border hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left group"
                >
                  <span className="text-xl font-bold tracking-widest uppercase group-hover:text-primary transition-colors pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-8 pb-6 text-base text-white/60 leading-relaxed tracking-wider">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
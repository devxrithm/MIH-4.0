'use client';

import { DOMAINS } from '@/lib/data';
import { Card } from './ui/card';

export function Domains() {
  return (
    <section id="domains" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
          Problem <span className="text-primary">Domains</span>
        </h2>
        <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
          Diverse areas to challenge your potential.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOMAINS.map((domain) => (
          <Card
            key={domain.name}
            className="relative bg-card border-border glow-hover p-8 sm:p-10 flex flex-col items-center text-center group cursor-default"
          >
            <span className="text-5xl sm:text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 transform block">
              {domain.icon}
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-widest uppercase text-white group-hover:text-primary transition-colors">
              {domain.name}
            </h3>
            <div className="w-10 h-0.5 bg-primary/30 mt-4 group-hover:w-24 group-hover:bg-primary transition-all duration-300" />
          </Card>
        ))}
      </div>
    </section>
  );
}

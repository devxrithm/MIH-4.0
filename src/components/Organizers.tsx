'use client';

import Image from 'next/image';
import { ORGANIZERS_DATA } from '@/lib/data';

const OrganizerCard = ({ name, logo, type }: { name: string; logo: string; type: string }) => (
  <div className="group relative bg-zinc-900 p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] w-72 flex flex-col justify-center items-center rounded-lg">
    <div className="relative h-32 flex items-center">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={120}
        className="object-contain transition-transform duration-300 group-hover:scale-110 rounded"
      />
    </div>
    <h3 className="text-xl font-bold tracking-widest uppercase font-headline text-white">{name}</h3>
    <p className="text-primary tracking-widest uppercase text-sm font-medium">{type}</p>
  </div>
);

export function Organizers() {
  return (
    <section id="organizers" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Organizers & Partners
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Powered by industry and academic excellence.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {ORGANIZERS_DATA.map((org) => (
            <OrganizerCard key={org.name} {...org} />
          ))}
        </div>
      </div>
    </section>
  );
}

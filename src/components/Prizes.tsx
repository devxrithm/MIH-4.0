'use client';

import { PRIZES } from '@/lib/data';
import { Card } from './ui/card';
import { Trophy, Star, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Prizes() {
  return (
    <section id="prizes" className="py-16 overflow-hidden flex flex-col justify-center items-center ">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
          Awards & <span className="text-primary">Prizes</span>
        </h2>
        <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
          Win big and build a legacy.
        </p>
      </div>

      <div className="flex justify-center w-full ">
        <div className="w-[80%] md:w-[70%] bg-red-600 border border-primary glow-hover p-8 md:p-12 text-center transition-all duration-300 transform skew-x-[-12deg] hover:scale-105 hover:bg-primary">
          <div className="transform skew-x-[12deg] text-white">
            <h1 className="text-2xl md:text-4xl font-bold flex flex-col justify-center items-center gap-2 md:gap-4">
              PRICE POOL UPTO <span className="text-5xl md:text-8xl font-black">1,00,000 Rs</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { Calendar, MapPin, Clock } from 'lucide-react';
import { HERO_DATA } from '@/lib/data';
import { Button } from './ui/button';
import Counter from './Timelinecounter';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[50rem] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder with fallback color */}
      <div className="absolute inset-0 z-0 bg-black bg-[url('/bg3.jpg')] bg-center bg-cover opacity-12">
        Overlay Gradients
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <h1 className="text-2xl md:text-7xl lg:text-[7rem]  font-black mt-10 tracking-tighter text-shimmer leading-tight uppercase font-headline">
          {HERO_DATA.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 tracking-widest uppercase font-bold">
          {HERO_DATA.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 ">
          <div className="flex items-center gap-3">
            <Calendar className="text-primary w-6 h-6" />
            <span className="text-sm md:text-base font-bold tracking-wider">{HERO_DATA.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary w-6 h-6" />
            <span className="text-sm md:text-base font-bold tracking-wider">{HERO_DATA.venue}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary w-6 h-6" />
            <span className="text-sm md:text-base font-bold tracking-wider">{HERO_DATA.time}</span>
          </div>
        </div>
        <Counter />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-6">
          <Button
            asChild
            size="lg"
            className=" cta-pulse bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase px-12 py-8 text-xl rounded-none transform skew-x-[-12deg]"
          >
            <Link className='transform skew-x-[12deg]' href={'https://unstop.com/hackathons/mind-installers-hackathon-40-iimt-college-of-engineering-iimt-coe-greater-noida-1645128'}>
              Register Now
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-white font-bold tracking-widest uppercase px-12 py-8 text-xl rounded-none transform skew-x-[-12deg] hover:bg-primary/10"
          >
            <a href="#about" className="transform skew-x-[12deg]">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 mt-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center ">
        <span className="text-sm font-bold tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary rounded-full relative">
          <div className="w-1.5 h-1.5 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

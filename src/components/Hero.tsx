'use client';

import { Calendar, MapPin, Clock } from 'lucide-react';
import { HERO_DATA } from '@/lib/data';
import { Button } from './ui/button';
import Counter from './Timelinecounter';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12 lg:py-36 lg:pb-30 sm:py-5">
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-45"
          poster="https://picsum.photos/seed/mih-hero/1920/1080"
          data-ai-hint="cyberpunk tech"
        >
          <source src="/bgvedio.mp4" type="video/mp4" />
        </video>
        {/* <div 
          className="absolute inset-0 bg-[url('/bg3.jpg')] bg-center bg-cover bg-no-repeat opacity-12" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" /> */}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl">
        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black mt-10  text-shimmer uppercase font-headline">
          {HERO_DATA.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 my-3 md:my-5 uppercase font-bold max-w-4xl mx-auto">
          {HERO_DATA.tagline}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <Calendar className="text-primary w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold tracking-wider">{HERO_DATA.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold tracking-wider">{HERO_DATA.venue}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold tracking-wider">{HERO_DATA.time}</span>
          </div>
        </div>
        <Counter />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10 md:mt-12">
          <Button
            asChild
            size="lg"
            className=" cta-pulse bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase px-10 py-7 text-base sm:px-12 sm:py-8 sm:text-lg rounded-none transform skew-x-[-12deg]"
          >
            <Link className='transform skew-x-[12deg]' href={'https://unstop.com/hackathons/mind-installers-hackathon-40-iimt-college-of-engineering-iimt-coe-greater-noida-1645128'}>
              Register Now
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-white font-bold tracking-widest uppercase px-10 py-7 text-base sm:px-12 sm:py-8 sm:text-lg rounded-none transform skew-x-[-12deg] hover:bg-primary/10"
          >
            <a href="#about" className="transform skew-x-[12deg]">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex-col items-center hidden md:flex">
        <span className="text-sm font-bold tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary rounded-full relative">
          <div className="w-1.5 h-1.5 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

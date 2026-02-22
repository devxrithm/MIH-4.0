
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/data';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed -top-5 left-0 right-0 z-50 h-auto transition-all duration-300 px-6 ',
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Link href="/" className="font-headline text-2xl font-bold text-white">
            <Image
              src={'/iimt-logo.png'}
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>
          <span className='ml-5 text-3xl'>X</span>
          <Image
            src={'/mih.png'}
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://unstop.com/hackathons/mind-installers-hackathon-40-iimt-college-of-engineering-iimt-coe-greater-noida-1645128"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 flex flex-col items-center py-8 gap-6 animate-in slide-in-from-top-4 duration-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium tracking-widest uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-white px-10 py-3 rounded-full font-bold tracking-widest uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

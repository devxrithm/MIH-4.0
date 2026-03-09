"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/60 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo Group */}
          <Link href="/" className="flex justify-center items-center gap-0 lg:gap-3">
            {/* <div className="relative w-[110px] h-[48px]"> */}
              <Image
                src="/IIMT-LOGO.png"
                alt="IIMT Logo"
                width={180}
                height={180}
                className="object-contain rounded"
              />
            {/* </div> */}

            <div className="flex items-center gap-1 px-1 lg:px-3">
              <span className="text-white text-4xl font-light tracking-widest">×</span>
            </div>

            {/* <div className="relative w-[100px] h-[40px]"> */}
              <Image
                src="/Mihlogo.jpg"
                alt="MIH Logo"
                width={70}
                height={70}
                className="object-contain rounded-xl"
              />
            {/* </div> */}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs font-semibold tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <Link
              href="https://unstop.com/hackathons/mind-installers-hackathon-40-iimt-college-of-engineering-iimt-coe-greater-noida-1645128"
              className="ml-2 relative inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 rounded-full shadow-md shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.03] active:scale-95"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-8 flex flex-col items-center gap-5">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-200"
              style={{ transitionDelay: `${index * 40}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="w-16 h-px bg-white/10 my-1" />

          <Link
            href="https://unstop.com/hackathons/mind-installers-hackathon-40-iimt-college-of-engineering-iimt-coe-greater-noida-1645128"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-full text-sm font-bold tracking-[0.15em] uppercase shadow-md shadow-primary/30 transition-all duration-200 active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
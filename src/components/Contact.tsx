'use client';

import { CONTACT_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';

export function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "352c954a-0cba-4d26-a53e-80b52904ce3b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const socialIcons = [
    { icon: <Twitter />, href: CONTACT_INFO.socials.twitter },
    { icon: <Instagram />, href: CONTACT_INFO.socials.instagram },
    { icon: <Linkedin />, href: CONTACT_INFO.socials.linkedin },
    // { icon: <MessageSquare />, href: CONTACT_INFO.socials.discord },
  ];

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            We're here to help you innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info Card */}
          <Card className="bg-card border-border p-8 md:p-10 glow-hover flex flex-col gap-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Email Us</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-base md:text-lg font-bold tracking-wide uppercase text-white/80 hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Call Us</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-base md:text-lg font-bold tracking-wide uppercase text-white/80 hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Visit Us</p>
                <p className="text-base font-bold tracking-wide uppercase text-white/80 leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mt-auto">
              <h3 className="text-xl font-black tracking-widest uppercase mb-6 font-headline text-center">Follow Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialIcons.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Form Card */}
          <Card className="bg-primary/5 border border-primary/30 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-8 font-headline">Send a Message</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="transform skew-x-[-12deg] w-full">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-2 border-primary/50 text-white placeholder:text-white/60 px-6 py-3 md:py-4 text-base md:text-lg rounded-none focus:bg-primary/10 focus:border-primary transition-all duration-300 transform skew-x-[12deg]"
                />
              </div>
              <div className="transform skew-x-[-12deg] w-full">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-2 border-primary/50 text-white placeholder:text-white/60 px-6 py-3 md:py-4 text-base md:text-lg rounded-none focus:bg-primary/10 focus:border-primary transition-all duration-300 transform skew-x-[12deg]"
                />
              </div>
              <div className="transform skew-x-[-12deg] w-full">
                <Textarea
                  placeholder="Your Message"
                  className="bg-transparent border-2 border-primary/50 text-white placeholder:text-white/60 px-6 py-3 md:py-4 text-base md:text-lg rounded-none h-32 md:h-36 resize-none focus:bg-primary/10 focus:border-primary transition-all duration-300 transform skew-x-[12deg]"
                />
              </div>
              <Button
                size="lg"
                className="w-full cta-pulse bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase px-10 py-6 md:px-12 md:py-8 text-base md:text-xl rounded-none transform skew-x-[-12deg]"
              >
                <span className="transform skew-x-[12deg]">Send Message</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

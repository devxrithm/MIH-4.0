"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamMembersProps {
  title: string;
  members: TeamMember[];
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative overflow-hidden bg-card border border-white/20 transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
        <div className="aspect-square relative">
            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-lg font-black uppercase text-white font-headline">{member.name}</h3>
            <p className="text-primary font-bold tracking-widest uppercase text-sm">{member.role}</p>
        </div>
    </div>
);

export function TeamCarousel({ title, members }: TeamMembersProps) {
  return (
    <section id="team" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            {title}
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Meet the visionaries behind the scenes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

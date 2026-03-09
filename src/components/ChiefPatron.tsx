import Image from 'next/image';
import React from 'react';

// Data for patrons and organizers
const leadership = [
    {
        category: 'Chief Patron',
        members: [
            { name: 'Dr. Mayank Aggarwal', role: 'Managing Director' },
        ],
    },
    {
        category: 'Patrons',
        members: [
            { name: 'Prof.(Dr) Harshit Sinha', role: 'Dy. Director General (Academics)' },
            { name: 'Prof.(Dr) Chetan Khemraj', role: 'Director (College Of Engineering)' },
        ],
    },
    {
        category: 'Convenor',
        members: [
            { name: 'Prof(Dr) Seema Nayak', role: 'Dean IQAC, IIMT College of Engineering' },
        ],
    },
    {
        category: 'Co-ordinator',
        members: [
            { name: 'Dr. Amit Shukla', role: 'HOD CSE' },
            { name: 'Dr. Laveena Sehgal', role: 'Associate Professor' },
            { name: 'Mr. Pragya Deep', role: 'Assistant Professor' },
            
        ],
    },
];

const supportingOrgs = [
    { src: '/Ieee.jpg', alt: 'CSI Logo' },
{ src: '/Csi_logo_india.webp', alt: 'CSI Logo' },
    { src: '/ashare.webp', alt: 'ASHARE Logo' },
    { src: '/iste.webp', alt: 'ISTE Logo' },
    { src: '/ishare.webp', alt: 'ISHARE Logo' },
    { src: '/ieee.webp', alt: 'IEEE Logo' },
];

const PatronCard = ({ name, role }: { name: string, role: string }) => (
    <div className="w-full bg-card/50 border border-primary/30 glow-hover p-6 text-center transition-all duration-300 transform skew-x-[-12deg] hover:bg-primary/20">
        <div className="transform skew-x-[12deg]">
            <h3 className="text-2xl font-bold tracking-wider uppercase font-headline text-primary">{name}</h3>
            <p className="text-white/70 tracking-widest uppercase text-lg">{role}</p>
        </div>
    </div>
);

const ChiefPatron = () => {
    return (
        <section id="leadership" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {leadership.map((group) => (
                    <div key={group.category} className="text-center mb-16 ">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase font-headline section-underline">
                            {group.category}
                        </h2>
                        <div className={`grid grid-cols-1 bg-zinc-950 ${group.members.length > 2 ? 'md:grid-cols-3' : (group.members.length > 1 ? 'md:grid-cols-2' : 'max-w-lg mx-auto')} gap-5`}>
                            {group.members.map((patron, index) => (
                                <PatronCard key={index} name={patron.name} role={patron.role} />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center mt-24 ">
                    <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase font-headline section-underline">
                        Supported By
                    </h2>
                    <div className="bg-zinc-950 border border-primary/30 p-8">
                        <div className="flex justify-center items-center flex-wrap gap-x-16 gap-y-8">
                            {supportingOrgs.map((org, index) => (
                                <Image
                                    key={index}
                                    src={org.src}
                                    height={120}
                                    width={120}
                                    alt={org.alt}
                                    className="object-contain transition-transform duration-300 hover:scale-110 filter grayscale hover:grayscale-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChiefPatron;
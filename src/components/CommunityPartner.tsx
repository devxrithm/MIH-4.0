
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
            { name: 'Prof.(Dr) Harshit Sinha', role: 'Director General (Academics)' },
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
        ],
    },
];

const supportingOrgs = [
    { src: 'https://gdgnoida.com/assets/noida_long_logo0.svg', alt: 'CSI Logo' },
];
const supportingOrgs2 = [
    { src: '/gdg.jpg', alt: 'gdg Logo' },
    { src: '/hwi.jpeg', alt: 'hwi Logo' },
    { src: '/s4n.png', alt: 'startup4nation logo' },
];

const PatronCard = ({ name, role }: { name: string, role: string }) => (
    <div className="w-full bg-card/50 border border-primary/30 glow-hover p-6 text-center transition-all duration-300 transform skew-x-[-12deg] hover:bg-primary/20">
        <div className="transform skew-x-[12deg]">
            <h3 className="text-3xl font-bold tracking-wider uppercase font-headline text-primary">{name}</h3>
            <p className="text-white/70 tracking-widest uppercase text-lg">{role}</p>
        </div>
    </div>
);

const ChiefPatron = () => {
    return (
        <section id="leadership" className="px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mt-24 flex justify-center w-full flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase font-headline section-underline">
                        Organizing <span className="text-red-500">Communities</span>
                    </h2>
                    <div className="z-50 rounded-2xl bg-zinc-800 border border-primary/30 p-8 flex justify-center ">
                        <div className="flex justify-center items-center gap-x-16 gap-y-8 p-2">
                            {supportingOrgs2.map((org, index) => (
                                <Image
                                    key={index}
                                    src={org.src}
                                    height={150}
                                    width={150}
                                    alt={org.alt}
                                    className="rounded-xl object-contain transition-transform duration-300 hover:scale-110 filter grayscale hover:grayscale-0"
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

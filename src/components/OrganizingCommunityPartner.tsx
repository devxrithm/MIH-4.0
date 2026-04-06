
import Image from 'next/image';
import React from 'react';

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

const OrganizingCommunityPartner = () => {
    return (
        <section id="leadership" className="px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mt-24 flex justify-center w-full flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase font-headline section-underline">
                        Organizing <span className="text-red-500">Communities</span>
                    </h2>
                    <div className="rounded-2xl bg-zinc-900 border border-primary/30 p-5 lg:p-8 flex  justify-center w-72 lg:w-auto z-10">
                        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 p-2">
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

export default OrganizingCommunityPartner;

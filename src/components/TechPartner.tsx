import React from 'react'
import { ORGANIZERS2 } from '@/lib/data';
import { Card } from './ui/card';
import Image from 'next/image';

const TechPartner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-06">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Tech Partner
                    </h2>
                    <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
                        Powered by industry and academic excellence.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-5">
                <Card
                    key={ORGANIZERS2.name}
                    className="w-72 bg-card border-border backdrop-blur-md glow-hover p-8 flex flex-col items-center justify-center transition-all group"
                >
                    <div className="relative w-02 h-02 mb-6  group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-000">
                        <Image
                            src={ORGANIZERS2.logo}
                            alt={ORGANIZERS2.name}
                            className="object-contain"
                            width={500}
                            height={500}
                        />
                    </div>
                    <h1 className="text-xl text-center font-bold tracking-widest uppercase text-white/80 group-hover:text-white group-hover:text-primary transition-colors">
                        {ORGANIZERS2.name}
                    </h1>
                </Card>
            </div>
        </div>
    )
}

export default TechPartner
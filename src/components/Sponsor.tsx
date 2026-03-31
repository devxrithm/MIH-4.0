import Image from 'next/image';
import React from 'react';

const sponsors = [
    {
        name: "G30",
        src: "/g30.png",
        height: 270,
        width: 270,
        className: "bg-white p-5 rounded",
        containerClassName: "mt-24 lg:mt-36"
    },
    {
        name: "Neo4j",
        src: "/neo4j.png",
        height: 180,
        width: 180,
        className: "bg-white p-2 rounded",
        containerClassName: "mt-24 lg:mt-36"
    },
    {
        name: "Duality",
        src: "/duality.png",
        height: 180,
        width: 180,
        className: "bg-white rounded",
        containerClassName: "mt-24 lg:mt-36"
    },
    {
        name: "PW",
        src: "/pw.jpg",
        height: 250,
        width: 250,
        className: "bg-white rounded",
        containerClassName: "mt-24 lg:mt-36"
    },
    {
        name: "Code Crafter",
        src: "/codecrafter.png",
        height: 300,
        width: 300,
        className: "bg-white rounded",
        containerClassName: "mt-24 lg:mt-36"
    }
];


const Sponsor = () => {
    return (
        <section id="leadership" className="px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mt-24 flex justify-center w-full flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-headline section-underline">
                        Sponsor <span className="text-red-500"></span>
                    </h2>
                    <div className="flex flex-wrap justify-center items-center pb-10 lg:pb-28">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor.name} className="p-2 flex justify-center z-10">
                                <div className="relative w-[300px] sm:w-[400px] h-[180px] lg:h-[200px]">
                                    <Image
                                        src="/banner.png"
                                        alt="logo-background"
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'contain' }}
                                    />
                                    <div className={`absolute inset-10 flex justify-center items-center ${sponsor.containerClassName}`}>
                                        <Image
                                            src={sponsor.src}
                                            height={sponsor.height}
                                            width={sponsor.width}
                                            alt={sponsor.name}
                                            className={sponsor.className}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
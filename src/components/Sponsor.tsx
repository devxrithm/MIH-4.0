import Image from 'next/image';
import React from 'react';

// const sponsors = [
//     {
//         name: "G30",
//         src: "/g30.png",
//         height: 270,
//         width: 270,
//         className: "bg-white p-5 rounded",
//         containerClassName: "mt-24 lg:mt-36"
//     },
//     {
//         name: "Neo4j",
//         src: "/neo4j.png",
//         height: 180,
//         width: 180,
//         className: "bg-white p-2 rounded",
//         containerClassName: "mt-24 lg:mt-36"
//     },
//     {
//         name: "Duality",
//         src: "/duality.png",
//         height: 180,
//         width: 180,
//         className: "bg-white rounded",
//         containerClassName: "mt-24 lg:mt-36"
//     },
//     {
//         name: "PW",
//         src: "/pw.jpg",
//         height: 250,
//         width: 250,
//         className: "bg-white rounded",
//         containerClassName: "mt-24 lg:mt-36"
//     },
//     {
//         name: "Code Crafter",
//         src: "/codecrafter.png",
//         height: 300,
//         width: 300,
//         className: "bg-white rounded",
//         containerClassName: "mt-24 lg:mt-36"
//     }
// ];


const Sponsor = () => {
    return (
        <section id="leadership" className="px-6">
            <div className="">
                <div className="text-center mt-24 flex justify-center w-full flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-headline section-underline">
                        Sponsor <span className="text-red-500"></span>
                    </h2>
                    <div className="w-full z-10 flex flex-wrap justify-center items-center gap-16 mt-10">
                        <div className="">
                            <Image
                                src={'/duality.png'}
                                height={500}
                                width={500}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/CollegeDunia.png'}
                                height={500}
                                width={500}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/interview.png'}
                                height={500}
                                width={500}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/neo.png'}
                                height={500}
                                width={500}
                                alt={"logo"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
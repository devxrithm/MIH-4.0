"use client"

import Image from "next/image";

export const Banner = () => {
    return (
        <section className="relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-center">
                    <Image
                        src={"/banner.webp"}
                        width={1100}
                        height={600}
                        alt="banner"
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
};
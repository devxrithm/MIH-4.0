"use client"

import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";

export const QrCode = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data: "https://unstop.com/hackathons/mind-installers-hackathon-40-iimt-college-of-engineering-iimt-coe-greater-noida-1645128",
            image: "/mih.jpeg", // Corrected image path to an existing image
            dotsOptions: {
                color: "#fa4f3c",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#000000",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 5
            }
        });

        // Clear the container before appending to avoid duplicates on fast refresh
        ref.current.innerHTML = "";
        qrCode.append(ref.current);

    }, []); // The empty dependency array ensures this runs only once on mount.

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Scan to Register
                    </h2>
                    <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
                        Register for the Hackathon
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div ref={ref} />
                    </div>
                </div>
            </div>
        </section>
    );
};
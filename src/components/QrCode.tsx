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
        <div className="flex justify-center items-center w-full">
            <div ref={ref} />
        </div>
    );
};

"use client";
import Image from "next/image";
import { useState, useCallback } from "react";

const images = [
    "/bg.jpg",
    "/bg2.jpg",
    "/bg3.jpg",
    "/drone.png",
    "/shekhar.png",
];

export const Gallery = () => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [lightbox, setLightbox] = useState<string | null>(null);
    const [fading, setFading] = useState(false);

    const handleThumbnailClick = useCallback(
        (image: string) => {
            if (image === mainImage) return;
            setFading(true);
            setTimeout(() => {
                setMainImage(image);
                setFading(false);
            }, 200);
        },
        [mainImage]
    );

    return (
        <>
            {/* Section */}
            <section className="relative bg-[#0a0a0a] p-10 mt-10 rounded-2xl overflow-hidden mx-5">
                {/* Subtle radial glows */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_30%,rgba(184,148,60,0.07)_0%,transparent_70%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_70%,rgba(184,148,60,0.04)_0%,transparent_70%)]" />

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                                Past Edition
                            </h2>
                        </div>
                    </div>
                    {/* Gallery Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-4">

                        {/* Main Image */}
                        <div className="relative overflow-hidden border border-[#b8943c]/20 bg-[#111] group">
                            {/* Gold sheen overlay */}
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#b8943c]/[0.08] via-transparent to-[#b8943c]/[0.04]" />

                            <div
                                className={`transition-all duration-200 cursor-zoom-in ${fading ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
                                    }`}
                                onClick={() => setLightbox(mainImage)}
                            >
                                <Image
                                    src={mainImage}
                                    alt="Featured edition"
                                    width={900}
                                    height={560}
                                    className="w-full aspect-[16/10] object-cover"
                                    priority
                                />
                            </div>

                            {/* Badge */}
                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/80 border border-[#b8943c]/40 backdrop-blur-sm px-4 py-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#b8943c] animate-pulse" />
                                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#b8943c]">
                                    Past Edition
                                </span>
                            </div>

                            {/* Expand button */}
                            <button
                                onClick={() => setLightbox(mainImage)}
                                className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-black/70 border border-[#b8943c]/30 text-[#b8943c] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#b8943c]/15 hover:border-[#b8943c]"
                                aria-label="Expand image"
                            >
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex lg:flex-col flex-row gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    onClick={() => handleThumbnailClick(image)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && handleThumbnailClick(image)}
                                    aria-label={`View edition image ${index + 1}`}
                                    className={`relative flex-shrink-0 lg:flex-shrink cursor-pointer overflow-hidden border transition-all duration-300 group/thumb
                    w-20 h-16 lg:w-auto lg:h-[88px]
                    ${mainImage === image
                                            ? "border-[#b8943c] lg:-translate-x-0"
                                            : "border-[#b8943c]/10 hover:border-[#b8943c]/50 lg:hover:-translate-x-1"
                                        }
                  `}
                                >
                                    {/* Active left bar */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#b8943c] z-10 transition-opacity duration-200 ${mainImage === image ? "opacity-100" : "opacity-0"
                                            }`}
                                    />

                                    <Image
                                        src={image}
                                        alt={`Edition ${index + 1}`}
                                        fill
                                        className={`object-cover transition-all duration-300 ${mainImage === image
                                            ? "scale-105 brightness-[0.85] saturate-100"
                                            : "brightness-50 saturate-75 group-hover/thumb:scale-105 group-hover/thumb:brightness-75"
                                            }`}
                                        sizes="260px"
                                    />

                                    {/* Number badge */}
                                    <span
                                        className={`absolute bottom-2 right-2 z-10 text-[10px] font-semibold tracking-wider transition-colors duration-200 ${mainImage === image ? "text-[#b8943c]" : "text-white/40"
                                            }`}
                                    >
                                        0{index + 1}
                                    </span>
                                </div>
                            ))}

                            {/* Counter */}
                            <div className="hidden lg:block text-right mt-1 text-[10px] tracking-widest font-medium text-white/20">
                                <span className="text-[#b8943c]">
                                    {String(images.indexOf(mainImage) + 1).padStart(2, "0")}
                                </span>{" "}
                                / {String(images.length).padStart(2, "0")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm cursor-zoom-out"
                    style={{ animation: "fadeIn 0.2s ease" }}
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative border border-[#b8943c]/30"
                        style={{ animation: "scaleIn 0.25s ease" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 flex items-center gap-2 text-[#b8943c] text-[11px] font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
                        >
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                            Close
                        </button>
                        <Image
                            src={lightbox}
                            alt="Expanded view"
                            width={1200}
                            height={750}
                            className="block max-w-[90vw] max-h-[85vh] object-contain"
                        />
                    </div>
                </div>
            )}

            <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.96) } to { opacity: 1; transform: scale(1) } }
      `}</style>
        </>
    );
};
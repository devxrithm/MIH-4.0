"use client";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
  "/gallery7.jpeg",
];

// const LABELS = [
//   "Opening Ceremony",
//   "Workshop Sessions",
//   "Team Presentations",
//   "Aerial Operations",
//   "Keynote Speaker",
// ];

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setFading(true);
      setProgress(0);
      setTimeout(() => {
        setActiveIndex(index);
        setFading(false);
      }, 250);
    },
    [activeIndex]
  );

  // Auto-advance with progress indicator
  useEffect(() => {
    if (lightbox) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goTo((activeIndex + 1) % images.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [activeIndex, lightbox, goTo]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightbox(images[index]);
  };

  const lightboxNav = (dir: 1 | -1) => {
    const next = (lightboxIndex + dir + images.length) % images.length;
    setLightboxIndex(next);
    setLightbox(images[next]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") lightboxNav(1);
      if (e.key === "ArrowLeft") lightboxNav(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, lightboxIndex]);

  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden bg-[#080808]">
        {/* Ambient background */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-orange-500/4 rounded-full blur-[100px]" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase font-headline section-underline">
              Past <span className="text-primary">Edition</span>
            </h2>
            {/* <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
              Diverse areas to challenge your potential.
            </p> */}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-3">
            {/* Main viewer */}
            <div className="relative overflow-hidden bg-[#111] group">
              {/* Image */}
              <div
                className={`transition-all duration-250 cursor-zoom-in ${fading ? "opacity-0 scale-[1.015]" : "opacity-100 scale-100"
                  }`}
                style={{ transitionDuration: "250ms" }}
                onClick={() => openLightbox(activeIndex)}
              >
                <Image
                  src={images[activeIndex]}
                  alt={"logo"}
                  width={960}
                  height={600}
                  className="w-full aspect-[16/10] object-cover"
                  priority
                />
              </div>

              {/* Dark gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
                <div>
                  <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-1">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                  {/* <p className="text-white font-semibold text-sm tracking-wide">
                    {LABELS[activeIndex]}
                  </p> */}
                </div>
                <button
                  onClick={() => openLightbox(activeIndex)}
                  className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold text-white/50 hover:text-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Expand
                </button>
              </div>

              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10">
                <div
                  className="h-full bg-red-500 transition-none"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex lg:flex-col flex-row gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 scrollbar-hide">
              {images.map((image, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={image}
                    onClick={() => goTo(index)}

                    className={`relative flex-shrink-0 overflow-hidden transition-all duration-300 outline-none
                      w-20 h-14 lg:w-full lg:h-[88px]
                      ${isActive ? "ring-1 ring-red-500" : "ring-1 ring-white/5 hover:ring-white/20"}
                    `}
                  >
                    <Image
                      src={image}
                      alt={"logo"}
                      fill
                      className={`object-cover transition-all duration-300 ${isActive
                          ? "brightness-90 scale-105"
                          : "brightness-40 hover:brightness-60 scale-100 hover:scale-105"
                        }`}
                      sizes="220px"
                    />

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-500" />
                    )}

                    {/* Label on hover */}
                    <div
                      className={`absolute inset-0 flex items-end p-2 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0 hover:opacity-100"
                        }`}
                    >
                      {/* <span className="text-[9px] text-white/70 tracking-wider leading-tight line-clamp-2">
                        {LABELS[index]}
                      </span> */}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dot nav */}
          <div className="flex items-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full outline-none ${i === activeIndex
                    ? "w-6 h-1.5 bg-red-500"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/97 backdrop-blur-md"
          style={{ animation: "fadeIn 0.2s ease" }}
          onClick={() => setLightbox(null)}
        >
          {/* Header bar */}
          <div className="absolute top-0 inset-x-0 h-14 flex items-center justify-between px-6 bg-gradient-to-b from-black/60 to-transparent z-10">
            <div className="flex items-center gap-3">
              <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase">
                Past Edition
              </span>
              <span className="text-white/20 text-[10px]">·</span>
              <span className="text-white/50 text-[10px] font-mono tracking-widest">
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Close
            </button>
          </div>

          {/* Image */}
          <div
            className="relative"
            style={{ animation: "scaleIn 0.2s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt={"logo"}
              width={1400}
              height={875}
              className="block max-w-[88vw] max-h-[80vh] object-contain"
            />
            {/* Caption */}
            {/* <div className="absolute -bottom-8 left-0 text-white/40 text-xs tracking-widest uppercase">
              {LABELS[lightboxIndex]}
            </div> */}
          </div>

          {/* Prev / Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              lightboxNav(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all duration-200"
            aria-label="Previous"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              lightboxNav(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all duration-200"
            aria-label="Next"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.97) } to { opacity: 1; transform: scale(1) } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .brightness-40 { filter: brightness(0.4); }
        .brightness-60 { filter: brightness(0.6); }
      `}</style>
    </>
  );
};
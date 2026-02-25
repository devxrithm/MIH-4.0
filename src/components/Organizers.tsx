'use client';

import Image from 'next/image';

const cardClass =
  'group bg-zinc-900 text-center transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] w-72 flex flex-col items-center rounded-lg overflow-hidden';

const imgWrapperStyle = {
  width: '100%',
  height: '180px',
  position: 'relative' as const,
  backgroundColor: '#ffffff',
  flexShrink: 0,
};

export function Organizers() {
  return (
    <section id="organizers" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Organizers & Partners
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Powered by industry and academic excellence.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-8">

          {/* Card 1 — IIMT */}
          <div className={cardClass}>
            <div style={imgWrapperStyle} className="transition-transform duration-300 group-hover:scale-105 flex items-center">
              <Image
                src="/iimt-1.png"
                alt="IIMT logo"
                width={300}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col items-center gap-1 py-5 px-4">
              <h3 className="text-base font-bold tracking-widest uppercase font-headline text-white leading-tight">
                IIMT
              </h3>
              <p className="text-primary tracking-widest uppercase text-xs font-medium">Organizer</p>
            </div>
          </div>

          {/* Card 2 — IIIT Delhi */}
          <div className={cardClass}>
            <div style={imgWrapperStyle} className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="IIIT Delhi logo"
                fill
                sizes="288px"
                style={{ objectFit: 'contain', padding: '16px' }}
              />
            </div>
            <div className="flex flex-col items-center gap-1 py-5 px-4">
              <h3 className="text-base font-bold tracking-widest uppercase font-headline text-white leading-tight">
                IIIT Delhi
              </h3>
              <p className="text-primary tracking-widest uppercase text-xs font-medium">Organizer</p>
            </div>
          </div>

          {/* Card 3 — IIMT LBF */}
          <div className={cardClass}>
            <div style={imgWrapperStyle} className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/iimt-blf.png"
                alt="IIMT LBF logo"
                fill
                sizes="288px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col items-center gap-1 py-5 px-4">
              <h3 className="text-base font-bold tracking-widest uppercase font-headline text-white leading-tight">
                IIMT LBF
              </h3>
              <p className="text-primary tracking-widest uppercase text-xs font-medium">Organizer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
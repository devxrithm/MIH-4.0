'use client';

import Link from 'next/link';
import React from 'react';

export function Brocheur() {

    return (
        <section id="brochure" className="py-16">
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                    Brochure
                </h2>
                <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
                    Download the brochure to know more about the event.
                </p>
                <Link
                    href={`https://drive.google.com/uc?export=download&id=1mCw5pO-SvRar_p1XFfLe9kPTBS0vlVz8`}
                    className="cursor-pointer mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-primary/80 inline-flex items-center gap-2"
                >
                    <p className='cursor-pointer'>
                    Download Brochure
                    </p>
                </Link>
            </div>
        </section>
    );
}

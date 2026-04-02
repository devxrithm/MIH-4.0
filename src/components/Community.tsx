import Image from 'next/image';
import React from 'react';

const Community = () => {
    return (
        <section id="leadership" className="px-6">
            <div className="">
                <div className="text-center mt-24 flex justify-center w-full flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-headline section-underline">
                        Community  <span className="text-red-200">Partner</span>
                    </h2>
                    <div className="w-full mx-10 z-10 grid grid-cols-3 md:grid-cols-6 justify-items-center items-center gap-8 mt-10">
                        <div className="">
                            <Image
                                src={'/0xSpace_Without_BG.PNG'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/dark-center-3.jpg'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/fetch_ai_meerut_logo.jpeg'}
                                height={100}
                                width={100}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/GDG Logo - Mukul.png'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/geek-room - Manas Chopra.jpeg'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/InShot_20260317_125829436 - Yash Goyal.jpg'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/LOGO - Fardeen Ansari.png'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/Portrait logo V2.png'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                        <div className="">
                            <Image
                                src={'/WhatsApp Image 2026-03-09 at 7.31.09 PM.jpeg'}
                                height={200}
                                width={200}
                                alt={"logo"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;

import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <section id="leadership" className="px-6">
      <div className="">
        <div className="text-center mt-24 flex justify-center w-full flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-headline section-underline">
            Sponsors <span className="text-red-500"></span>
          </h2>

          <div className="flex w-full flex-wrap justify-center items-center z-10 gap-5 mt-10">
            <Image
              src={"/neo.png"}
              height={300}
              width={300}
              alt="logo"
            />
            <Image
              src={"/Duality.png"}
              height={300}
              width={300}
              alt="logo"
            />
            <Image
              src={"/CollegeDunia.png"}
              height={300}
              width={300}
              alt="logo"
              
            />
            <Image
              src={"/interview.png"}
              height={300}
              width={300}
              alt="logo" 
            />
            <Image
              src={"/xyz.png"}
              height={300}
              width={300}
              alt="logo" 
            />
            <Image
              src={"/codecrafter.png"}
              height={300}
              width={300}
              alt="logo" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsor;

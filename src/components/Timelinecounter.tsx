"use client";

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [day, setDay] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

  useEffect(() => {
    const countDownDate = new Date("April 3, 2026 15:37:25").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setDay(0);
        setHours(0);
        setMin(0);
        setSec(0);
        return;
      }

      setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-5">
      <div className="text-center">
        <div className="text-5xl lg:text-7xl text-white flex justify-center items-center gap-5">
          {[day, hours, min, sec].map((value, index) => (
            <span
              key={index}
              className="shadow-2xl shadow-red-400 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl"
            >
              <p className="backdrop-blur-sm font-bold rounded-2xl p-2 lg:p-4 max-w-26 text-center tabular-nums">
                {value.toString().padStart(2, "0")}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;

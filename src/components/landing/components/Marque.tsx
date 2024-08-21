import React from "react";
import Marquee from "react-fast-marquee";

export default function Marque() {
  return (
    <div className="relative w-full">
      <div className="w-1/6 z-10 h-full absolute left-0 top-0 bg-gradient-to-r from-white to-white/0"></div>
      <Marquee speed={60} className="h-32 pointer-events-none overflow-visible">
        <p className="text-8xl text-black/40 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          nulla.{" "}
        </p>
      </Marquee>
      <div className="w-1/6 z-10 h-full bg absolute top-0 right-0 bg-gradient-to-l from-white to-white/0"></div>
    </div>
  );
}
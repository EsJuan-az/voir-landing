import React from "react";
import TitleLetter from "./title-letter";
import { complementary, handwrite } from "@/fonts";

const VoirLogo = () => {
  return (
    <div
      id="voir-logo"
      className="relative flex-col items-center justify-center transition-opacity flex h-screen"
    >
      <div id='upper-text' className={`absolute flex flex-col font-bold ${complementary.className}
      2xl:top-1/12 2xl:left-1/12 2xl:text-2xl 2xl:text-left
      xl:top-1/12 xl:left-1/12 xl:text-2xl xl:text-left
      lg:top-1/6 text-center lg:text-2xl lg:left-auto
      md:text-lg md:top-0 
      sm:text-md sm:top-0 
      top-8 left-1 gap-3 flex-row
      text-xs`}>
        <span>Earth-Sun</span>
        <span>149,597,870,700 metters</span>
      </div>
      <div id='lower-text' className={`absolute ${handwrite.className}
      2xl:bottom-1/12 2xl:right-1/12 2xl:text-5xl 2xl:text-right 2xl:px-0
      xl:bottom-1/12 xl:right-1/12 xl:text-right xl:text-4xl xl:px-0
      bottom-1/6 lg:w-full lg:text-center lg:text-4xl
      md:text-center md:px-3 md:text-lg
      sm:text-center sm:px-3 sm:text-lg
      text-lg text-center px-3`}>
        <span>The one way ahead is clearing - it&apos;s time to move forward &apos;&apos;</span>
      </div>
      <h1 className={`font-sans text-xl font-bold text-white 2xl:text-3xl xl:text-3xl lg:text-3xl`}>COMING SOON</h1>
      <div className="flex justify-center gap-1 select-none relative z-10 mt-[-60px]">
        {"VOIR".split("").map((letter, index) => (
          <TitleLetter
            includeImage={false}
            key={index}
            letter={letter}
            className={`transition-all opacity-0 ${index % 3 == 0 ? 'z-20' : 'z-0'}`}
          />
        ))}
        <div className="w-[150px] absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div id="scribble-wrapper" className="overflow-hidden w-0">
            <object
              id="scribble-object"
              data="/svg/voir.svg"
              type="image/svg+xml"
              className="w-[150px] h-full"
              aria-label="Scribble Logo"
            ></object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoirLogo;
"use client";

import Image from "next/image";

export default function Door() {
  return (
    <div className="relative aspect-[2/3] 2xl:w-64 xl:w-52 lg:w-44 w-32 group perspective-1000 mx-auto cursor-pointer my-6">
      {/* White glow on open */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-1000 shadow-[0_0_30px_10px_rgba(255,0,0,0.4)]"></div>
      {/* Door Frame */}
      <div className="absolute inset-0 bg-gray-200 rounded-lg border border-red-600">
      <Image src="/images/mobile_bg.jpg" alt="Sunset" width={1024} height={1536} className={"absolute top-0 left-0 w-full h-full object-cover rounded-lg"}/>
      
      </div>
      {/* Door */}
      <div className="absolute inset-0 bg-background rounded-lg transition-all duration-1000 ease-in-out transform group-active:rotate-y-60 group-hover:rotate-y-60 origin-right border border-red-600 flex items-center justify-center overflow-hidden">
        {/* Handle */}
        <div className="absolute left-3 w-1.5 h-5 bg-red-800 rounded-full"></div>
        {/* Bright interior */}
        {/* <div
          className={` font-bold flex-col flex justify-center items-center text-background absolute inset-0 bg-white opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700 delay-300`}
        >
        </div> */}
      </div>
    </div>
  );
}

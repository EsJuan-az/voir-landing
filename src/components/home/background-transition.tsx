'use client';

import Image from 'next/image';

export default function BackgroundTransition () {

  return (
    <div className="-z-50 absolute top-0 left-0 w-full h-screen opacity-0" id='background-transition'>
      <Image src="/images/bg.jpg" alt="Sunset" width={1536} height={1024} className={"2xl:block xl:block lg:block md:hidden sm:hidden hidden absolute w-full h-screen top-0 left-0 object-cover"}/>
      <Image src="/images/mobile_bg.jpg" alt="Sunset" width={1024} height={1536} className={"absolute 2xl:hidden xl:hidden lg:hidden md:block sm:block top-0 w-full h-screen left-0 object-cover"}/>
    </div>
  );
};
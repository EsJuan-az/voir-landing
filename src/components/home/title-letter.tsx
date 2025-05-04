import { logo } from '@/fonts';
import React from 'react';

const TitleLetter = ({ letter, className, includeImage }: {letter: string, className: string, includeImage: boolean}) => {
  return (
    <h1
      className={`${className} ${logo.className}  text-white scale-x-150 inline-block transition-colors bg-clip-text bg-cover bg-center
      2xl:text-[300px]
      xl:text-[250px]
      lg:text-[250px]
      text-[200px]`}
      style={includeImage ? { backgroundImage: `url("/images/${letter}.jpg")`, color: 'transparent' } : {}}
      data-letter
    >
      {letter}
    </h1>
  );
};

export default TitleLetter;
import Image from 'next/image';
import React from 'react';
interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return ( <div className='logo'>
    <Image width={187.5} height={52.6} alt='logo image' src="/assets/logo.png" />
  </div> );
}

export default Logo;
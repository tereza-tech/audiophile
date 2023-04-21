import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react'

type Props = {
  src: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const ResponsiveImage = ({src}: Props) => {
  const { mobile, tablet, desktop } = src;

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");

  if (isDesktop) {
    return (
      <Image src={desktop.slice(1)} layout="fill" objectFit="cover" priority />
    );
  } else if (isTablet) {
    return (
      <Image src={tablet.slice(1)} layout="fill" objectFit="cover" priority />
    );
  } else {
    return (
      <Image src={mobile.slice(1)} layout="fill" objectFit="cover" priority />
    );
  }
}

export default ResponsiveImage;

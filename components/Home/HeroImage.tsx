import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImage = () => {
  const HERO_IMAGE_SRCS = {
    MOBILE: "/assets/home/mobile/image-header.jpg",
    TABLET: "/assets/home/tablet/image-main-1.jpg",
    DESKTOP: "/assets/home/desktop/image-main-1.jpg",
  };

  let heroImage;

  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1199px)");

  if (isMobile) {
    heroImage = HERO_IMAGE_SRCS.MOBILE;
  } else if (isTablet) {
    heroImage = HERO_IMAGE_SRCS.TABLET;
  } else {
    heroImage = HERO_IMAGE_SRCS.DESKTOP;
  }

  const boxStyles = {
    backgroundColor: "#000000",
    position: "absolute",
    inset: 0,
    zIndex: 2,
  };

  return (
    <Box>
      <Box
        component={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, delay: 1.5 }}
        sx={boxStyles}
      />
      <Image
        src={heroImage}
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="hero-image"
        style={{ zIndex: 1 }}
      />
    </Box>
  );
};

export default HeroImage;

import {
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import imageDesktop from "../public/assets/shared/desktop/image-symbio-design.jpg";
import imageMobile from "../public/assets/shared/mobile/image-symbio-design.jpg";
import imageTablet from "../public/assets/shared/tablet/image-symbio-design.jpg";
import React from "react";

const AboutSection = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1200px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  let src: StaticImageData;
  let spacing: number;

  if (isMobile) {
    src = imageMobile;
    spacing = 3;
  } else if (isTablet) {
    src = imageTablet;
    spacing = 5;
  } else {
    src = imageDesktop;
    spacing = 5;
  }

  return (
    <Container>
      <Grid container spacing={spacing}>
        <Grid
          item
          xs={12}
          lg={6}
          component={motion.div}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <Card>
            <Image src={src} alt="Best audio gear" layout="responsive" />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          order={isDesktop ? -1 : 1}
          component={motion.div}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Stack
            gap={3}
            height="100%"
            alignItems="center"
            justifyContent="center"
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography
              variant="h3"
              component="h3"
              textTransform="uppercase"
              fontWeight={700}
            >
              Bringing you the{" "}
              <Typography
                variant="h3"
                component="span"
                color="primary"
                display="inline-block"
                fontWeight="inherit"
              >
                Best
              </Typography>{" "}
              audio gear
            </Typography>
            <Typography variant="body1" color="GrayText">
              Located at the heart of New York City, MT Distributing is the premier
              store for high end projectors, subwoofers, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make MT Distributing the best place to buy your portable
              audio equipment.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;

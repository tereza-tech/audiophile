import { Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { Product as ProductType } from "../../lib/types";

type Props = {
  product: ProductType;
  children: React.ReactNode;
  index: number;
};

const Product = ({ product, index, children }: Props) => {
  const { name, image, new: isNew, description } = product;

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  let src: string;

  if (isDesktop) {
    src = image.desktop;
  } else if (isMobile) {
    src = image.mobile;
  } else {
    src = image.tablet;
  }

  const isIndexEven = index % 2 === 0;

  const router = useRouter();
  const { pathname } = router;

  const isInShowPage = pathname.includes("[slug]");

  const getGridOrder = () => {
    if (index && !isTablet) {
      return isIndexEven ? 1 : -1;
    }
    return 1;
  };

  return (
    <Grid container spacing={isDesktop ? 7 : 4}>
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        initial={{ opacity: 0, x: isIndexEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{ position: "relative", height: { xs: "352px", md: "560px" } }}
        >
          <Image
            src={src.slice(1)}
            layout="fill"
            alt={name}
            objectFit="cover"
            priority
          />
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        order={getGridOrder()}
        component={motion.div}
        initial={{ opacity: 0, x: isIndexEven ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Stack
          gap={3}
          height="100%"
          justifyContent="center"
          alignItems={{ xs: "center", md: "start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {isNew && (
            <Typography
              variant="body1"
              component="span"
              textTransform="uppercase"
              fontWeight={400}
              letterSpacing="10px"
              color="primary.main"
            >
              New product
            </Typography>
          )}
          <Typography variant="h3" component={isInShowPage ? "h1" : "h2"}>
            {name}
          </Typography>
          <Typography variant="body1" color="GrayText" maxWidth="65ch">
            {description}
          </Typography>
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Product;

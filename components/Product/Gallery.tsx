import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Product } from "../../lib/types";
import ResponsiveImage from "../ResponsiveImage";

type Props = {
  product: Product;
};

const Gallery = ({ product }: Props) => {
  const { first, second, third } = product.gallery;

  return (
    <Grid
      container
      gap={{ xs: 3, sm: 0 }}
      sx={{ marginBlock: { xs: "5.5rem", sm: "7.5rem", lg: "10rem" } }}
    >
      <Grid item xs={12} sm={5.5} paddingRight={{sm: 3}}>
        <Stack height="100%" justifyContent="space-between" gap={3}>
          <Box
            position="relative"
            minHeight={{ xs: "174px", lg: "230px" }}
            height="100%"
            borderRadius={3}
            overflow="hidden"
          >
            <ResponsiveImage src={first} />
          </Box>
          <Box
            position="relative"
            minHeight={{ xs: "174px", lg: "230px" }}
            height="100%"
            borderRadius={3}
            overflow="hidden"
          >
            <ResponsiveImage src={second} />
          </Box>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6.5}
        position="relative"
        minHeight={{ xs: "368px", lg: "592px" }}
        borderRadius={3}
        overflow="hidden"
      >
        <ResponsiveImage src={third} />
      </Grid>
    </Grid>
  );
};

export default Gallery;

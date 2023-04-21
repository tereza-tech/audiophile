import { Box, Button, Grid, Stack, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Product } from "../../lib/types";
import ResponsiveImage from "../ResponsiveImage";

type Props = {
  product: Product;
};

const Recommended = ({ product }: Props) => {
  const { others } = product;

  const isTablet = useMediaQuery("(min-width: 600px)");

  return (
    <Stack textAlign="center" mb={{ xs: "10rem", lg: "14.5rem" }}>
      <Typography
        variant="h4"
        component="h2"
        textTransform="uppercase"
        mb={{ xs: "2.5rem", sm: "3.5rem", lg: "4rem" }}
      >
        You may also like
      </Typography>
      <Grid container spacing={isTablet ? 3 : 7.5}>
        {others.map((item) => {
          const { slug, name, image } = item;

          const category = slug.match(/\w*$/)![0];
          const href = `/${
            category.endsWith("s") ? category : `${category}s`
          }/${slug}`;

          return (
            <Grid item xs={12} sm={4} key={slug}>
              <Stack gap={{ xs: 2, sm: 4 }}>
                <Box
                  position="relative"
                  minHeight={{ xs: "120px", sm: "320px" }}
                  overflow="hidden"
                  borderRadius={2}
                >
                  <ResponsiveImage src={image} />
                </Box>
                <Typography
                  variant="h5"
                  textTransform="uppercase"
                  fontWeight={600}
                  mt={{ xs: 1.5 }}
                >
                  {name}
                </Typography>
                <Button
                  variant="contained"
                  href={href}
                  sx={{ alignSelf: "center" }}
                >
                  See product
                </Button>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Recommended;

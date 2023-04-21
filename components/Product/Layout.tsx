import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { getPrice } from '../../lib/helpers';
import { Product as ProductType } from '../../lib/types';
import AboutSection from '../AboutSection';
import QuantityButton from '../Cart/QuantityButton';
import CategoryLinks from '../Category/CategoryLinks';
import GoBack from '../GoBack';
import Head from '../Head';
import FeaturesSection from './FeaturesSection';
import Gallery from './Gallery';
import InTheBox from './InTheBox';
import Product from './Product';
import Recommended from './Recommended';

type Props = {
  product: ProductType;
}

const Layout = ({product}: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <Head title={product.name} description={product.description}/>
      <Container>
        <GoBack />
        <Product product={product} index={0}>
          <Stack gap={4} alignItems={{xs: "center", md: "start"}}>
            <Typography variant="body1" fontWeight={700}>
              {getPrice(product.price)}
            </Typography>
            <QuantityButton product={product} />
          </Stack>
        </Product>
        <Grid
          container
          justifyContent="space-between"
          width="100%"
          mt={{ xs: "0px", lg: "2.5rem" }}
          spacing={isDesktop ? 15 : 10}
        >
          <Grid item xs={12} lg={8}>
            <FeaturesSection product={product} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <InTheBox product={product} />
          </Grid>
        </Grid>
        <Gallery product={product} />
        <Recommended product={product} />
        <Box mb={{ xs: "7.5rem", lg: "10rem" }}>
          <CategoryLinks />
        </Box>
        <AboutSection />
      </Container>
    </>
  );
}

export default Layout;

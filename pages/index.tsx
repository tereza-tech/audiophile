import { Stack } from "@mui/material";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import CategoryLinks from "../components/Category/CategoryLinks";
import Head from "../components/Head";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head title="MT Distributing" />
      <Stack gap={{ xs: 10, sm: 12, md: 16 }}>
        <Hero />
        {/*<CategoryLinks />*/}
        <FeaturedProducts />
        <AboutSection />
      </Stack>
    </>
  );
};

export default Home;

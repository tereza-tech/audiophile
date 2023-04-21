import { Button, Container, Stack } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";
import { Product as ProductType } from "../../lib/types";
import Head from "../../components/Head";

type Props = {
  invisibass: ProductType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const invisibass = data
    .filter((item) => item.category === "invisibass")
    .reverse(); // Reverse to show the latest products first

  return {
    props: {
      invisibass,
    },
  };
};

const Invisibass: NextPage<Props> = ({ invisibass }: Props) => {
  return (
    <>
      <Head title="Neviditelné reroduktory | MT Distributing" />
      <CategoryHeader category="invisibass" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {invisibass.map((product, index) => {
            const { id, slug } = product;
            const href = `/invisibass/${slug}`;

            return (
              <Product key={id} product={product} index={index}>
                <Button variant="contained" href={href}>
                  See product
                </Button>
              </Product>
            );
          })}
          <AboutSection />
        </Stack>
      </Container>
    </>
  );
};

export default Invisibass;

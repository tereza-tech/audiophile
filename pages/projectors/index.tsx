import { Button, Container, Stack } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";
import { Product as ProductType } from "../../lib/types";
import Head from "../../components/Head";

type Props = {
  projectors: ProductType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const projectors = data
    .filter((item) => item.category === "projectors")
    .reverse(); // Reverse to show the latest products first

  return {
    props: {
      projectors,
    },
  };
};

const Projectors: NextPage<Props> = ({ projectors }: Props) => {
  return (
    <>
      <Head title="Projektory | MT Distributing" />
      <CategoryHeader category="projectors" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {projectors.map((product, index) => {
            const { id, slug } = product;
            const href = `/projectors/${slug}`;

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

export default Projectors;

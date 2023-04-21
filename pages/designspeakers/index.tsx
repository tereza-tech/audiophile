import { Button, Container, Stack } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";
import { Product as ProductType } from "../../lib/types";
import Head from "../../components/Head";

type Props = {
  designspeakers: ProductType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const designspeakers = data
    .filter((item) => item.category === "designspeakers")
    .reverse(); // Reverse to show the latest products first

  return {
    props: {
      designspeakers,
    },
  };
};

const Designspeakers: NextPage<Props> = ({ designspeakers }: Props) => {
  return (
    <>
      <Head title="Designové reproduktory | MT Distributing" />
      <CategoryHeader category="designspeakers" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {designspeakers.map((product, index) => {
            const { id, slug } = product;
            const href = `/designspeakers/${slug}`;

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

export default Designspeakers;

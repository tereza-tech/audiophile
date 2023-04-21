import { Button, Container, Stack } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Product from "../../components/Product/Product";
import data from "../../data.json";
import { Product as ProductType } from "../../lib/types";
import Head from "../../components/Head";

type Props = {
  rti: ProductType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const rti = data
    .filter((item) => item.category === "rti")
    .reverse(); // Reverse to show the latest products first

  return {
    props: {
      rti,
    },
  };
};

const Rti: NextPage<Props> = ({ rti }: Props) => {
  return (
    <>
      <Head title="Řídící systémy RTI | MT Distributing" />
      <CategoryHeader category="rti" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {rti.map((product, index) => {
            const { id, slug } = product;
            const href = `/rti/${slug}`;

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

export default Rti;

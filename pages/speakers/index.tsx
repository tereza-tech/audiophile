import { Button, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
import Head from "../../components/Head";
import Product from "../../components/Product/Product";
import data from "../../data.json";

type Props = {};

const Speakers: NextPage = (props: Props) => {
  const speakers = data
    .filter((item) => item.category === "speakers")
    .reverse();

  return (
    <>
      <Head title="Reproduktory | MT Distributing" />
      <CategoryHeader category="speakers" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {speakers.map((product, index) => {
            const { id, slug } = product;
            const href = `/speakers/${slug}`;

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

export default Speakers;

import { Button, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import CategoryHeader from "../../components/Category/CategoryHeader";
  import Head from "../../components/Head";
import Product from "../../components/Product/Product";
import data from "../../data.json";

const Subwoofers: NextPage = () => {
  const subwoofers = data.filter((item) => item.category === "subwoofers");

  return (
    <>
      <Head title="Subwoofery | MT Distributing" />
      <CategoryHeader category="subwoofers" />
      <Container>
        <Stack gap={{ xs: "7.5rem", lg: "10rem" }}>
          {subwoofers.map((product, index) => {
            const { id, slug } = product;
            const href = `/subwoofers/${slug}`;

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

export default Subwoofers;

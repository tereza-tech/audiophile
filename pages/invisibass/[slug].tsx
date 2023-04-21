import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Product/Layout";
import data from "../../data.json";
import { Product as ProductType } from "../../lib/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((item) => {
    const { slug } = item;

    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context!.params!.slug;

  const invisibass = data.filter((item) => item.slug === slug)[0];

  return {
    props: { invisibass },
  };
};

type Props = {
  invisibass: ProductType;
};

const Invisibass: NextPage<Props> = ({ invisibass }: Props) => {
  return <Layout product={invisibass} />;
};

export default Invisibass;

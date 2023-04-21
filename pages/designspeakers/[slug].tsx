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

  const designspeaker = data.filter((item) => item.slug === slug)[0];

  return {
    props: { designspeaker },
  };
};

type Props = {
  designspeaker: ProductType;
};

const Designspeaker: NextPage<Props> = ({ designspeaker }: Props) => {
  return <Layout product={designspeaker} />;
};

export default Designspeaker;

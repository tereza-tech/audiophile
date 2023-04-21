import NextHead from "next/head";

type Props = {
  title: string;
  description?: string;
};

const Head = ({ title, description }: Props) => {
  const defaultDescription =
    "Located at the heart of New York City, MT Distributing is the premier store for high end projectors, subwoofers, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make MT Distributing the best place to buy your portable audio equipment.";

  return (
    <NextHead>
      {/* ---------------------- Primary Meta Tags ------------------------- */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description || defaultDescription} />
      {/* ---------------------- Primary Meta Tags ------------------------- */}
      {/* -------------------- Open Graph / Facebook ----------------------- */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://mtdistributing.cz/"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/cJfMH0Ym/audiophile-og.png"
      />
      {/* -------------------- Open Graph / Facebook ----------------------- */}
      {/* --------------------------- Twitter ------------------------------ */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://mtdistributing.cz/"
      />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:image"
        content="https://i.postimg.cc/cJfMH0Ym/audiophile-og.png"
      />
      {/* --------------------------- Twitter ------------------------------ */}
    </NextHead>
  );
};

export default Head;

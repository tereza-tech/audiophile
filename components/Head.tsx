import NextHead from "next/head";
import Script from 'next/script'

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-044Q9QHSCV" />
      <Script id="show-banner">
        {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-044Q9QHSCV');`}
      </Script>
      <Script>
        {` var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="O9nlHYEamoGo3pK24rqJ6g2ksCJkdiuu";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("O9nlHYEamoGo3pK24rqJ6g2ksCJkdiuu");
  analytics.page();
  }}();`}
      </Script>
      {/* --------------------------- Twitter ------------------------------ */}
    </NextHead>
  );
};

export default Head;

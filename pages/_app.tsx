import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useContext, useEffect } from "react";
import CartProvider, { CartContext } from "../components/CartContext";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/global.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const cart = useContext(CartContext);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
      const items = JSON.parse(localStorageCart);
      cart.setItems(items);
    }
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EPH28T6HSZ`}
      />

      <Script strategy="lazyOnload" id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EPH28T6HSZ', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

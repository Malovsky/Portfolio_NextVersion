import "../styles/globals.css";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;

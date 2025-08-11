import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      <script defer src="https://videoadstech.org/ads/robertus_livextop_com.192fc55d-a517-4c5a-909d-8f80ae14b50a.video.js"></script>
      <script async src="https://server.adhub.media/ads/robertus_livextop_com.be08a93c-05a8-4727-9b67-b835b3de57cd.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};

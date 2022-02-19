import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Hashnode Stats"
        description="This app shows stats for any hashnode profile."
        canonical="https://hashnode-stats.vercel.app/"
        openGraph={{
          url: "https://hashnode-stats.vercel.app/",
          title: "Hashnode Stats",
          description: "This app shows stats for any hashnode profile.",
          images: [
            {
              url: "/icon-512x512.png",
              width: 512,
              height: 512,
              alt: "Hashnode Stats",
            },
          ],
          site_name: "Hashnode Stats",
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <NextNProgress color="#BFDBFE" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

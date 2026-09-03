import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
        <script defer src={`${process.env.NEXT_PUBLIC_BASE_PATH}/site.js`} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

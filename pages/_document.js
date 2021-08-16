import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        {/* className="dark" */}
        <Head>
          <link rel="shortcut icon" href="/vercel.svg" />
        </Head>

        <body className=" bg-white container mx-auto p-2 dark:bg-black overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

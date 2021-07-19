import Document, { Html, Head, Main, NextScript } from "next/document";

//!important Head, do next/document !== do Head next/head

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main>
            <div className="overlay"></div>
          </Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

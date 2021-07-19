import "../../styles/globals.css";
import { Layout } from "../components/Layout";
//Dentro do layout eu vou ter o header, e o conteudo, contudo eu posso fazer isso com _document, recomendado pelo NextJs

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

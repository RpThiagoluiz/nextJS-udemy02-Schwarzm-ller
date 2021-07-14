import dataDummy from "../../data/dummy-backend.json";

const ProductDetailPage = (props) => {
  //Normal seria vc fazer um useEffect aq, contudo quando chegar aq ainda nao vai ter o conteudo, e ele monta depois quando for acesso, igual oReact, logo os SEO nao acham o conteudo.

  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

//Como o arquivo ta [], ele nao vem como default pre-render. para isso vc precisa passar os paths para ele. o NextJs nao vai saber quantas paginas ele de pre renderizar e nem quantas ele precisa renderizar.

export const getStaticProps = async (context) => {
  //O context, pegar os parametros
  const { params } = context;
  //`pid` -> praticamente o slug do file,
  const productId = params.pid;
  const data = dataDummy;

  const product = data.products.find((p) => p.id === productId);

  //Caso o fallback true
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = () => {
  const data = dataDummy;

  const ids = data.products.map((p) => p.id);
  const paramsPaths = ids.map((id) => ({
    params: { pid: id },
  }));

  return {
    // paths: [
    //   // {
    //   //   params: {
    //   //     //valor do arquivo [].js
    //   //     pid: "p1",
    //   //   },
    //   // },
    //   // {
    //   //   params: {
    //   //     pid: "p2",
    //   //   },
    //   // },
    //   // {
    //   //   params: {
    //   //     pid: "p3",
    //   //   },
    //   // },
    // ],
    //fallback: false - ele nao vai gerar na hora, somente os que ja estao pre carregados - traz um 404 | notfound quando nao tem o produto q vc quer.
    //fallback: true - vc tem fazer um loading enquanto ele carrega as paginas. Se vc pegar um produto que ele ainda nao tem, ele retornar um error. porq o true, ele traz que toda pagina que vc tentar acessar ja vai estrar criada, contudo um produto inexisten vai ti retornar um error.
    //fallback: blocking - vc precisa trazer o component, porem ele vai demorar o tempo q precisar pra carregar a pagina, tvz sera horrivel para o UX.
    paths: paramsPaths,
    fallback: true,
  };
};

export default ProductDetailPage;

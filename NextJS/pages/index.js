function HomePage(props) {
  //Next JS vai automatica pre-render nessas informacoes pra vc.
  //Nao quero pegar os dados na hora que meu client for acessar a rota, eu quero que o Next deixa a pagina pre carregada.
  //Primeiro ele utiliza o getStaticProps, depois ele chama esse component HomePage. - o Codigo sempre roda no server, nunca no lado do client.

  //Eu recebo os produtos pela props
  const { products } = props;
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products: [
        { id: "p1", title: "product01" },
        { id: "p2", title: "product02" },
      ],
    },
  };
};

export default HomePage;

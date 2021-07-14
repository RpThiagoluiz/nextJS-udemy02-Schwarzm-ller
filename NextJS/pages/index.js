import Link from "next/link";
import dataDummy from "../data/dummy-backend.json";

function HomePage(props) {
  //Next JS vai automatica pre-render nessas informacoes pra vc.
  //Nao quero pegar os dados na hora que meu client for acessar a rota, eu quero que o Next deixa a pagina pre carregada.
  //Primeiro ele utiliza o getStaticProps, depois ele chama esse component HomePage. - o Codigo sempre roda no server, nunca no lado do client.

  //Eu recebo os produtos pela props
  const { products } = props;
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link href={`/products/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}

//!important Roda um build, e vai em server - pages - e ve oq virou depois roda um yarn start pra ele rodar em cima do build, pra ve se ta tudo la.
export const getStaticProps = async () => {
  //fs -> file system - tbm vem do node
  //path - caminho do arquivo, ele vem do node
  //cwd - cor working directory - assim ele vai comecar diratement no projeto
  //const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  //console.log(filePath);
  // readFileSync, ele vai ler o arquivo de forma async
  //const jsonData = await fs.readFileSync(filePath); // leia esse arquivo
  //Nao precisa mais, pode passar diretamente pelo import.
  //const data = JSON.Parse(jsonData)  Sua duvida que vc tinha, ve o aruivo antes, e vc sabe q aq ele vai virar um obj.

  const data = dataDummy;
  console.log("Re-Generating..."); //com o tempo do revalidade ele vai re fazer o back, e os components.

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  //Se nao houver produto, ele retornar pagina nao encontrada. Lembrando q vc pode customizar a pagina.
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
      // products: [
      //   { id: "p1", title: "product01" },
      //   { id: "p2", title: "product02" },
      // ],
    },
    revalidate: 5,
  };
};

export default HomePage;

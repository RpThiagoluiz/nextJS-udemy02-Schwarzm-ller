import Link from "next/link"; //default export

const Home = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <p>In next, we have Link. </p>
      <span>A vs Link</span>
      <p>A - request para carregar a pagina</p>
      <p>
        Link - vai pegar diretamente sem fazer a request melhorando a otimizacao
        do site. Ele deixa ela pre pronta no backend do next. Evitando q ela
        carregue.
      </p>

      <ul>
        <li>
          <a href="/portifolio">Portifolio</a>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </>
  );
};

//All pages need export default
//index is the main page

export default Home;

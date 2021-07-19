import { useRouter } from "next/router";

//Nested Paths
const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query); //{clientId: "thiago"}

  const handleLoadProjects = () => {
    //Load data...
    //router.push("/clients/chico/mijarnacozinha"); //Navegacao pragmatica
    //Tbm pode passar Alternativa
    router.push({
      //query no lugar de um nome estatico, pode passar nome dinamic, que pode ser pego pelo pathname de router, useRouter()
      pathname: "/clients/[clientId]/[clientprojectid]",
      query: { clientId: "chico", clientprojectid: "mijarnacozinha" },
    });
  };

  return (
    <>
      <h1>The Projects of a Given Client</h1>
      <button onClick={handleLoadProjects}> Load Project A</button>
    </>
  );
};

export default ClientProjects; //http://localhost:3000/clients/thiago

import { useRouter } from "next/router";

//Nested Paths
const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query); //{clientId: "thiago"}
  return <h1>The Projects of a Given Client</h1>;
};

export default ClientProjects; //http://localhost:3000/Clients/thiago

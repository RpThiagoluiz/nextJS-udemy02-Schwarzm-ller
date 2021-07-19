import Link from "next/link";
const Clients = () => {
  //Dummy ClientsLists
  const clients = [
    { id: "chico", name: "Chico benga Mole" },
    { id: "tonha", name: "Tonha 3 arroba" },
    { id: "bento", name: "Bento xubimgole" },
  ];

  return (
    <>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
        {/* How to work & other alternative away
        ... client => (
          <li key={client.id}>
            <Link href={{
              pathname: '/clients/[clientId]',
              //dizendo pra ele qual a query que vai ser utilizada.
              query : {clientId: client.id}
            }>{client.name}</Link>
          </li>
        ) */}
      </ul>
    </>
  );
};

export default Clients; //http://localhost:3000/clients

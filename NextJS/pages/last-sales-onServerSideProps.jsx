import { useEffect, useState } from "react";
import { api } from "../firebase/api";
import useSWR from "swr";

const LastSales = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error } = useSWR(`${api}/sales.json`);
  useEffect(() => {
    if (data) {
      const formatedData = Object.entries(data).map(([key, value]) => {
        const { username, volume } = value;
        return {
          id: key,
          username,
          volume,
        };
      });

      setSales(formatedData);
      setIsLoading(false);
    }
    //data ele vem de fora.
  }, [data]);

  //Error sempre em cima, mais importante
  if (error) {
    return <p>Failedto load!</p>;
  }

  if (!data || !sales) {
    return <p>Loading ...</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - $ {sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSales;

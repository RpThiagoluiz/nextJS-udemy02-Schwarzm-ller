import { useEffect, useState } from "react";
import { api } from "../firebase/api";

const LastSales = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //User effect so vem depois q monta o component
  useEffect(() => {
    // fetch(`${api}/sales.json`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     const formatedData = [];
    //     for (const key in data) {
    //       formatedData.push({
    //         id: key,
    //         username: data[key].username,
    //         volume: data[key].volume,
    //       });
    //     }

    //     setSales(formatedData);
    //     setIsLoading(false);
    //   });
    const fetchData = async () => {
      const response = await fetch(`${api}/sales.json`);
      const data = await response.json();
      //console.log(data);
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
    };

    fetchData();
  }, []);

  // async function getUser(userId) {
  //   let response = await fetch(`https://api.com/api/user/${userId}`);
  //   let userData = await response.json();
  //   return userData.name; // não é necessário o await no return
  //  }
  //exibeDadosUser(await getUser(1))

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

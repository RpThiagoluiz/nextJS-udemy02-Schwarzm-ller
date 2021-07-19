import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const router = useRouter();
  console.log(router.query);

  //Agora temos um objeto com dois valores, {clientId: "thiago", clientprojectid: "projectone"}

  return (
    <h1>The Project Page for a Specfific Project for a selected Client</h1>
  );
};

export default SelectedClientProject; //http://localhost:3000/clients/thiago/projectone

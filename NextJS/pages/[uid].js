const UserId = (props) => <h1>{props.id}</h1>;

export default UserId;

export const getServerSideProps = async (context) => {
  //Nao tem, pregeneration, ele gera ela na hora
  const { params } = context;

  console.log(`selveSidePRopsbrabo1`);
  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
};

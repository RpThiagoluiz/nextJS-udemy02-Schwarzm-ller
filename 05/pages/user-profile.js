const UserProfile = (props) => {
  //Queremos identificar o usuario logado,
  return <h1>{props.username}</h1>;
};

export const getServerSideProps = async (context) => {
  //msm formato do Static. Ele nao precisa do revalidate, porq por default, ele ja vai construir tudo novamente, toda vez q ele for chamado.

  //So vai rodar no Server,

  const { params, req, res } = context;
  //console.log(req);
  //console.log(res);

  console.log(`server-side+props`); //trazer na hora que ele for chamada. uma Pagina dinamica com os dados do usuario.

  return {
    props: {
      username: "thiago",
    },
  };
};

export default UserProfile;
//http://localhost:3000/user-profile

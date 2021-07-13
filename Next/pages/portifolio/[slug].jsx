import { useRouter } from "next/router";
//id or slug, project... u choose the name

const PortifolioSlugs = () => {
  const router = useRouter();
  console.log(router.pathname); //Portifolio/[slug]
  console.log(router.query); //slug: "Lists"

  //send a request to some backend server and to fetch the piece of data with an id of router.query.slug || router.query.id || router.query.projectid

  return (
    <div>
      <h1>The Slugs Protifolio Page</h1>
    </div>
  );
};

export default PortifolioSlugs;

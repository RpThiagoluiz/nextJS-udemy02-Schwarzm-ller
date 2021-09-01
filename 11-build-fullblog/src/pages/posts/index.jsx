import { AllPosts } from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts.utils";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;

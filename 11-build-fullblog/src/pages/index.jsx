import { FeaturedPosts } from "../components/home/featured-posts";
import { Hero } from "../components/home/hero";
import { getFeaturedPosts } from "../lib/posts.utils";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "nextjs-file-based-routing",
    title: "NextJS Routing",
    image: "nextjs-file-based-routing.png",
    excerpt:
      "The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.You can also use interpolation to create the path, which comes in handy for dynamic route segments.",
    date: "2022-02-10",
  },
];

const Homepage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100, //1m 40seg
  };
};

export default Homepage;

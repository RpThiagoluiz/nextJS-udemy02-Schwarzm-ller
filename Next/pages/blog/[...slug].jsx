import { useRouter } from "next/router";

//Sintaxe use for [..slug] - catch it in Array
//2021/12/the-post-id
//2021/12
//the-post-id
//2019

const BlogPosts = () => {
  const router = useRouter();
  console.log(router.query); //http://localhost:3000/blog/2020/45

  //Now, it return array slug: Array(2)}
  // slug: Array(2)
  // 0: "2020"
  // 1: "45"
  //Now we can send this request to filter blog post in this expecific filters.
  return <h1>The BlogPosts Page</h1>;
};

export default BlogPosts;

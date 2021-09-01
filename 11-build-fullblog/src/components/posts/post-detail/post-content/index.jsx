import dynamic from "next/dynamic";
import { PostHeader } from "../post-header";
import styles from "./styles.module.css";

const ReactMarkdown = dynamic(
  () => import("react-markdown").then((module) => module.default),
  { ssr: false }
);

export const PostContent = ({ post }) => {
  const title = post.title;
  const image = `/images/posts/${post.image}`;

  console.log(post);

  return (
    <article className={styles.content}>
      <PostHeader header={{ title, image }} />
      <ReactMarkdown children={post.content} />
    </article>
  );
};

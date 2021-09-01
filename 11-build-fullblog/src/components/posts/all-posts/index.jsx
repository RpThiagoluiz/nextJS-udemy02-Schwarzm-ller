import { PostsGrid } from "../grid";
import styles from "./styles.module.css";

export const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

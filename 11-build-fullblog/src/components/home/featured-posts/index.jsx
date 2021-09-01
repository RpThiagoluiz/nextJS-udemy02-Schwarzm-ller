import { PostsGrid } from "../../posts/grid";
import styles from "./styles.module.css";

export const FeaturedPosts = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

import { PostItem } from "../item";
import styles from "./styles.module.css";

export const PostGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

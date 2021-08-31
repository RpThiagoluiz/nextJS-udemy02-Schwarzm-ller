import Image from "next/image";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/githubImage.png"
          alt="github Image Thiago"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, i`m Thiago!</h1>
      <p>
        This blog was built on the NextJs udemy course. I added a few things to
        make it look more like me.
      </p>
    </section>
  );
};

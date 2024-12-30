import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
        <Navbar />
        <section className={styles['page__content']}>
            <h1></h1>
            <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
        </section>
    </main>
  );
}

import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";
import Input from "@/shared/components/input";

export default function Home() {
  return (
    <main>
        <Navbar />
        <section className={styles['page__content']}>
            <h1></h1>
            <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            <div className={styles['convert__container']}>
                <Input placeholder="Enter the link here" />
            </div>
        </section>
    </main>
  );
}

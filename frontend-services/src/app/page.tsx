import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";
import Input from "@/shared/components/input";
import Switch from "@/shared/components/switch";
import Table from "@/shared/components/table/indext";

export default function Home() {
  return (
    <main>
        <Navbar />
        <section className={styles['page__content']}>
            <h1></h1>
            <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            <div className={styles['convert__container']}>
                <Input placeholder="Enter the link here" />

                <section className={styles['options__container']}>
                    <div className={styles['switch__container']}>
                        <Switch />
                        <p>Auto Paste from Clipboard</p>
                    </div>
                    <p>You can create <span>05</span> more links. <a href="/register-now">Register Now</a> to enjoy Unlimited usage</p>
                </section>
            </div>
            <Table></Table>
        </section>
    </main>
  );
}

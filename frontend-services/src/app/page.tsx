'use client'

import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";
import Input from "@/shared/components/input";
import Switch from "@/shared/components/switch";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import { Shortener } from "@/models/shortener.model";

export default function Home() {
    const [shortLink, setShortLink] = useState('');
    const { data, isLoading, fetchData } = useFetch<Shortener>('/shortener', { method: 'POST',  body: JSON.stringify({ url: shortLink }) });

    const onShortLink = async () => {
        await fetchData();
        console.log(data);
    }

    return (
        <main>
            <Navbar />
            <section className={styles['page__content']}>
                <h1></h1>
                <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
                <div className={styles['convert__container']}>
                    <Input onChange={({target:{value}}) => setShortLink(value) } onButtonClick={onShortLink} loading={isLoading} placeholder="Enter the link here" />

                <section className={styles['options__container']}>
                    <div className={styles['switch__container']}>
                        <Switch />
                        <p>Auto Paste from Clipboard</p>
                    </div>
                    <span>result: {data?.short}</span>
                    {/* <p>You can create <span>07</span> more links. <a href="/register-now">Register Now</a> to enjoy Unlimited usage</p> */}
                </section>
            </div>
        </section>
    </main>
  );
}

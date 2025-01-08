'use client'

import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";
import Input from "@/shared/components/input";
import Switch from "@/shared/components/switch";
import { useFetch } from "@/hooks/useFetch";
import { useRef, useState } from "react";
import { Shortener } from "@/models/shortener.model";
import Head from "next/head";

export default function Home() {
    const [shortLink, setShortLink] = useState('');
    const { data, isLoading, fetchData } = useFetch<Shortener>('/shortener', { method: 'POST', body: JSON.stringify({ url: shortLink }) });
    const spanRef = useRef<HTMLSpanElement>(null);

    const onShortLink = async () => {
        await fetchData();
        console.log(data);
    }

    const onSelectAll = () => {
        if (spanRef.current) {
            const range = document.createRange();
            range.selectNodeContents(spanRef.current);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);

            const text = spanRef.current.textContent || ""; // Obtiene el texto del elemento
            navigator.clipboard.writeText(text) // Copia el texto al portapapeles
                .then(() => {
                    alert("Texto copiado al portapapeles!"); // Mensaje de confirmación
                })
                .catch((err) => {
                    console.error("Error al copiar el texto: ", err);
                });
        }
    }

    return (
        <>
            <Head>
                <title>jojo&apos;s</title>
                <meta property="og:title" content="Shorten links" key="shorten" />
            </Head>
            <main>
                <Navbar />
                <section className={styles['page__content']}>
                    <h1></h1>
                    <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
                    <div className={styles['convert__container']}>
                        <Input onChange={({ target: { value } }) => setShortLink(value)} onButtonClick={onShortLink} loading={isLoading} placeholder="Enter the link here" />

                        <section className={styles['options__container']}>
                            <div className={styles['switch__container']}>
                                <Switch />
                                <p>Auto Paste from Clipboard</p>
                            </div>
                            {data?.short && <div>
                                <label>Shorten link:</label>
                            </div>}
                            {data?.short &&
                                <span ref={spanRef} style={{ cursor: 'pointer', userSelect: 'text' }} onClick={onSelectAll} className={styles['option__result']}>{data?.short}</span>
                            }
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

'use client'

import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";
import Input from "@/shared/components/input";
import Switch from "@/shared/components/switch";
import { useFetch } from "@/hooks/useFetch";
import { useRef, useState } from "react";
import { Shortener } from "@/models/shortener.model";

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
        }
    }

    return (
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
    );
}

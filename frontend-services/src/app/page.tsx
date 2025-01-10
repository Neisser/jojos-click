'use client'

import Navbar from "@/shared/components/navbar";
import styles from "./page.module.css";
import Input from "@/shared/components/input";
import Switch from "@/shared/components/switch";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useMemo, useRef, useState } from "react";
import { Shortener } from "@/models/shortener.model";
const LS_JOJOS_AUTOCLIPBOARD = 'jojos-autoclipboard';

export default function Home() {
    const localStorageValue = window.localStorage.getItem(LS_JOJOS_AUTOCLIPBOARD);
    const isSwitchClipboardActive = useMemo(() => eval(localStorageValue ?? 'false'), [localStorageValue])
    const [shortLink, setShortLink] = useState('');
    const [autoCopy, setAutoCopy] = useState(isSwitchClipboardActive);
    const spanRef = useRef<HTMLSpanElement>(null);
    const { data, isLoading, fetchData, error } = useFetch<Shortener>('/shortener', { method: 'POST', body: JSON.stringify({ url: shortLink }) });

    /**
     * once the results arrive us save to the clipboard
     */
    const onShortLink = async () => {
        await fetchData();
        if(autoCopy) {
            setTimeout(() => {
                spanRef.current?.click()
            }, 1000)
        }
    }


    /**
     * Automatic selection when user clicks on the object
     */
    const onSelectAll = () => {
        if (spanRef.current) {
            const range = document.createRange();
            range.selectNodeContents(spanRef.current);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);

            const text = spanRef.current.textContent || '';
            clipboardAction(text);
        }
    }

    /**
     * Keep in local storage for future visits.
     */
    const autoClipboard = () => {
        localStorage.setItem(LS_JOJOS_AUTOCLIPBOARD, String(!autoCopy))
        setAutoCopy(!autoCopy)
    }

    /**
     * Need it to keep result url shorten
     * @param text text to save to the clipboard
     */
    const clipboardAction = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            alert("Texto copiado al portapapeles!");
        } catch (error) {
            console.error("Error al copiar el texto: ", error);
        }
    }

    useEffect(() => {
        if(error) alert(error);
    }, [error])

    return (
        <>
            <main className={styles['wrapper']}>
                <Navbar />
                <section className={styles['page__content']}>
                    <h1></h1>
                    <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
                    <div className={styles['convert__container']}>
                        <Input onChange={({ target: { value } }) => setShortLink(value)} onButtonClick={onShortLink} loading={isLoading} placeholder="Enter the link here" />

                        <section className={styles['options__container']}>
                            <div className={styles['switch__container']}>
                                <Switch checked={autoCopy} onChange={() => autoClipboard()} />
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

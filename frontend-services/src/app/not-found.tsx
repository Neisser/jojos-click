/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useFetch } from "@/hooks/useFetch";
import { ShortenerResult } from "@/models/shortener.model";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

export default function NotFound() {
    const router = useRouter();
    const path = usePathname();
    const code = useMemo(() => path.replace('/', '') ?? '', [path]);
    const { data, error, fetchData } = useFetch<ShortenerResult>(`/shortener/${code}`, { method: 'GET' });

    const redirecting = useCallback(() => {
        if (!data) return;

        if (data?.message !== 'ok') {
            router.push('/');
            return;
        }

        if (data?.data?.url) {
            window.location.href = data.data.url;
        }
    }, [data, router])

    useEffect(() => {
        const fetchUrlData = async () => {
            if (!code) return;
            await fetchData();
            redirecting()

        };
        fetchUrlData();
    }, [code]);

    useEffect(() => {
        if(!error) return;
        router.push('/')
    }, [error, router])


    useEffect(() => {
        redirecting()
        return;
    }, [data, redirecting, error]);


    return <div>redirecting...</div>;
}

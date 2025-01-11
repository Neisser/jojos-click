'use client'

import { useFetch } from "@/hooks/useFetch";
import { ShortenerResult } from "@/models/shortener.model";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
    const router = useRouter();
    const params = useSearchParams();
    const code = useMemo(() => params.get('_') ?? '', [params]);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const { data, error, fetchData } = useFetch<ShortenerResult>(`/shortener/${code}`, { method: 'GET' });

    useEffect(() => {
        const fetchUrlData = async () => {
            if (!code || isRedirecting) return;

            try {
                await fetchData();
            } catch (err) {
                console.error('Error fetching URL data:', err);
            }
        };

        fetchUrlData();
    }, [code, fetchData, isRedirecting]);

    useEffect(() => {
        if (!data || isRedirecting) return;

        setIsRedirecting(true);

        if (error || data?.message !== 'ok') {
            router.push('/');
            return;
        }

        if (data?.data?.url) {
            window.location.href = data.data.url;
        }
    }, [data, error, router, isRedirecting]);

    return <div>redirecting...</div>;
}

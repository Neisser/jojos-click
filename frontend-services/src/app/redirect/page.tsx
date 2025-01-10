'use client'

import { useFetch } from "@/hooks/useFetch";
import { ShortenerResult } from "@/models/shortener.model";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
    const router = useRouter();
    const path = usePathname();
    const code = useMemo(() => path.split('/').pop(), [path]);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const { data, error, fetchData } = useFetch<ShortenerResult>(`/shortener/${code}`, { method: 'GET' });

    // Efecto para hacer el fetch inicial
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

    // Efecto separado para manejar la redirección
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

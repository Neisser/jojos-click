'use client'

import { useFetch } from "@/hooks/useFetch";
import { ShortenerResult } from "@/models/shortener.model";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Page() {
    const router = useRouter();
    const path = usePathname();
    const code = useMemo(() => path.split('/').pop(), [path]);
    const { data, error, fetchData } = useFetch<ShortenerResult>(`/shortener/${code}`, { method: 'GET' });

    useEffect(() => {
        if (code) {
            (async () => await fetchData())();
        }
    }, [code]);

    useEffect(() => {
        if (data && (error || data?.message !== 'ok')) {
            router.push('/');
        }

        if (data?.data?.url) {
            // window.location.href = data.data.url;
        }
    }, [error, data, router]);

    return <div>redirecting...</div>;
}

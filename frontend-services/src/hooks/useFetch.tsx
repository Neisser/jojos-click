import { envs } from '@/config/envs.const';
import { useState, useCallback } from 'react';

type FetchOptions = RequestInit;
type UseFetchResponse<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  fetchData: () => Promise<void>;
};

export function useFetch<T>(url: string, options?: FetchOptions): UseFetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${envs.API_URL}${url}`, {...options, headers: { 'Content-Type': 'application/json' }});
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [options, url]);


  return { data, error, isLoading, fetchData };
}

import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@/lib/typings";

const useFavorites = ():  { data: Movie [] | undefined; error: any; isLoading: boolean, mutate: () => void} => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading, mutate };
};

export default useFavorites;
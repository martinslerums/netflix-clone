import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@/lib/typings";

const useMovie = (id?: string): { data: Movie | undefined; error: any; isLoading: boolean } => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

export default useMovie;
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@/lib/typings";

const useBillboard = (): {
  data: Movie | undefined;
  error: any;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useBillboard;

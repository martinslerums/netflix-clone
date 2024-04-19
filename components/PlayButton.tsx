import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

type PlayButtonProps = {
  movieID: string;
};

const PlayButton = ({ movieID }: PlayButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieID}`)}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill size={28} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;

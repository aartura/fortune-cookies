import { FortuneCookie } from "@/types/types";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

type Props = {
  cookie: FortuneCookie;
  isFavouriteCookie?: boolean;
  handleIsCookieFavourite: (
    cookie: FortuneCookie,
    isFavourite: boolean
  ) => void;
};

export const Article: React.FC<Props> = ({
  cookie,
  isFavouriteCookie,
  handleIsCookieFavourite,
}) => {
  const [isFavourite, setIsFavourite] = useState(isFavouriteCookie);

  const handleThumb = (): void => {
    handleIsCookieFavourite(cookie, !isFavourite);
    setIsFavourite(!isFavourite);
  };

  return (
    <article className="p-4 md:p-8">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
          {cookie.date ? (
            <time dateTime={new Date(cookie.date).toISOString()}>
              {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                new Date(cookie.date)
              )}
            </time>
          ) : (
            <span>SOON</span>
          )}
        </span>
        <span className="text-zinc-500 text-xs flex items-center gap-1">
          {isFavourite ? (
            <ThumbsUp
              className="w-4 h-4 cursor-pointer hover:text-zinc-300 hover:rotate-180"
              onClick={handleThumb}
              tabIndex={1}
            />
          ) : (
            <ThumbsDown
              data-testid="thumbs-down-icon"
              className="w-4 h-4 cursor-pointer hover:text-zinc-300 hover:rotate-180"
              onClick={handleThumb}
              tabIndex={1}
            />
          )}
        </span>
      </div>
      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
        {cookie.fortune}
      </p>
    </article>
  );
};

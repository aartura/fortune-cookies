"use client";
import { useEffect, useState } from "react";
import { Article } from "./article";
import { Card } from "./card";
import { Eye } from "lucide-react";
import Link from "next/link";
import { FortuneCookie } from "@/types/types";

export const FavouriteFortuneCookies: React.FC = () => {
  const [favouriteFortuneCookies, setFavouriteFortuneCookies] = useState<
    FortuneCookie[]
  >([]);
  const removeFromFavourtire = (cookie: FortuneCookie) => {
    const newFavouriteFortuneCookies = [...favouriteFortuneCookies].filter(
      (elem) => elem.id !== cookie.id
    );
    setFavouriteFortuneCookies(newFavouriteFortuneCookies);
    localStorage.setItem(
      "favouriteFortuneCookies",
      JSON.stringify(newFavouriteFortuneCookies)
    );
  };

  useEffect(() => {
    const initialCookies = JSON.parse(
      localStorage.getItem("favouriteFortuneCookies") || "[]"
    );

    setFavouriteFortuneCookies(initialCookies);
  }, []);

  return (
    <div>
      {favouriteFortuneCookies.length ? (
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {favouriteFortuneCookies
              .filter((_, i) => i % 3 === 0)
              .map((cookie) => (
                <Card key={cookie.id}>
                  <Article
                    cookie={cookie}
                    handleIsCookieFavourite={removeFromFavourtire}
                    isFavouriteCookie={true}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {favouriteFortuneCookies
              .filter((_, i) => i % 3 === 1)
              .map((cookie) => (
                <Card key={cookie.id}>
                  <Article
                    cookie={cookie}
                    handleIsCookieFavourite={removeFromFavourtire}
                    isFavouriteCookie={true}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {favouriteFortuneCookies
              .filter((_, i) => i % 3 === 2)
              .map((cookie) => (
                <Card key={cookie.id}>
                  <Article
                    cookie={cookie}
                    handleIsCookieFavourite={removeFromFavourtire}
                    isFavouriteCookie={true}
                  />
                </Card>
              ))}
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>SOON</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  No cookies!
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  You haven't saved yet any fortunes.
                  <br />
                  Go to{" "}
                  <Link
                    href="/fortune-cookies"
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                  >
                    Fortune cookies
                  </Link>{" "}
                  to re gerate new fortune cookies.
                </p>
              </article>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

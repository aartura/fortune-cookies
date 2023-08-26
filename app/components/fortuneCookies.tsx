"use client";
import { useEffect, useRef, useState } from "react";
import { Article } from "./article";
import { Card } from "./card";
import { FortuneCookie } from "@/types/types";
import { webScoketUrl } from "../constants/constants";

export const FortuneCookies: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [fortuneCookies, setFortuneCookies] = useState<FortuneCookie[]>([]);
  const [favouriteFortuneCookies, setFavouriteFortuneCookies] = useState<
    FortuneCookie[]
  >([]);

  const socket = useRef<WebSocket>();
  function connect() {
    socket.current = new WebSocket(webScoketUrl);

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setFortuneCookies((prev) => [data, ...prev]);
    };
    socket.current.onclose = () => {
      setIsConnected(false);
    };
    socket.current.onerror = () => {
      console.log("Socket error");
    };
  }

  const handleConnectionButton = () => {
    if (!isConnected) {
      connect();
    } else {
      closeConnection();
    }

    setIsConnected((prev) => !prev);
  };

  const closeConnection = async () => {
    socket.current?.close();
  };

  useEffect(() => {
    const prevFortuneCookies = sessionStorage.getItem("fortuneCookies");
    if (prevFortuneCookies) {
      const prevFortuneCookiesParsed = JSON.parse(prevFortuneCookies);
      setFortuneCookies((prev) => [...prevFortuneCookiesParsed, ...prev]);
    }
  }, []);

  useEffect(
    () => () => {
      closeConnection();
    },
    []
  );

  useEffect(() => {
    if (fortuneCookies.length) {
      sessionStorage.setItem("fortuneCookies", JSON.stringify(fortuneCookies));
    }
  }, [fortuneCookies]);

  const handleIsCookieFavourite = (
    cookie: FortuneCookie,
    isFavourite: boolean
  ) => {
    if (isFavourite) {
      const newFavouriteFortuneCookies = [...favouriteFortuneCookies, cookie];
      setFavouriteFortuneCookies(newFavouriteFortuneCookies);
    } else {
      const newFavouriteFortuneCookies = [...favouriteFortuneCookies].filter(
        (elem) => elem.id !== cookie.id
      );
      setFavouriteFortuneCookies(newFavouriteFortuneCookies);
    }
  };

  useEffect(() => {
    setFavouriteFortuneCookies(
      JSON.parse(localStorage.getItem("favouriteFortuneCookies") || "[]")
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favouriteFortuneCookies",
      JSON.stringify(favouriteFortuneCookies)
    );
  }, [favouriteFortuneCookies]);

  const isCookieFavourite = (id: number): boolean => {
    return favouriteFortuneCookies.some((elem) => elem.id === id);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
        To {isConnected ? "stop" : "start"} receiving fortune cookies press the
        button
      </h3>

      <div
        className="cursor-pointer w-fit my-8"
        onClick={handleConnectionButton}
        tabIndex={1}
      >
        <Card>
          <article className="w-fit p-4">
            <div className="bottom-4">
              <p className="block text-zinc-200 hover:text-zinc-50">
                {isConnected ? "STOP" : "START"}
              </p>
            </div>
          </article>
        </Card>
      </div>

      <div className="hidden w-full h-px md:block bg-zinc-800 my-8" />
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {fortuneCookies
            .filter((_, i) => i % 3 === 0)
            .map((cookie) => (
              <Card key={cookie.id}>
                <Article
                  cookie={cookie}
                  handleIsCookieFavourite={handleIsCookieFavourite}
                  isFavouriteCookie={isCookieFavourite(cookie.id)}
                />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {fortuneCookies
            .filter((_, i) => i % 3 === 1)
            .map((cookie) => (
              <Card key={cookie.id}>
                <Article
                  cookie={cookie}
                  handleIsCookieFavourite={handleIsCookieFavourite}
                  isFavouriteCookie={isCookieFavourite(cookie.id)}
                />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {fortuneCookies
            .filter((_, i) => i % 3 === 2)
            .map((cookie) => (
              <Card key={cookie.id}>
                <Article
                  cookie={cookie}
                  handleIsCookieFavourite={handleIsCookieFavourite}
                  isFavouriteCookie={isCookieFavourite(cookie.id)}
                />
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

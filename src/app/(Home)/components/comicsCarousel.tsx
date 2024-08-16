"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Comic {
  [key: string]: any;
}
const ComicsCarousel = () => {
  const [comicsApi, setComicsApi] = useState<Comic[]>([]);
  const [eventsApi, setEventsApi] = useState<Comic[]>([]);

  // useEffect(() => {
  //   const getApiEvents = async () => {
  //     const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`;
  //     const MaxResponse = 73;
  //     const offSet = Math.floor(Math.random() * MaxResponse + 1);

  //     const apiUrl = `http://gateway.marvel.com/v1/public/events?limit=1&offset=${offSet}&${authentication}`;
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     const newEvents = data.data.results[0];

  //     setEventsApi((prevEventsApi) => [...prevEventsApi, newEvents]);
  //   };

  //   if (eventsApi.length < 5) {
  //     getApiEvents();
  //   }
  // }, [eventsApi]);

  // if (eventsApi.length >= 6) {
  //   console.log("EventsApi:");
  //   console.log(eventsApi);
  // }

  useEffect(() => {
    const getApiComics = async () => {
      const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`;
      const MaxResponse = 61055;
      const offSet = Math.floor(Math.random() * MaxResponse + 1);

      const apiUrl = `http://gateway.marvel.com/v1/public/comics?limit=1&offset=${offSet}&${authentication}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const newComics = data.data;

      setComicsApi((prevComicsApi) => [...prevComicsApi, newComics]);
    };

    if (comicsApi.length < 7) {
      getApiComics();
    }
    return;
  }, [comicsApi]);

  if (comicsApi.length >= 8) {
    console.log("ComicsApi:");
    console.log(comicsApi);
  }

  return (
    <>
      <Carousel className="m-auto w-[calc(100%-6rem)] min-w-56 lg:max-w-lg">
        <CarouselContent className="-ml-1">
          {comicsApi.map((comic, index) => (
            <CarouselItem
              key={comic.results[0].id}
              className="basis-1/3 pl-2 md:pl-4 lg:basis-1/5"
            >
              <Card className="m-auto h-32 w-full max-w-36">
                <CardContent className="flex h-full flex-col items-center justify-evenly p-0">
                  <Image
                    src={`${comic.results[0].thumbnail.path}/detail.${comic.results[0].thumbnail.extension}`}
                    alt={comic.results[0].title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-20"
                  />
                  <p
                    className="w-full truncate p-2 font-semibold"
                    title={comic.results[0].title}
                  >
                    {comic.results[0].title}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-4 w-5" />
        <CarouselNext className="h-4 w-5" />
      </Carousel>
    </>
  );
};

export default ComicsCarousel;

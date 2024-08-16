"use client";

import Image from "next/image";
import Header from "@/components/ui/header";
import ComicsCarousel from "./components/comicsCarousel";

// import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// interface Comic {
//   [key: string]: any;
// }

export default function Home() {
  // const [comicsApi, setComicsApi] = useState<Comic[]>([]);
  // const [eventsApi, setEventsApi] = useState<Comic[]>([]);

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

  // useEffect(() => {
  //   const getApiComics = async () => {
  //     const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`;
  //     const MaxResponse = 61055;
  //     const offSet = Math.floor(Math.random() * MaxResponse + 1);

  //     const apiUrl = `http://gateway.marvel.com/v1/public/comics?limit=1&offset=${offSet}&${authentication}`;
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     const newComics = data.data.results[0];

  //     setComicsApi((prevComicsApi) => [...prevComicsApi, newComics]);
  //   };

  //   if (comicsApi.length < 5) {
  //     getApiComics();
  //   }
  //   return;
  // }, [comicsApi]);

  // if (comicsApi.length >= 6) {
  //   console.log("ComicsApi:");
  //   console.log(comicsApi);
  // }
  return (
    <>
      <Header></Header>
      <Image
        src="/background-home.jpg"
        alt="Background home"
        width={0}
        height={0}
        sizes="100vw"
        className="m-auto w-full md:w-4/5"
      />
      <ComicsCarousel></ComicsCarousel> 

      {/* <Carousel className="m-auto w-full max-w-64 sm:max-w-2xl">
        <CarouselContent className="-ml-2">
          {comicsApi.map((comic, index) => (
            <CarouselItem
              key={comic.id}
              className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
            >
              <Card className="h-72">
                <CardContent className="flex h-full flex-col items-center justify-evenly p-0">
                  <Image
                    src={`${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-36"
                  />
                  <p
                    className="w-full truncate p-2 font-semibold"
                    title={comic.title}
                  >
                    {comic.title}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <h2>2</h2>
    </>
  );
}

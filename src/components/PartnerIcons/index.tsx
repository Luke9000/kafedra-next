'use client'

import * as React from "react";
import Image from "next/image";
import { list } from "./list";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PartnerIcons() {
  return (
    <div className=" mb-14">
      <div className="flex-row  align-middle w-full justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="w-full "
        >
          <CarouselContent className="flex-row ">
            {list.map((item: string, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div className="">
                  <Image
                    width={200}
                    height={200}
                    src={item}
                    alt="название компании"
                    className="object-contain h-30"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* <p className="main-sub-text flex-row justify-center align-middle text-center mb-4">
        Партнеры кафедры
      </p> */}
    </div>
  );
}

{
  /* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */
}

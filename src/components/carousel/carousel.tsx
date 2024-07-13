"use client";

import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCarousel,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

type Props = {
  children: React.ReactNode;
  time?: number;
};

export const Carousel = ({ children, time = 5000 }: Props) => {
  return (
    <ShadCarousel
      plugins={[
        Autoplay({
          delay: time,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent>{children}</CarouselContent>
      <div className="flex items-center gap-3 justify-end mt-10">
        <CarouselPrevious className="relative top-0 left-0" />
        <CarouselNext className="relative top-0 left-0" />
      </div>
    </ShadCarousel>
  );
};

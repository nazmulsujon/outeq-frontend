import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { brands } from "@/assets/constant";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Brands: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
  }, [api]);

  const handleNextClick = () => {
    if (api) api.scrollNext();
  };

  const handlePrevClick = () => {
    if (api) api.scrollPrev();
  };

  return (
    <section className="mt-6 md:mt-10">
      <MaxWidthWrapper>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full flex justify-between items-center space-x-1 border-t border-b border-foreground/30 py-1"
        >
          <div>
            <Button
              onClick={handlePrevClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </div>
          <CarouselContent className="">
            {brands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 md:basis-1/10 lg:basis-1/12"
              >
                <div className="size-full">
                  <img
                    className="size-full"
                    src={brand.image}
                    alt={brand.alt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <Button
              onClick={handleNextClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default Brands;

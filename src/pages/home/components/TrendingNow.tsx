import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "@/components/SectionTitle";
import TransparentProductCard from "@/components/TransparentProductCard";
import { products } from "@/assets/constant";

const TrendingNow: React.FC = () => {
  return (
    <section className="mt-6 md:mt-10">
      <MaxWidthWrapper>
        <SectionTitle title="Trending Now" />

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="">
            {products.slice(0, 12).map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div className="p-1">
                  <TransparentProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default TrendingNow;

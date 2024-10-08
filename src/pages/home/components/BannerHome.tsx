import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface BannerImage {
  src: string;
  alt: string;
}

const bannerImages: BannerImage[] = [
  {
    src: "/banners/banner-1.png",
    alt: "banner image",
  },
  {
    src: "/banners/banner-2.jpg",
    alt: "banner image",
  },
  {
    src: "/banners/banner-3.jpg",
    alt: "banner image",
  },
];

export default function BannerHome() {
  return (
    <section className="my-3">
      <MaxWidthWrapper className="grid grid-cols-3 gap-4 justify-center">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="banner-swiper w-full h-[320px] md:h-[400px] col-span-3 md:col-span-2 rounded-lg"
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center bg-white h-full w-full rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex md:flex-col w-full h-full md:gap-y-4 col-span-3 md:col-span-1 gap-4 md:space-x-0">
          <img
            className="w-[48%] md:w-full h-40 md:h-48 rounded-lg"
            src="/banners/banner-4.png"
            alt="banner image"
          />
          <img
            className="w-[48%] md:w-full h-40 md:h-48 rounded-lg"
            src="/banners/banner-5.png"
            alt="banner image"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

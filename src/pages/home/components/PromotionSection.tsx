import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Promotion {
  imgSrc: string;
  promotionTitle: string;
  promotionPath: string;
}

const promotions: Promotion[] = [
  {
    imgSrc: "/promotions/promotion-1.png",
    promotionTitle: "Limited Weekly Discount",
    promotionPath: "#",
  },
  {
    imgSrc: "/promotions/promotion-2.png",
    promotionTitle: "Best Recommended Gaming Setup",
    promotionPath: "#",
  },
  {
    imgSrc: "/promotions/promotion-3.png",
    promotionTitle: "Professional Camera Lens",
    promotionPath: "#",
  },
];

const PromotionSection: React.FC = () => {
  return (
    <section className="mt-6">
      <MaxWidthWrapper className="grid md:grid-cols-3 gap-4">
        {promotions.map((promotion, index) => (
          <div className="h-11/12 relative" key={index}>
            <AspectRatio ratio={16 / 8}>
              <img
                src={promotion.imgSrc}
                alt="promotion image"
                className="h-full w-full rounded-lg object-cover"
              />
            </AspectRatio>
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 space-y-12">
              <h3 className="text-white text-xl max-w-[220px] leading-normal text-wrap">
                {promotion.promotionTitle}
              </h3>
              <Link
                to={promotion.promotionPath}
                className={`${buttonVariants({
                  size: "sm",
                })} text-[11px] w-28 bg-gradient-primary`}
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default PromotionSection;

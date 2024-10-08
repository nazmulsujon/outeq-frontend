import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { products } from "@/assets/constant";
import { Separator } from "@/components/ui/separator";

const PopularProducts: React.FC = () => {
  return (
    <section className="mt-6 md:mt-10">
      <MaxWidthWrapper>
        <div className="bg-[#F3F3F3] px-4 rounded-lg py-4">
          <div className="text-left mb-4">
            <h2 className="font-semibold">Popular Products</h2>
            <Separator className="bg-foreground/30 h-px mt-1" />
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {products.slice(0, 24).map((product, index) => (
              <div key={index} className="flex justify-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PopularProducts;

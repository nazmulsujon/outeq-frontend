import { products } from "@/assets/constant";
import { Button } from "@/components/ui/button";
import { Bookmark, ShoppingCart } from "lucide-react";
import React from "react";

interface RecentlyViewdProps {
  // Define props here
}

const RecentlyViewd: React.FC<RecentlyViewdProps> = ({}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-[#37a9fd] border-b border-b-foreground/50 pb-0.5 lg:mt-1.5 mt-4">
        Recently Viewed
      </h2>
      <div className="flex flex-col space-y-4 md:grid grid-cols-2 md:space-y-0 md:gap-4 lg:flex lg:flex-col">
        {products.slice(0, 3).map((product, index) => (
          <div
            key={index}
            className="flex overflow-hidden bg-[#F3F3F3] rounded-sm shadow"
          >
            <div className="p-3 w-32 h-24">
              <img
                className="w-full h-24 rounded-md object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="w-2/3 p-4 md:p-4 text-left flex flex-col justify-between">
              <div className="mb-1">
                <h1 className="font-semibold max-w-sm truncate">
                  {product.name}
                </h1>
                <p className="font-semibold text-sm text-[#37a9fd]">
                  tk {product.price}
                </p>
              </div>

              <div className="flex justify-between mt-3 item-center">
                <Button size="sm" className="bg-gradient-primary text-xs px-4">
                  Buy Now
                </Button>
                <Button className="bg-transparent hover:bg-transparent px-0 text-foreground/75 shadow-none text-sm">
                  <Bookmark className="size-4 me-0.5" /> save
                </Button>
                <Button className="bg-transparent hover:bg-transparent px-0 text-foreground/75 shadow-none text-sm">
                  <ShoppingCart className="size-4 me-0.5" /> cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewd;

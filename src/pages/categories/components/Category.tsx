import { Product } from "@/types/global";
import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@radix-ui/react-separator";
import { SlidersHorizontal } from "lucide-react";

interface CategoryProps {
  categoryBanner: string;
  title: string;
  products: Product[];
}

// price ranges
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Below Tk 1,000", min: 0, max: 1000 },
  { label: "Tk 1,000 - Tk 5,000", min: 1000, max: 5000 },
  { label: "Above Tk 5,000", min: 5000, max: Infinity },
];

const Category: React.FC<CategoryProps> = ({
  categoryBanner,
  title,
  products,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (minPrice: number, maxPrice: number) => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <section>
      <div>
        <img
          className="h-60 w-full object-cover rounded-lg"
          src={categoryBanner}
          alt={`${title} banner img`}
        />
      </div>
      <div className="mt-6 md:mt-10 bg-[#F3F3F3] p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">{title}</h2>

          <Menubar className="bg-transparent border-0 shadow-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <SlidersHorizontal className="size-5" />
              </MenubarTrigger>
              <MenubarContent
                align="center"
                className="min-w-[9rem] text-center"
              >
                {priceRanges.map((range, index) => (
                  <MenubarItem
                    key={index}
                    className="text-xs cursor-pointer"
                    onClick={() => handleFilter(range.min, range.max)}
                  >
                    {range.label}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <Separator className="bg-foreground/30 h-px mt-1" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 py-2">
          {filteredProducts.slice(0, 12).map((product, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

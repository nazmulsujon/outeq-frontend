import { Product } from "@/types/global";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { Link } from "react-router-dom";

interface TransparentProductCardProps {
  product: Product;
}

const TransparentProductCard: React.FC<TransparentProductCardProps> = ({
  product,
}) => {
  return (
    <Card className="size-full bg-transparent shadow-none border-none">
      <CardContent className="p-0">
        <div className="text-right mb-1.5">
          <Badge className="bg-gradient-primary text-[10px] rounded-lg h-4 px-1 font-thin">
            {product.discount}% off
          </Badge>
        </div>
        <AspectRatio ratio={16 / 15} className="bg-muted">
          <img
            src={product.image}
            alt={`${product.name} image`}
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>

        <div className="space-y-[3px] mb-4 mt-2">
          <p className="text-xs font-medium max-w-sm truncate">
            {product.name}
          </p>
          <p className="text-[10px] font-thin flex items-center space-x-[1px]">
            <span>tk {product.price}</span>
            <Dot size={12} color="gray" />
            <del>tk {product.originalPrice}</del>
          </p>
        </div>
        <div className="flex justify-between items-center space-x-1">
          <Link
            to="/product-details/1"
            className={`${buttonVariants({
              size: "sm",
            })} bg-gradient-primary text-[10px] h-5`}
          >
            Buy Now
          </Link>
          <Link
            to="/product-details/1"
            className={`${buttonVariants({
              size: "sm",
            })} bg-gradient-to-r from-[#2f94fd] to-[#3ebefd] rounded-md !p-[2px] h-5`}
          >
            <span className="flex justify-center items-center text-[10px] font-medium text-nowrap w-full h-full bg-white text-black rounded-md px-2">
              Add to Cart
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransparentProductCard;

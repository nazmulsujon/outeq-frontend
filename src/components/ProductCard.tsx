import { Product } from "@/types/global";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Rating, Star } from "@smastrom/react-rating";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="w-full border-none shadow-sm rounded cursor-pointer"
      onClick={() => navigate("/product-details/1")}
    >
      <CardContent className="p-2 pb-px">
        <AspectRatio
          ratio={16 / 15}
          className="w-full h-auto relative mx-auto overflow-hidden"
        >
          <img
            src={product.image}
            alt={`${product.name} image`}
            className="w-full h-auto relative z-0 transition-all duration-500 hover:scale-110 ease-in"
          />
        </AspectRatio>

        <div className="mt-3 space-y-1">
          <p className="text-xs font-medium max-w-sm truncate">
            {product.name}
          </p>

          <div>
            <Rating
              style={{ maxWidth: 60 }}
              value={product.rating}
              readOnly
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#f59e0b",
                inactiveFillColor: "#e5e7eb",
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-medium flex items-center">
            tk {product.price}
          </p>

          <div>
            <Button
              size="icon"
              variant="ghost"
              className="p-0 rounded-full size-7"
            >
              <Heart size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="p-0 rounded-full size-7"
            >
              <ShoppingCart size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { FC, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/types/global";

interface CartProductQuantityProps {
  products: Product[];
}

const CartProductQuantity: FC<CartProductQuantityProps> = ({ products }) => {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleIncrease = (index: number) => {
    setQuantities((prev) =>
      prev.map((quantity, i) => (i === index ? quantity + 1 : quantity))
    );
  };

  const handleDecrease = (index: number) => {
    setQuantities((prev) =>
      prev.map((quantity, i) =>
        i === index ? Math.max(1, quantity - 1) : quantity
      )
    );
  };

  return (
    <div className="mt-4 md:mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Product</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-left">Subtotal</TableHead>
            <TableHead className="sr-only">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.slice(0, 3).map((product, index) => (
            <TableRow
              key={index}
              className="bg-[#F3F3F3] rounded-sm shadow w-full"
            >
              <TableCell>
                <div className="flex items-center">
                  <div className="p-3 w-32 h-24">
                    <img
                      className="w-full h-full rounded-md object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="w-full h-full p-4 flex flex-col justify-between space-y-4">
                    <h1 className="text-sm font-semibold max-w-[180px] md:max-w-full truncate">
                      {product.name}
                    </h1>
                    <p className="text-xs font-medium text-[#64748b]">
                      Tk {product.price}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <Button
                    size="icon"
                    onClick={() => handleDecrease(index)}
                    className="w-[31px] h-[31px] bg-gradient-primary border-[#2f94fdde] rounded-none"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <Input
                    value={quantities[index]}
                    readOnly
                    className="w-[31px] h-[31px] p-0 text-center border-[#2f94fdde] rounded-none focus-visible:ring-0"
                  />
                  <Button
                    size="icon"
                    onClick={() => handleIncrease(index)}
                    className="w-[31px] h-[31px] bg-gradient-primary border-[#2f94fdde] rounded-none"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-semibold text-nowrap">
                    {`tk ${product.price * quantities[index]}`}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <Button size="icon" variant="ghost">
                  <Trash2 className="size-5 text-[#64748b]" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartProductQuantity;

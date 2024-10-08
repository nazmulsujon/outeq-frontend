import React, { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { productDetails } from "@/assets/constant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import RelatedProducts from "./components/RelatedProducts";
import ProductInfo from "./components/ProductInfo";

const ProductDetails: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(
    productDetails.images.default
  );
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleColorChange = (color: string) => {
    if (color in productDetails.images.colorImages) {
      const colorImage =
        productDetails.images.colorImages[
          color as keyof typeof productDetails.images.colorImages
        ];
      setCurrentImage(colorImage);
    }
  };

  return (
    <React.Fragment>
      <section>
        <MaxWidthWrapper className="grid grid-cols-12 gap-4 my-4 md:my-6 justify-between">
          <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-1/2">
              <div className="flex items-center justify-center h-80">
                <img
                  src={currentImage}
                  alt={`Product image`}
                  className="w-full h-full object-center rounded-lg"
                />
              </div>

              <div className="h-20 mt-4 grid grid-cols-3 gap-8">
                {productDetails.images.thumbnailImages.map(
                  (thumbSrc, index) => (
                    <div
                      key={index}
                      className={`h-20 ${
                        currentImage === thumbSrc ? "opacity-100" : "opacity-40"
                      }`}
                      onClick={() => setCurrentImage(thumbSrc)}
                    >
                      <img
                        src={thumbSrc}
                        alt={`Thumbnail image ${index + 1}`}
                        className="cursor-pointer w-full h-full rounded-lg"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div className="space-y-4">
                <p>
                  Brand:{" "}
                  <span className="font-medium">
                    {productDetails.specification.brand}
                  </span>
                </p>
                <h2 className="text-xl font-bold">{productDetails.name}</h2>
                <div className="md:flex gap-2 space-y-4 md:space-y-0">
                  <Badge className="bg-[#BFDEFE] hover:bg-[#BFDEFE] text-foreground/90 font-normal">
                    Cash Discount Price:
                    <del className="ms-1">
                      {" "}
                      tk {productDetails.originalPrice}
                    </del>
                    <span className="ml-1 font-semibold">
                      tk {productDetails.price}
                    </span>
                  </Badge>
                  <Badge className="bg-[#BFDEFE] hover:bg-[#BFDEFE] text-foreground/75 font-normal">
                    Status:{" "}
                    <span className="font-medium">{productDetails.status}</span>
                  </Badge>
                </div>
                <Badge className="bg-[#BFDEFE] hover:bg-[#BFDEFE] text-foreground/75 font-normal">
                  Product Code: {productDetails.productCode}
                </Badge>

                <ul className="font-semibold leading-snug text-xs">
                  <li className="list-disc list-inside">
                    Pro-Book Amount - {productDetails.proBookAmount}
                  </li>
                  <li className="list-disc list-inside">
                    {productDetails.warranty.support}
                  </li>
                </ul>

                <div className="flex gap-4 items-center">
                  <span>Color: </span>
                  <div className="flex gap-2">
                    {productDetails.colors.map((color, index) => {
                      const colorImage =
                        productDetails.images.colorImages[
                          color.name as keyof typeof productDetails.images.colorImages
                        ];

                      return (
                        <div
                          key={index}
                          className={`border-2 flex justify-center items-center p-1 md:p-0.5 md:py-1 rounded-lg ${
                            currentImage === colorImage
                              ? "border-[#2f94fdde]"
                              : "border-gray-400"
                          }`}
                        >
                          <Button
                            className="p-0"
                            onClick={() => handleColorChange(color.name)}
                          >
                            <span
                              style={{ backgroundColor: color.hex }}
                              className="rounded w-10 h-10"
                            />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 mt-4 md:mt-0">
                <div className="flex items-center">
                  <Button
                    size="icon"
                    onClick={handleDecrease}
                    className="w-[31px] h-[31px] bg-gradient-primary border-[#2f94fdde] rounded-none"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <Input
                    value={quantity}
                    readOnly
                    className="w-[31px] h-[31px] p-0 text-center border-[#2f94fdde] rounded-none focus-visible:ring-0"
                  />
                  <Button
                    size="icon"
                    onClick={handleIncrease}
                    className="w-[31px] h-[31px]  bg-gradient-primary border-[#2f94fdde] rounded-none"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>

                <Button size="sm" className="bg-gradient-primary px-6">
                  Pre-order
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full max-h-[400px] hidden md:block">
            <AspectRatio ratio={4 / 6} className="flex justify-end">
              <img
                src="/vartical-img.png"
                alt="Photo by Drew Beamer"
                className="h-full max-w-[220px] rounded-md"
              />
            </AspectRatio>
          </div>
        </MaxWidthWrapper>
      </section>
      <RelatedProducts />
      <ProductInfo productDetails={productDetails} />
    </React.Fragment>
  );
};

export default ProductDetails;

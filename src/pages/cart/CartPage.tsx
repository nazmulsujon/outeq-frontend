import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CartProductQuantity from "./components/CartProductQuantity";
import GiftPresentation from "./components/GiftPresentation";
import PriceDetails from "./components/PriceDetails";
import MightAlsoLike from "./components/MightAlsoLike";
import { Modal } from "@/components/Modal";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/assets/constant";
import EmptyCart from "./components/EmptyCart";

interface CartPageProps {
  // Define props here
}

const CartPage: React.FC<CartPageProps> = ({}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleAddressChange = () => {
    console.log("Address changed");
    setShowModal(false);
  };
  return (
    <React.Fragment>
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <section>
          <MaxWidthWrapper className="md:grid grid-cols-12 gap-8 mt-4 md:mt-6">
            <div className="col-span-8">
              <div className="space-y-4">
                <Alert className="flex justify-between items-center bg-[#F3F3F3] border-0">
                  <div className="space-y-2">
                    <AlertTitle className="font-bold">
                      Your location here{" "}
                    </AlertTitle>
                    <AlertDescription className="text-xs">
                      Full address with details for delivery <br /> purpose
                    </AlertDescription>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-primary"
                    onClick={handleOpenModal}
                  >
                    Change address
                  </Button>

                  <Modal
                    open={showModal}
                    setOpen={setShowModal}
                    title="Edit address"
                  >
                    <div className="grid gap-4">
                      <div className="">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          defaultValue="Nazmul Hoque"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="phone_number" className="text-right">
                          Phone number
                        </Label>
                        <Input
                          type="tel"
                          id="phone_number"
                          defaultValue="01776097768"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="address" className="text-right">
                          Address
                        </Label>
                        <Textarea
                          id="address"
                          defaultValue="274, Chitalia House, C H Street, Marine Lines Chitalia House, C H Street, Marine Lines City: Mumbai"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleAddressChange}
                        type="submit"
                        size="sm"
                        className="w-32 bg-gradient-primary"
                      >
                        Save changes
                      </Button>
                    </div>
                  </Modal>
                </Alert>

                <Alert className="space-y-2 bg-[#F3F3F3] border-0">
                  <AlertTitle className="font-bold">
                    Available Offers
                  </AlertTitle>
                  <AlertDescription className="text-xs">
                    Full address with details for delivery <br /> purpose
                  </AlertDescription>

                  <Link
                    to="/offers"
                    className="text-[#37a9fd] flex items-center"
                  >
                    See more{" "}
                    <MoveUpRight className="size-4 text-[#37a9fd] ms-1" />
                  </Link>
                </Alert>
              </div>

              <CartProductQuantity products={products} />
            </div>

            <div className="col-span-4 space-y-4 md:space-y-16">
              <GiftPresentation />
              <PriceDetails />
            </div>
          </MaxWidthWrapper>

          <MightAlsoLike />
        </section>
      )}
    </React.Fragment>
  );
};

export default CartPage;

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { useState } from "react";
import AddressForm from "./components/AddressForm";
import OrderDetails from "./components/OrderDetails";

interface AddressPageProps {
  // Define props here
}

const AddressPage: React.FC<AddressPageProps> = ({}) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <section>
      <MaxWidthWrapper className="md:grid grid-cols-12 gap-8 mt-4 md:mt-6">
        <div className="col-span-8 w-full">
          <div className="space-y-4 w-full">
            <h2 className="font-bold">Select Delivery Address</h2>

            <Tabs
              value={paymentMethod}
              onValueChange={(value) => setPaymentMethod(value)}
              className="w-full"
            >
              <TabsList className="bg-[#F3F3F3] w-full lg:w-8/12">
                <TabsTrigger value="cash" className="w-1/2">
                  {paymentMethod === "cash" && (
                    <Check className="size-5 text-green-600 mr-1" />
                  )}
                  Cash On Delivery
                </TabsTrigger>
                <TabsTrigger value="online" className="w-1/2">
                  {paymentMethod === "online" && (
                    <Check className="size-5 text-green-600 mr-1" />
                  )}
                  Online Payment
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <AddressForm />
          </div>
        </div>

        <div className="col-span-4 mt-6 md:mt-0 hidden md:block">
          <OrderDetails />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AddressPage;

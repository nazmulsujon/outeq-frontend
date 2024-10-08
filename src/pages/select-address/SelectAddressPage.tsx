import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import DeliveryEstimates from "./components/DeliveryEstimates";
import PriceDetails from "../cart/components/PriceDetails";

interface SelectAddressPageProps {
  //
}

const address = {
  defaultAddress: {
    name: "Nazmul Hoque",
    phone_number: "01788605578",
    address:
      "274, Chitalia House, C H Street, Marine Lines Chitalia House, C H Street, Marine Lines City: Mumbai",
    addressType: "Home",
  },
  otherAddress: [
    {
      name: "John Doe",
      phone_number: "01788605578",
      address:
        "274, Chitalia House, C H Street, Marine Lines Chitalia House, C H Street, Marine Lines City: Mumbai",
      addressType: "Home",
    },
    {
      name: "David",
      phone_number: "01788605578",
      address:
        "274, Chitalia House, C H Street, Marine Lines Chitalia House, C H Street, Marine Lines City: Mumbai",
      addressType: "Office",
    },
  ],
};

const SelectAddressPage: React.FC<SelectAddressPageProps> = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>("default");

  const handleAddressSelection = (address: string) => {
    setSelectedAddress(address);
  };

  console.log("selectedAddress", selectedAddress);

  return (
    <section>
      <MaxWidthWrapper className="md:grid grid-cols-12 gap-8 mt-4 md:mt-6">
        <div className="col-span-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Select Delivery Address </h2>

              <Button size="sm" variant="outline" className="border-[#37a9fd]">
                Change address
              </Button>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Default Address</h3>
              <RadioGroup
                value={selectedAddress}
                onValueChange={() => handleAddressSelection("default")}
                className="flex justify-between items-start space-x-2 md:space-x-8 bg-[#FBFBFB] shadow p-4 rounded-lg"
              >
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" />
                    <h4 className="font-bold">{address.defaultAddress.name}</h4>
                  </div>

                  <p className="text-xs">{address.defaultAddress.address}</p>
                  <p className="text-xs">
                    Mobile:{" "}
                    <span className="font-medium">
                      {address.defaultAddress.phone_number}
                    </span>
                  </p>

                  {selectedAddress === "default" && (
                    <div className="flex items-center space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#37a9fd] h-6 px-2"
                      >
                        Remove
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#37a9fd] h-6 px-2"
                      >
                        Edit
                      </Button>
                    </div>
                  )}
                </div>
                <div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#3AE741] text-[#3AE741] h-5 hover:text-[3AE741] hover:bg-white px-2"
                  >
                    {address.defaultAddress.addressType}
                  </Button>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold mb-2">Other Address</h3>
              {address.otherAddress.map((otherAddr, index) => (
                <RadioGroup
                  key={index}
                  value={selectedAddress}
                  onValueChange={() => handleAddressSelection(`other-${index}`)}
                  className="flex justify-between items-start space-x-2 md:space-x-8 bg-[#FBFBFB] shadow p-4 rounded-lg"
                >
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={`other-${index}`}
                        id={`other-${index}`}
                      />
                      <h4 className="font-bold">{otherAddr.name}</h4>
                    </div>

                    <p className="text-xs">{otherAddr.address}</p>
                    <p className="text-xs">
                      Mobile:{" "}
                      <span className="font-medium">
                        {otherAddr.phone_number}
                      </span>
                    </p>

                    {selectedAddress === `other-${index}` && (
                      <div className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#37a9fd] h-6 px-2"
                        >
                          Remove
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#37a9fd] h-6 px-2"
                        >
                          Edit
                        </Button>
                      </div>
                    )}
                  </div>
                  <div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#3AE741] text-[#3AE741] h-5 hover:text-[3AE741] hover:bg-white px-2"
                    >
                      {otherAddr.addressType}
                    </Button>
                  </div>
                </RadioGroup>
              ))}
            </div>

            <div className="w-full text-left">
              <Button className="w-full bg-[#FBFBFB] hover:bg-[#FBFBFB] shadow p-4 py-6 rounded-lg text-left text-[#37a9fd] flex justify-start">
                <Plus className="size-4 mr-1" />
                Add New Address
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <DeliveryEstimates />
          <PriceDetails />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SelectAddressPage;

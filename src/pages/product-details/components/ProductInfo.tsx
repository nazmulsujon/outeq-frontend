import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductDetailsType } from "@/types/global";
import Specification from "./Specification";
import Description from "./Description";
import Warranty from "./Warranty";
import RecentlyViewd from "./RecentlyViewd";

interface ProductInfoProps {
  productDetails: ProductDetailsType;
}

interface Trigger {
  value: string;
  label: string;
}

const triggerData: Trigger[] = [
  { value: "specification", label: "Specification" },
  { value: "description", label: "Description" },
  { value: "warranty", label: "Warranty" },
];

const ProductInfo: React.FC<ProductInfoProps> = ({ productDetails }) => {
  return (
    <section>
      <MaxWidthWrapper className="py-6 md:py-10 lg:grid grid-cols-12 gap-8">
        <Tabs defaultValue="specification" className="w-full md:col-span-8">
          <TabsList className="border-b-2 border-b-foreground/50 w-full justify-start bg-transparent rounded-none pb-0 gap-x-2 px-0">
            {triggerData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                className="text-xs rounded-t-md rounded-b-none focus-visible:ring-none data-[state=active]:bg-[#37a9fd] data-[state=active]:text-white data-[state=active]:shadow-none border-2 border-b-0 border-[#37a9fd] mt-1"
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="specification">
            <Specification specification={productDetails.specification} />
          </TabsContent>
          <TabsContent value="description">
            <Description description={productDetails.description} />
          </TabsContent>
          <TabsContent value="warranty">
            <Warranty warranty={productDetails.warranty} />
          </TabsContent>
        </Tabs>

        <div className="md:col-span-4 text-center">
          <RecentlyViewd />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductInfo;

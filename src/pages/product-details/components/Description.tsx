import { DescriptionType } from "@/types/global";

interface DescriptionProps {
  description: DescriptionType;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="w-full bg-slate-50 mt-6 p-4 rounded-md space-y-6 md:px-8 lg:pr-28">
      <h2 className="text-xl font-semibold mb-4 text-[#37a9fd]">Description</h2>

      <div className="text-sm space-y-2">
        <p className="font-bold">{description.productModel}</p>
        <p>{description.productDescription}</p>
      </div>

      <div className="text-sm space-y-2">
        <h3 className="font-bold">{description.productName} Features</h3>
        <ul className="list-disc list-inside">
          {description.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="text-sm space-y-2">
        <p className="font-bold">
          {description.productName} Price in Bangladesh
        </p>
        <p>{description.priceInBangladesh}</p>
      </div>

      <div className="text-sm space-y-2">
        <p className="font-bold">
          Where to buy the {description.productName} in Bangladesh?
        </p>
        <p> {description.whereToBuy}</p>
      </div>
    </div>
  );
};

export default Description;

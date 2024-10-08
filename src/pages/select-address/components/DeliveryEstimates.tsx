interface DeliveryEstimatesProps {
  // Define props here
}

const deliveryEstimates = [
  {
    name: "Smart Laptop",
    image: "/products/product-1.png",
    deliveryDate: "12 Sept, 2024",
  },
  {
    name: "Smart Phone",
    image: "/products/product-2.png",
    deliveryDate: "25 Sept, 2024",
  },
  {
    name: "Black Headphone",
    image: "/products/product-3.jpg",
    deliveryDate: "28 Sept, 2024",
  },
];

const DeliveryEstimates: React.FC<DeliveryEstimatesProps> = ({}) => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Delivery Estimates</h2>
      <div className="flex flex-col space-y-4">
        {deliveryEstimates.slice(0, 3).map((product, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="p-3 w-32 ">
              <img
                className="w-full  rounded-md object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="w-2/3 p-4 md:p-4 text-left flex flex-col justify-between">
              <div className="mb-1">
                <h6 className="text-sm">
                  Estimated delivery by <br />{" "}
                  <span className="font-medium">{product.deliveryDate}</span>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryEstimates;

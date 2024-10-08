const OrderDetails = () => {
  return (
    <div>
      <h5 className="font-bold mb-2">Your Order</h5>
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-center">
          <p>Product Name</p>
          <p>Tk 1000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#37a9fd]">Discount</p>
          <p>Tk 1000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#37a9fd]">Total Price</p>
          <p>Tk 1000</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

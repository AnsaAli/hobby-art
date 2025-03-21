import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  let cartItem = useSelector((state) => state.cart.cart);
 
  let totalNumOfQuantity = cartItem.reduce((acc, curr) => acc + curr.quantity, 0);
  let sum = cartItem.reduce((acc,curr)=> acc += curr.price,0)
  if (cartItem.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#eaf8fd6b]">
        <p className="text-lg font-semibold text-black">No items in the cart</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center relative p-4">
    {/* Table for larger screens */}
    <div className="hidden md:block">
      <table className="border-collapse border border-gray-300 shadow-xl bg-[#eaf8fd6b] w-full">
        <thead>
          <tr>
            <th className="border border-gray-900 px-6 py-3">Image</th>
            <th className="border border-gray-900 px-6 py-3">Name</th>
            <th className="border border-gray-900 px-6 py-3">Number of Items</th>
            <th className="border border-gray-900 px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {cartItem.map((item, index) => (
            <tr key={index} className="border border-gray-900 text-center">
              <td className="border border-gray-900 px-6 py-3">
                <img src={item.img[0]} alt={item.name} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="border border-gray-900 px-6 py-3">{item.name}</td>
              <td className="border border-gray-900 px-6 py-3">{item.quantity}</td>
              <td className="border border-gray-900 px-6 py-3">Rs: {item.price * item.quantity}</td>
            </tr>
          ))}
          <tr className="border border-gray-900 text-center font-bold ">
            <td></td>
            <td className=" px-6 py-3 text-lg">Total</td>
            <td className="border border-gray-900 px-6 py-3">{totalNumOfQuantity}</td>
            <td className="border border-gray-900 px-6 py-3 bg-green-300">Rs: {sum}</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Card-style list for smaller screens */}
    <div className="block md:hidden w-full space-y-4">
      {cartItem.map((item, index) => (
        <div key={index} className="bg-[#eaf8fd6b] shadow-md rounded-lg p-4 border border-gray-300">
          <div className="flex items-center space-x-4">
            <img src={item.img[0]} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-900 font-medium">Quantity: {item.quantity}</p>
              <p className="text-gray-900 font-medium">Rs: {item.price * item.quantity}</p>
            </div>
          </div>
        </div>
      ))}
      {/* Total section */}
      <div className="bg-[#eaf8fd6b] p-4 rounded-lg  text-lg text-left">
        <p className="font-normal">Total Items: <span className="font-bold">{ totalNumOfQuantity}</span> </p>
        <p className="">Total Price: <span className="font-bold "> Rs. {sum}</span> </p>
      </div>
    </div>
  </div>
  );
};

export default CartList;

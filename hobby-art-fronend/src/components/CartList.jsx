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
    <div className="flex justify-center items-center  relative">
      <table className="border-collapse border border-gray-300 shadow-xl bg-[#eaf8fd6b]">
        <thead>
          <tr className=" ">
            <th className="border border-gray-900 px-6 py-3">Image</th>
            <th className="border border-gray-900 px-6 py-3">Name</th>
           
            <th className="border border-gray-900 px-6 py-3">
              Number of Items
            </th>
            <th className="border border-gray-900 px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {cartItem.map((item, index) => (
            <tr key={index} className="border border-gray-900 text-center">
              <td className="border border-gray-900 px-6 py-3">
                {" "}
                <img
                  src={item.img[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border border-gray-900 px-6 py-3">{item.name}</td>
              <td className="border border-gray-900 px-6 py-3">
                {item.quantity}
              </td>
              <td className="border border-gray-900 px-6 py-3">Rs: {item.price}</td>

            </tr>
            
          ))}
          <tr className="border border-gray-900 text-center">
            <td></td>
            <td className="border border-gray-900 px-6 py-3 text-xl">Total</td>
            <td className="border border-gray-900 px-6 py-3">{totalNumOfQuantity}</td>
            <td className="border border-gray-900 px-6 py-3">Rs: {sum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartList;

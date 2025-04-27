import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemCards } from "./ItemCards";
import { clearCart } from "../store/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((store) => store.cart.item);
  console.log("🚀 ~ Cart ~ itemList: new", itemList);
  const handleClearCart = () => {
    console.log("clear cart");
    dispatch(clearCart());
  };
  return (
    <div className="container mx-auto max-w-[1000px] p-3">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold  ">Cart</h1>
        <button
          onClick={handleClearCart}
          className="bg-black text-white p-2 rounded-md cursor-pointer"
        >
          Clear Cart
        </button>
      </div>

      {itemList.length === 0 && (
        <h1 className="text-5xl text-center mt-[100px] font-bold">
          Cart is Empty. Add Items to Cart!
        </h1>
      )}

      <ItemCards itemCards={itemList} />
    </div>
  );
};

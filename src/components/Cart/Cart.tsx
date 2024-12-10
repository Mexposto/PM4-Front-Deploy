"use client";

import { useContext } from "react";
import { cartContext } from "@/contexts/cartContext";
import { UserContext } from "@/contexts/userContext";
import { buyOrder } from "@/services/ordersServices";
import Image from "next/image";

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext);
  const { user, updateOrders } = useContext(UserContext);

  const handleCart = async () => {
    if (!user) {
      alert("You must be logged in to complete the purchase.");
      return;
    }

    const res = await buyOrder(cart, user);
    if (res.status === "approved") {
      clearCart();
      updateOrders({ status: res.status, id: res.id, date: res.date });
      alert("Order finished!");
    } else {
      alert(res.message);
    }
  };

  const totalOrder = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <h2 className="text-xl font-semibold text-secondary">
          Please log in to view your cart.
        </h2>
      </div>
    );
  }

  if (cart.length === 0)
    return (
      <div className="flex justify-center items-center h-64">
        <h2 className="text-xl font-semibold text-secondary">Cart is empty!</h2>
      </div>
    );

  return (
    <div className="space-y-6">
      {cart.map((product, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-secondary p-4 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-lg shadow-md object-contain"
              style={{ width: "fit-content", height: "fit-content" }}
            />
            <h3 className="text-lg font-semibold text-primary m-4">
              {product.name}
            </h3>
            <p className="text-sm text-tertiary">ID: {product.id}</p>
          </div>
          <h3 className="text-xl font-bold text-accent">${product.price}</h3>
        </div>
      ))}
      <button
        className="px-6 py-3 bg-accent text-white rounded-lg w-full font-bold hover:bg-accent-dark transition"
        onClick={handleCart}
      >
        {`Buy Order (total $${totalOrder})`}
      </button>
    </div>
  );
};

export default Cart;

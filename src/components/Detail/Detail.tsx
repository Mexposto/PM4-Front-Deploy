"use client";
import { IProduct } from "@/interfaces/IProduct";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { cartContext } from "@/contexts/cartContext";
import Link from "next/link";
import Image from "next/image";

interface IDetailProps {
  product: IProduct;
}

const Detail = ({ product }: IDetailProps) => {
  const { isLogged } = useContext(UserContext);
  const { cart, setCart } = useContext(cartContext);
  const isInCart = cart.some((p) => p.id === product.id);
  const router = useRouter();

  const handleBuy = () => {
    if (isLogged()) {
      alert("Added!");
      setCart([...cart, product]);
    } else {
      alert("First Login!");
      router.push("/login");
    }
  };

  return (
    <article className="bg-secondary rounded-lg p-6 shadow-md">
      <div className="flex justify-center mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          style={{ width: "fit-content", height: "fit-content" }}
          className="rounded-lg shadow-md object-contain"
        />
      </div>
      <h4 className="text-2xl font-semibold text-primary">{product.name}</h4>
      <h3 className="text-xl font-normal text-primary">
        {product.description}
      </h3>
      <p className="text-lg text-accent mt-4">${product.price}</p>

      {!isInCart ? (
        <button
          className="mt-6 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
          onClick={handleBuy}
        >
          Add to Cart
        </button>
      ) : (
        <Link
          href="/cart"
          className="mt-6 inline-block px-6 py-2 bg-primary text-secondary rounded-lg hover:text-accent transition"
        >
          Buy your Cart
        </Link>
      )}
    </article>
  );
};

export default Detail;

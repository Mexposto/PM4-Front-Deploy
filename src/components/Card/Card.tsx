import Link from "next/link";
import { ICardProps } from "../../interfaces/ICardProps";
import Image from "next/image";

const Card = ({ product }: ICardProps) => {
  return (
    <Link href={`products/${product.id}`}>
      <article className="p-4 bg-secondary rounded-lg shadow-md transition-transform hover:scale-105 flex flex-col items-start">
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-full w-full"
          />
        </div>
        <h4 className="text-lg font-semibold text-primary mt-4">
          {product.name}
        </h4>
        <h3 className="text-xl font-bold text-accent mt-2">${product.price}</h3>
      </article>
    </Link>
  );
};

export default Card;

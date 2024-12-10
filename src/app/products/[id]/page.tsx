import { getProduct } from "@/services/productsServices";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail/Detail";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = await getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-primary mt-14 text-secondary min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <Detail product={product} />
      </div>
    </div>
  );
};

export default page;

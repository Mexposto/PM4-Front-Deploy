import Cart from "@/components/Cart/Cart";

const page = async () => {
  return (
    <div className="min-h-screen bg-primary text-secondary mt-14 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-8">Your Cart</h1>
        <Cart />
      </div>
    </div>
  );
};

export default page;

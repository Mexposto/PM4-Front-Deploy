import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import { getProducts } from "@/services/productsServices";

const page = async () => {
  const products = await getProducts();

  return (
    <div className="bg-primary text-secondary min-h-screen mt-14 py-8">
      <h1 className="text-center text-3xl font-semibold mb-8">Our Products</h1>
      <Grid>
        {products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default page;

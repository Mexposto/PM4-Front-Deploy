import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import { getFeaturedProducts } from "@/services/productsServices";

const page = async () => {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="mt-8">
      <section className="text-center py-8 bg-primary text-secondary">
        <h1 className="text-hero font-bold">Welcome to E-Store</h1>
        <p className="text-subtitle mt-4">Discover products that inspire.</p>
      </section>
      <section className="py-6 text-primary">
        <Grid>
          {featuredProducts.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default page;

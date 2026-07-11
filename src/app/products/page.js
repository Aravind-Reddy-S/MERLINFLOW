import ProductsOverview from "../../components/ProductsOverview";

export const metadata = {
  title: "Products | MerlinFlow Technologies",
  description: "Explore our next-generation ERP solutions designed for Education, Health, and Hospitality.",
};

export default function ProductsPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <ProductsOverview />
    </main>
  );
}

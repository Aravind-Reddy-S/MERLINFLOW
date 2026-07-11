import PricingSection from "../../components/PricingSection";

export const metadata = {
  title: "Pricing | MerlinFlow Technologies",
  description: "Flexible and transparent pricing plans for MerlinFlow ERP solutions.",
};

export default function PricingPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <PricingSection />
    </main>
  );
}

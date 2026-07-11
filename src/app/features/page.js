import IndustryFeatures from "../../components/IndustryFeatures";
import WhyMerlinFlow from "../../components/WhyMerlinFlow";

export const metadata = {
  title: "Features | MerlinFlow Technologies",
  description: "Discover the powerful features of MerlinFlow's next-generation ERP solutions.",
};

export default function FeaturesPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <WhyMerlinFlow />
      <IndustryFeatures />
    </main>
  );
}

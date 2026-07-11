import SecuritySection from "../../components/SecuritySection";

export const metadata = {
  title: "Security | MerlinFlow Technologies",
  description: "Enterprise-grade security and compliance for your business data.",
};

export default function SecurityPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <SecuritySection />
    </main>
  );
}

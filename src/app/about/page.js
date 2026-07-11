import AboutSection from "../../components/AboutSection";

export const metadata = {
  title: "About Us | MerlinFlow Technologies",
  description: "Learn more about MerlinFlow Technologies and our mission to empower businesses.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <AboutSection />
    </main>
  );
}

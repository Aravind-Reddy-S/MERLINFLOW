import Testimonials from "../../components/Testimonials";

export const metadata = {
  title: "Testimonials | MerlinFlow Technologies",
  description: "See what our customers have to say about MerlinFlow.",
};

export default function TestimonialsPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Testimonials />
    </main>
  );
}

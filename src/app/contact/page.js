import ContactSection from "../../components/ContactSection";

export const metadata = {
  title: "Contact Us | MerlinFlow Technologies",
  description: "Get in touch with the MerlinFlow team.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <ContactSection />
    </main>
  );
}

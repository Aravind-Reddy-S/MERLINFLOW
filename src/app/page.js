import Hero from "../components/Hero";
import LogosStrip from "../components/LogosStrip";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import WhyMerlinFlow from "../components/WhyMerlinFlow";
import HowItWorks from "../components/HowItWorks";
import IndustryFeatures from "../components/IndustryFeatures";
import ProductsOverview from "../components/ProductsOverview";
import ClientShowcase from "../components/ClientShowcase";
import IntegrationsSection from "../components/IntegrationsSection";
import Testimonials from "../components/Testimonials";
import SecuritySection from "../components/SecuritySection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <div id="hero"><Hero /></div>
      <LogosStrip />
      <StatsSection />
      <AboutSection />
      <WhyMerlinFlow />
      <HowItWorks />
      <IndustryFeatures />
      <ProductsOverview />
      <ClientShowcase />
      <IntegrationsSection />
      <SecuritySection />
      <PricingSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}


import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { WhyZipp } from "./components/WhyZipp";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <WhyZipp />
      <CTA />
      <Footer />
    </div>
  );
}

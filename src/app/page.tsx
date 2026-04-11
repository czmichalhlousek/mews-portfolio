import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import GenExperience from "@/components/GenExperience";
import MewsAlignment from "@/components/MewsAlignment";
import GrowthEngine from "@/components/GrowthEngine";
import OperationalDerisking from "@/components/OperationalDerisking";
import MewserMindset from "@/components/MewserMindset";
import DoraMetrics from "@/components/DoraMetrics";
import PathToMews from "@/components/PathToMews";
import CTA from "@/components/CTA";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Navigation />
      <Hero />
      <CompanyLogos />
      <GenExperience />
      <MewsAlignment />
      <GrowthEngine />
      <OperationalDerisking />
      <MewserMindset />
      <DoraMetrics />
      <PathToMews />
      <CTA />
    </main>
  );
}

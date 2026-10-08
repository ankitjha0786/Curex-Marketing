import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeatureShowcase from '../components/FeatureShowcase';
import HowItWorks from '../components/HowItWorks';
import AnalysisSection from '../components/AnalysisSection';
import GuidesSection from '../components/GuidesSection';
import StudioSection from '../components/StudioSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export default function HomePage() {
  return (
    <>
    
      <ScrollProgress />
      <HeroSection />
      <FeatureShowcase />
      <HowItWorks />
      <AnalysisSection />
      <GuidesSection />
      <StudioSection />
      <CTASection />
    </>
  );
}

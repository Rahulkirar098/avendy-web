
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import ShopperVendorSection from "@/components/ShopperVendorSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <CommunitySection />
      <FeaturesSection />
      <PricingSection />
      <BenefitsSection />
      <ShopperVendorSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Home;

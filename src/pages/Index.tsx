import { Navbar } from "@/components/regalia/Navbar";
import { Hero } from "@/components/regalia/Hero";
import { FeaturedCarousel } from "@/components/regalia/FeaturedCarousel";
import { LatestOffers } from "@/components/regalia/LatestOffers";
import { BrandStatement } from "@/components/regalia/BrandStatement";
import { DestinationsGrid } from "@/components/regalia/DestinationsGrid";
import { MembershipTeaser } from "@/components/regalia/MembershipTeaser";
import { Footer } from "@/components/regalia/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCarousel />
        <LatestOffers />
        <BrandStatement />
        <DestinationsGrid />
        <MembershipTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

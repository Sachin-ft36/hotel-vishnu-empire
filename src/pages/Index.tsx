import { Navbar } from "@/components/regalia/Navbar";
import { Hero } from "@/components/regalia/Hero";
import { FeaturedCarousel } from "@/components/regalia/FeaturedCarousel";
import { LatestOffers } from "@/components/regalia/LatestOffers";
import { BrandStatement } from "@/components/regalia/BrandStatement";
import { DestinationsGrid } from "@/components/regalia/DestinationsGrid";
import { MembershipTeaser } from "@/components/regalia/MembershipTeaser";
import { Footer } from "@/components/regalia/Footer";
import { CustomCursor } from "@/components/regalia/CustomCursor";

import { SignatureDining } from "@/components/regalia/SignatureDining";
import { HeritageStories } from "@/components/regalia/HeritageStories";
import { WellnessSpa } from "@/components/regalia/WellnessSpa";
import { BookingBar } from "@/components/regalia/BookingBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <CustomCursor />
      <Navbar />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <FeaturedCarousel />
        <LatestOffers />
        <BrandStatement />
        <SignatureDining />
        <DestinationsGrid />
        <HeritageStories />
        <WellnessSpa />
        <MembershipTeaser />
      </main>
      <BookingBar />
      <Footer />
    </div>
  );
};

export default Index;

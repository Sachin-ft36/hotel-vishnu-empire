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
import { LuxuryGallery } from "@/components/regalia/LuxuryGallery";
import { UpcomingEvents } from "@/components/regalia/UpcomingEvents";
import { AnnouncementBar } from "@/components/regalia/AnnouncementBar";
import { SEO } from "@/components/regalia/SEO";
import { PartnerLogos } from "@/components/regalia/PartnerLogos";

const Index = () => {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <SEO 
        title="Best Luxury Hotel in Rewa | Hotel Vishnu Empire Official Site"
        description="Experience the pinnacle of royal hospitality at Hotel Vishnu Empire, the best luxury hotel in Rewa. Premium rooms, banquet halls, and wedding venues in Rewa."
        keywords="luxury hotel in rewa, best hotel in rewa, Vishnu Empire rewa, wedding venue rewa, banquet hall rewa"
      />
      <AnnouncementBar />
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
        <LuxuryGallery limit={4} showFilters={true} />
        <UpcomingEvents />
        <MembershipTeaser />
      </main>
      <BookingBar />
      <PartnerLogos />
      <Footer />
    </div>
  );
};

export default Index;

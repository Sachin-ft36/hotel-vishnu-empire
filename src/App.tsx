import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Destinations from "./pages/Destinations.tsx";
import Hotels from "./pages/Hotels.tsx";
import Experiences from "./pages/Experiences.tsx";
import Offers from "./pages/Offers.tsx";
import Memberships from "./pages/Memberships.tsx";
import Booking from "./pages/Booking.tsx";
import Gallery from "./pages/Gallery.tsx";
import RequestInvitation from "./pages/RequestInvitation.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ScrollToTop } from "@/components/regalia/ScrollToTop";
import { FloatingSocials } from "@/components/regalia/FloatingSocials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingSocials />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/request-invitation" element={<RequestInvitation />} />
          <Route path="/book" element={<Booking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Story from "./pages/Story";
import ProductLucy from "./pages/ProductLucy";
import ProductNomad from "./pages/ProductNomad";
import Science from "./pages/Science";
import TargetAudience from "./pages/TargetAudience";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cau-chuyen" element={<Story />} />
          <Route path="/san-pham/lucy" element={<ProductLucy />} />
          <Route path="/san-pham/nomad" element={<ProductNomad />} />
          <Route path="/khoa-hoc" element={<Science />} />
          <Route path="/doi-tuong/gym-fitness" element={<TargetAudience variant="gym" />} />
          <Route path="/doi-tuong/chay-bo" element={<TargetAudience variant="runner" />} />
          <Route path="/doi-tuong/ban-chan-bet" element={<TargetAudience variant="flat-feet" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

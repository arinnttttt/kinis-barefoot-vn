import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index"));
const Story = lazy(() => import("./pages/Story"));
const ProductLucy = lazy(() => import("./pages/ProductLucy"));
const ProductNomad = lazy(() => import("./pages/ProductNomad"));
const ProductApollo = lazy(() => import("./pages/ProductApollo"));
const Science = lazy(() => import("./pages/Science"));
const TargetAudience = lazy(() => import("./pages/TargetAudience"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cau-chuyen" element={<Story />} />
            <Route path="/san-pham/lucy" element={<ProductLucy />} />
            <Route path="/san-pham/nomad" element={<ProductNomad />} />
            <Route path="/san-pham/apollo" element={<ProductApollo />} />
            <Route path="/khoa-hoc" element={<Science />} />
            <Route path="/doi-tuong/gym-fitness" element={<TargetAudience variant="gym" />} />
            <Route path="/doi-tuong/chay-bo" element={<TargetAudience variant="runner" />} />
            <Route path="/doi-tuong/ban-chan-bet" element={<TargetAudience variant="flat-feet" />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Structure from "./pages/Structure";
import Lubertsy from "./pages/Lubertsy";
import Metro from "./pages/Metro";
import News from "./pages/News";
import Decrees from "./pages/Decrees";
import Anthem from "./pages/Anthem";
import RoleRequest from "./pages/RoleRequest";
import Admin from "./pages/Admin";
import Construction from "./pages/Construction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/lubertsy" element={<Lubertsy />} />
          <Route path="/metro" element={<Metro />} />
          <Route path="/news" element={<News />} />
          <Route path="/decrees" element={<Decrees />} />
          <Route path="/anthem" element={<Anthem />} />
          <Route path="/role-request" element={<RoleRequest />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
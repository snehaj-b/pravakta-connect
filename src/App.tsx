
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import MenteeDashboard from "./pages/MenteeDashboard";
import { MentorDetails } from "./pages/MentorDetails";
import { MyCommunities } from "./pages/MyCommunities";
import { MenteeCalendar } from "./pages/MenteeCalendar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
          <Route path="/mentee-dashboard/mentor/:id" element={<MentorDetails />} />
          <Route path="/mentee-dashboard/communities" element={<MyCommunities />} />
          <Route path="/mentee-dashboard/calendar" element={<MenteeCalendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

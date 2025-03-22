
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import MenteeLayout from "./components/mentee/MenteeLayout";
import MenteeDashboard from "./pages/mentee/MenteeDashboard";
import MenteeFindMentor from "./pages/mentee/MenteeFindMentor";
import MenteeCommunity from "./pages/mentee/MenteeCommunity";
import MenteeCalendar from "./pages/mentee/MenteeCalendar";
import MenteeProfile from "./pages/mentee/MenteeProfile";
import MentorDetail from "./pages/mentee/MentorDetail";

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
          
          {/* Mentee Routes */}
          <Route path="/mentee" element={<MenteeLayout />}>
            <Route index element={<Navigate to="/mentee/dashboard" replace />} />
            <Route path="dashboard" element={<MenteeDashboard />} />
            <Route path="find-mentor" element={<MenteeFindMentor />} />
            <Route path="community" element={<MenteeCommunity />} />
            <Route path="calendar" element={<MenteeCalendar />} />
            <Route path="profile" element={<MenteeProfile />} />
            <Route path="mentor/:id" element={<MentorDetail />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

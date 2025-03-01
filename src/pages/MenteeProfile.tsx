
import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import MenteeSidebar from "@/components/MenteeSidebar";
import FindMentor from "@/components/FindMentor";
import Community from "@/components/Community";
import Calendar from "@/components/Calendar";
import Settings from "@/components/Settings";
import { Home, Users, Calendar as CalendarIcon, Settings as SettingsIcon } from "lucide-react";

const MenteeProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("home");
  
  // Mock mentee data
  const mentee = {
    name: "Alex Johnson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    interests: ["Machine Learning", "Web Development", "UX Design", "Data Science", "Blockchain"],
    communities: ["Tech Innovators", "Women in Tech", "Student Developers"]
  };

  // Navigation handler
  const handleNavigation = (page: string) => {
    setActivePage(page);
    navigate(`/mentee-profile/${page === "home" ? "" : page}`);
  };

  // Determine active section based on URL
  React.useEffect(() => {
    const path = location.pathname.split("/")[2] || "home";
    setActivePage(path);
  }, [location]);

  return (
    <div className="flex min-h-screen bg-background">
      <FloatingShapes />
      
      {/* Sidebar */}
      <MenteeSidebar activePage={activePage} onNavigate={handleNavigation} />
      
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10 overflow-x-hidden">
        {/* Mentee Profile Header - Appears on all pages */}
        <div className="glass-card mb-10 p-6 rounded-xl fade-in relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src={mentee.photo} alt={mentee.name} />
              <AvatarFallback>{mentee.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{mentee.name}</h1>
              <div className="mb-3">
                <p className="text-muted-foreground">Interests:</p>
                <div className="flex flex-wrap gap-2 mt-1 justify-center md:justify-start">
                  {mentee.interests.slice(0, 3).map((interest, index) => (
                    <Badge key={index} variant="outline" className="bg-white/70">{interest}</Badge>
                  ))}
                  {mentee.interests.length > 3 && 
                    <Badge variant="outline" className="bg-white/70">+{mentee.interests.length - 3} more</Badge>
                  }
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">Communities:</p>
                <div className="flex flex-wrap gap-2 mt-1 justify-center md:justify-start">
                  {mentee.communities.map((community, index) => (
                    <Badge key={index} className="bg-primary/80">{community}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-8 fade-in">
          <Button 
            variant={activePage === "find-mentor" ? "default" : "outline"} 
            className="py-6 hover-scale-subtle"
            onClick={() => handleNavigation("find-mentor")}
          >
            <Users className="mr-2" /> Find Mentor
          </Button>
          <Button 
            variant={activePage === "community" ? "default" : "outline"} 
            className="py-6 hover-scale-subtle"
            onClick={() => handleNavigation("community")}
          >
            <Home className="mr-2" /> Community
          </Button>
          <Button 
            variant={activePage === "calendar" ? "default" : "outline"} 
            className="py-6 hover-scale-subtle"
            onClick={() => handleNavigation("calendar")}
          >
            <CalendarIcon className="mr-2" /> Calendar
          </Button>
        </div>

        {/* Content Routes */}
        <div className="fade-in">
          <Routes>
            <Route path="/" element={<FindMentor />} />
            <Route path="/find-mentor" element={<FindMentor />} />
            <Route path="/community" element={<Community />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfile;


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import MenteeProfile from "@/components/MenteeProfile";
import DashboardTabs from "@/components/DashboardTabs";
import InterestFields from "@/components/InterestFields";
import MentorSlider from "@/components/MentorSlider";
import CommunityTab from "@/components/CommunityTab";
import CalendarTab from "@/components/CalendarTab";
import ProfileTab from "@/components/ProfileTab";
import SettingsTab from "@/components/SettingsTab";
import FloatingShapes from "@/components/FloatingShapes";

const MenteeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Parse the current tab from the URL
  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get('tab') || 'find-mentor';
  
  // Interests for the mentee
  const interests = ["Web Development", "UI/UX Design", "Machine Learning"];
  
  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Handle interest selection
  const handleInterestSelect = (interest: string) => {
    setSelectedInterest(interest);
  };
  
  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    
    // Set initial state based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Close sidebar when changing tabs on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [currentTab]);

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      
      {/* Sidebar */}
      <DashboardSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div 
        className={`transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-20"}`}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Top Section - Profile Summary */}
          <div className="mb-8">
            <MenteeProfile />
          </div>
          
          {/* Tabs for different sections */}
          <DashboardTabs />
          
          {/* Tab Content */}
          <div className="mt-8">
            {currentTab === "find-mentor" && (
              <div>
                <InterestFields 
                  interests={interests} 
                  onInterestSelect={handleInterestSelect} 
                  selectedInterest={selectedInterest}
                />
                <MentorSlider field={selectedInterest} />
              </div>
            )}
            
            {currentTab === "community" && <CommunityTab />}
            
            {currentTab === "calendar" && <CalendarTab />}
            
            {currentTab === "profile" && <ProfileTab />}
            
            {currentTab === "settings" && <SettingsTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeDashboard;

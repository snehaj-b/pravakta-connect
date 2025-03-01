
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Users, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get('tab') || 'find-mentor';

  const handleTabChange = (tab: string) => {
    searchParams.set('tab', tab);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
      <Button
        variant={currentTab === "find-mentor" ? "default" : "outline"}
        className={`p-4 h-auto ${currentTab === "find-mentor" ? "bg-[#336dce]" : ""} hover-scale-subtle`}
        onClick={() => handleTabChange("find-mentor")}
      >
        <div className="flex flex-col items-center text-center">
          <Search className="h-6 w-6 mb-2" />
          <span className="text-sm md:text-base">Find Mentor</span>
        </div>
      </Button>
      
      <Button
        variant={currentTab === "community" ? "default" : "outline"}
        className={`p-4 h-auto ${currentTab === "community" ? "bg-[#336dce]" : ""} hover-scale-subtle`}
        onClick={() => handleTabChange("community")}
      >
        <div className="flex flex-col items-center text-center">
          <Users className="h-6 w-6 mb-2" />
          <span className="text-sm md:text-base">Community</span>
        </div>
      </Button>
      
      <Button
        variant={currentTab === "calendar" ? "default" : "outline"}
        className={`p-4 h-auto ${currentTab === "calendar" ? "bg-[#336dce]" : ""} hover-scale-subtle`}
        onClick={() => handleTabChange("calendar")}
      >
        <div className="flex flex-col items-center text-center">
          <Calendar className="h-6 w-6 mb-2" />
          <span className="text-sm md:text-base">Calendar</span>
        </div>
      </Button>
    </div>
  );
};

export default DashboardTabs;

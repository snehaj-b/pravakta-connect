
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const MenteeNavTabs: React.FC = () => {
  const location = useLocation();
  const [sliderValue, setSliderValue] = useState([33]);
  
  return (
    <>
      <div className="flex space-x-4 mb-4">
        <Link to="/mentee/find-mentor" className="flex-1">
          <Button 
            variant={location.pathname.includes("find-mentor") ? "default" : "outline"} 
            className={`w-full rounded-xl ${location.pathname.includes("find-mentor") ? "bg-[#336dce]" : ""}`}
          >
            <Users size={18} className="mr-2" />
            Mentors
          </Button>
        </Link>
        
        <Link to="/mentee/community" className="flex-1">
          <Button 
            variant={location.pathname.includes("community") ? "default" : "outline"}
            className={`w-full rounded-xl ${location.pathname.includes("community") ? "bg-[#336dce]" : ""}`}
          >
            <MessageSquare size={18} className="mr-2" />
            Community
          </Button>
        </Link>
        
        <Link to="/mentee/calendar" className="flex-1">
          <Button 
            variant={location.pathname.includes("calendar") ? "default" : "outline"}
            className={`w-full rounded-xl ${location.pathname.includes("calendar") ? "bg-[#336dce]" : ""}`}
          >
            <Calendar size={18} className="mr-2" />
            Calendar
          </Button>
        </Link>
      </div>
      
      <div className="px-2 mb-6">
        <Slider 
          defaultValue={sliderValue} 
          max={100} 
          step={1} 
          onValueChange={setSliderValue}
          className="h-1"
        />
      </div>
    </>
  );
};

export default MenteeNavTabs;

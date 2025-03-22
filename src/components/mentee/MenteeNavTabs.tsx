
import React from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MenteeNavTabs: React.FC = () => {
  const location = useLocation();
  return <div className="flex space-x-4 mb-6">
      <Link to="/mentee/find-mentor">
        <Button 
          variant={location.pathname.includes("find-mentor") ? "default" : "outline"} 
          className={`${location.pathname.includes("find-mentor") ? "bg-[#336dce]" : ""}`}
        >
          <Users size={18} className="mr-2" />
          Mentors
        </Button>
      </Link>
      
      <Link to="/mentee/community">
        <Button 
          variant={location.pathname.includes("community") ? "default" : "outline"}
          className={`${location.pathname.includes("community") ? "bg-[#336dce]" : ""}`}
        >
          <MessageSquare size={18} className="mr-2" />
          Community
        </Button>
      </Link>
      
      <Link to="/mentee/calendar">
        <Button 
          variant={location.pathname.includes("calendar") ? "default" : "outline"}
          className={`${location.pathname.includes("calendar") ? "bg-[#336dce]" : ""}`}
        >
          <Calendar size={18} className="mr-2" />
          Calendar
        </Button>
      </Link>
    </div>;
};

export default MenteeNavTabs;

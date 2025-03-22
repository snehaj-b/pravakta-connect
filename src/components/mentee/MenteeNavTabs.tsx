
import React from "react";
import { Button } from "@/components/ui/button";
import { Users, User } from "lucide-react";
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
      
      <Link to="/mentee/profile">
        <Button 
          variant={location.pathname.includes("profile") ? "default" : "outline"}
          className={`${location.pathname.includes("profile") ? "bg-[#336dce]" : ""}`}
        >
          <User size={18} className="mr-2" />
          Profile
        </Button>
      </Link>
    </div>;
};

export default MenteeNavTabs;

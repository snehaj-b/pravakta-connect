import React from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const MenteeNavTabs: React.FC = () => {
  const location = useLocation();
  return <div className="flex space-x-4 mb-6">
      <Link to="/mentee/find-mentor">
        
      </Link>
      
      <Link to="/mentee/community">
        
      </Link>
      
      <Link to="/mentee/calendar">
        
      </Link>
    </div>;
};
export default MenteeNavTabs;
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Users, MessageSquare, Calendar, User, Search, Settings, LogOut } from "lucide-react";
import { toast } from "sonner";
const MenteeSidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };
  return <aside className="w-16 bg-white shadow-md z-10 flex flex-col items-center py-6 border-r">
      <div className="space-y-8 flex flex-col items-center flex-1">
        <NavLink to="/mentee/dashboard" className={({
        isActive
      }) => `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"}`}>
          <Home size={24} />
        </NavLink>

        <NavLink to="/mentee/find-mentor" className={({
        isActive
      }) => `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"}`}>
          <Users size={24} />
        </NavLink>

        

        <NavLink to="/mentee/calendar" className={({
        isActive
      }) => `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"}`}>
          
        </NavLink>

        <NavLink to="/mentee/profile" className={({
        isActive
      }) => `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"}`}>
          <User size={24} />
        </NavLink>
      </div>

      <div className="mt-auto space-y-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors text-gray-500">
          <Search size={24} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors text-gray-500">
          <Settings size={24} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#A10015]/10 transition-colors text-[#A10015]" onClick={handleLogout}>
          <LogOut size={24} />
        </button>
      </div>
    </aside>;
};
export default MenteeSidebar;
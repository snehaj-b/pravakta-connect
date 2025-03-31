
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  Home, 
  Users, 
  User,
  Search,
  Settings,
  LogOut,
  CalendarDays,
  Clock,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

const MentorSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <aside className="w-16 bg-white shadow-md z-10 flex flex-col items-center py-6 border-r">
      <div className="space-y-8 flex flex-col items-center flex-1">
        <NavLink
          to="/mentor/dashboard"
          className={({ isActive }) =>
            `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${
              isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"
            }`
          }
        >
          <Home size={24} />
        </NavLink>

        <NavLink
          to="/mentor/sessions"
          className={({ isActive }) =>
            `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${
              isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"
            }`
          }
        >
          <CalendarDays size={24} />
        </NavLink>

        <NavLink
          to="/mentor/community"
          className={({ isActive }) =>
            `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${
              isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"
            }`
          }
        >
          <MessageSquare size={24} />
        </NavLink>

        <NavLink
          to="/mentor/profile"
          className={({ isActive }) =>
            `w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#336dce]/10 transition-colors ${
              isActive ? "text-[#336dce] bg-[#336dce]/10" : "text-gray-500"
            }`
          }
        >
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
        <button 
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#A10015]/10 transition-colors text-[#A10015]"
          onClick={handleLogout}
        >
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
};

export default MentorSidebar;


import React from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Users,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenteeSidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const MenteeSidebar: React.FC<MenteeSidebarProps> = ({ activePage, onNavigate }) => {
  const navigate = useNavigate();

  return (
    <aside className="bg-[#00095C]/95 text-white w-[70px] md:w-[240px] shrink-0 h-screen sticky top-0 transition-all duration-300 z-20">
      <div className="p-4 flex items-center justify-center md:justify-start h-16 border-b border-white/10">
        <h1 className="text-lg font-bold hidden md:block">MentorMatch</h1>
        <span className="text-2xl font-bold block md:hidden">MM</span>
      </div>
      
      <nav className="p-2 mt-4">
        <ul className="space-y-2">
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activePage === "home" ? "bg-white/10" : "hover:bg-white/5"
              } text-white`}
              onClick={() => onNavigate("home")}
            >
              <Home className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Home</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activePage === "find-mentor" ? "bg-white/10" : "hover:bg-white/5"
              } text-white`}
              onClick={() => onNavigate("find-mentor")}
            >
              <Users className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Find Mentor</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activePage === "community" ? "bg-white/10" : "hover:bg-white/5"
              } text-white`}
              onClick={() => onNavigate("community")}
            >
              <Home className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Community</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activePage === "calendar" ? "bg-white/10" : "hover:bg-white/5"
              } text-white`}
              onClick={() => onNavigate("calendar")}
            >
              <Calendar className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Calendar</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activePage === "settings" ? "bg-white/10" : "hover:bg-white/5"
              } text-white`}
              onClick={() => onNavigate("settings")}
            >
              <Settings className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Settings</span>
            </Button>
          </li>
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-white/5 text-white"
          onClick={() => navigate("/")}
        >
          <LogOut className="h-5 w-5 mr-2" />
          <span className="hidden md:inline">Logout</span>
        </Button>
      </div>
    </aside>
  );
};

export default MenteeSidebar;

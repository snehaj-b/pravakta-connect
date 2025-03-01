
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  Users, 
  Calendar, 
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Home", path: "/mentee-dashboard" },
    { icon: User, label: "Profile", path: "/mentee-dashboard?tab=profile" },
    { icon: Users, label: "Community", path: "/mentee-dashboard?tab=community" },
    { icon: Calendar, label: "Calendar", path: "/mentee-dashboard?tab=calendar" },
    { icon: Settings, label: "Settings", path: "/mentee-dashboard?tab=settings" },
  ];

  return (
    <>
      <Button 
        variant="ghost" 
        className="absolute top-4 left-4 p-2 z-50 md:hidden" 
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      
      <aside className={`fixed top-0 left-0 h-full bg-[#00095C] text-white transition-all duration-300 ease-in-out z-40 
        ${isOpen ? "w-64" : "w-0 md:w-20"} overflow-hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center py-8">
            <Avatar className={`w-16 h-16 transition-all duration-300 ${!isOpen && "w-12 h-12"}`}>
              <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          
          {isOpen && (
            <div className="text-center mb-6 px-4">
              <h3 className="font-semibold text-lg">Jane Doe</h3>
              <p className="text-sm text-blue-200">Mentee since 2023</p>
            </div>
          )}
          
          <nav className="flex-1">
            <ul className="space-y-2 px-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname + location.search === item.path;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`flex items-center py-3 px-4 rounded-lg transition-colors hover:bg-[#336dce]/20 
                        ${isActive ? "bg-[#336dce]" : ""}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {isOpen && <span className="ml-3">{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <div className="p-4 mt-auto">
            <Link to="/login" className={`flex items-center py-3 px-4 text-red-300 rounded-lg transition-colors hover:bg-red-500/20`}>
              <LogOut className="w-5 h-5" />
              {isOpen && <span className="ml-3">Logout</span>}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;

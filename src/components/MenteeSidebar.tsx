
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Users, Calendar, Settings, Search } from 'lucide-react';

const MenteeSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/mentee-dashboard', icon: Home, label: 'Home' },
    { path: '/mentee-dashboard', icon: User, label: 'Profile' },
    { path: '/mentee-dashboard/communities', icon: Users, label: 'Community' },
    { path: '/mentee-dashboard/calendar', icon: Calendar, label: 'Calendar' },
    { path: '#', icon: Search, label: 'Search' },
    { path: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed right-0 top-0 h-screen w-16 bg-[#00095C]/95 flex flex-col items-center py-6 z-50">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all ${
            location.pathname === item.path
              ? 'bg-[#336dce] text-white'
              : 'text-white/70 hover:bg-[#336dce]/50 hover:text-white'
          }`}
          title={item.label}
        >
          <item.icon size={22} />
        </Link>
      ))}
    </div>
  );
};

export default MenteeSidebar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserPlus, Users, Calendar } from 'lucide-react';

const MenteeNavTabs = () => {
  const location = useLocation();
  
  const tabs = [
    {
      path: '/mentee-dashboard',
      label: 'find mentor',
      icon: UserPlus
    },
    {
      path: '/mentee-dashboard/communities',
      label: 'community',
      icon: Users
    },
    {
      path: '/mentee-dashboard/calendar',
      label: 'calendar',
      icon: Calendar
    }
  ];
  
  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          to={tab.path}
          className={`flex items-center py-2 px-4 transition-all ${
            location.pathname === tab.path
              ? 'bg-[#00095C]/80 text-white'
              : 'bg-[#00095C]/20 text-[#00095C] hover:bg-[#00095C]/30'
          } rounded-md`}
        >
          <tab.icon size={20} className="mr-2" />
          <span>{tab.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenteeNavTabs;


import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const MenteeHeader = () => {
  return (
    <div className="bg-white w-full flex justify-between items-center p-3 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-[#00095C]">PRA</span>
          <span className="text-[#9b0060]">VAKTA</span>
        </h1>
      </div>
      
      <div className="flex items-center">
        <button className="bg-[#336dce] text-white rounded-full px-8 py-2 flex items-center mr-4">
          Browse
          <ChevronDown size={16} className="ml-2" />
        </button>
        
        <div className="relative">
          <Bell size={24} className="text-[#00095C] cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenteeHeader;

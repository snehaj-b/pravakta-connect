
import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenteeHeader: React.FC = () => {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <span className="text-[#00095C]">PRA</span>
        <span className="text-[#A10015]">VAKTA</span>
      </h1>
      
      <div className="flex space-x-4 items-center">
        <Button variant="outline" className="bg-[#336dce] text-white hover:bg-[#336dce]/90 border-none px-6">
          Browse
          <ChevronDown size={16} />
        </Button>
        
        <button className="relative p-2">
          <Bell className="h-5 w-5 text-[#A10015]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#A10015] rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default MenteeHeader;

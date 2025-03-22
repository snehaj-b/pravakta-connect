
import React from "react";
import { ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InterestsFilterProps {
  interests: string[];
  activeInterest?: string;
  onSelectInterest: (interest: string) => void;
}

const InterestsFilter: React.FC<InterestsFilterProps> = ({ 
  interests, 
  activeInterest, 
  onSelectInterest 
}) => {
  return (
    <div className="flex items-center space-x-2 mb-6 overflow-x-auto py-2">
      <Button variant="ghost" size="sm" className="flex-shrink-0">
        <Filter size={16} className="mr-1" />
      </Button>
      
      {interests.map((interest) => (
        <Button
          key={interest}
          variant="outline"
          size="sm"
          className={`rounded-full px-4 border transition-colors ${
            activeInterest === interest 
              ? "bg-[#336dce] text-white border-[#336dce]" 
              : "bg-white text-gray-700 border-gray-200"
          }`}
          onClick={() => onSelectInterest(interest)}
        >
          {interest}
        </Button>
      ))}
      
      <Button variant="ghost" size="sm" className="flex-shrink-0">
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default InterestsFilter;

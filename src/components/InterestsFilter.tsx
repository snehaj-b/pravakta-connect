
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface InterestsFilterProps {
  interests: string[];
  selectedInterest: string | null;
  onSelectInterest: (interest: string) => void;
}

const InterestsFilter = ({ 
  interests, 
  selectedInterest, 
  onSelectInterest 
}: InterestsFilterProps) => {
  return (
    <div className="mb-6">
      <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
        {interests.map((interest, index) => (
          <button
            key={index}
            className={`min-w-max px-4 py-1 rounded-full border border-[#336dce]/30 ${
              selectedInterest === interest
                ? 'bg-[#336dce] text-white'
                : 'bg-white text-[#336dce] hover:bg-[#336dce]/10'
            } transition-colors`}
            onClick={() => onSelectInterest(interest)}
          >
            {interest}
          </button>
        ))}
        
        <button className="min-w-[32px] h-8 flex items-center justify-center bg-white text-[#336dce] rounded-full border border-[#336dce]/30">
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="flex items-center mt-2">
        <hr className="flex-grow border-t border-gray-300" />
        <button className="mx-2 text-[#336dce]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 15C3 12.7909 4.79086 11 7 11H17C19.2091 11 21 12.7909 21 15V21H3V15Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
    </div>
  );
};

export default InterestsFilter;


import React from 'react';

interface CommunityCardProps {
  name: string;
  icon: string;
}

const CommunityCard = ({ name, icon }: CommunityCardProps) => {
  return (
    <div className="bg-[#00095C]/10 rounded-lg p-3 mb-3 flex items-center hover:bg-[#00095C]/15 transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
        <img src={icon} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="text-[#00095C] font-medium">{name}</div>
    </div>
  );
};

export default CommunityCard;

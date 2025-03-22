
import React from "react";

interface CommunityCardProps {
  id: string;
  name: string;
  icon: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ id, name, icon }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-3 flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
        <img src={icon} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className="font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default CommunityCard;

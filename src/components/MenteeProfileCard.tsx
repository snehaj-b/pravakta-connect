
import React from 'react';
import { Pencil } from 'lucide-react';

interface MenteeProfileCardProps {
  name: string;
  interests: string[];
  username: string;
  communitiesJoined: number;
  profilePicture?: string;
}

const MenteeProfileCard = ({
  name,
  interests,
  username,
  communitiesJoined,
  profilePicture
}: MenteeProfileCardProps) => {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm mb-4 flex items-center">
      {profilePicture && (
        <div className="w-24 h-20 mr-4 rounded-md overflow-hidden">
          <img 
            src={profilePicture} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[#00095C] font-medium">{name}</h2>
            <p className="text-[#336dce] font-medium">
              {interests.join(', ')}
            </p>
            <p className="text-gray-700">{username}</p>
            <p className="text-gray-700">Communities Joined: {communitiesJoined}</p>
          </div>
          
          <button className="text-[#00095C] p-1 hover:bg-gray-100 rounded-md transition-colors">
            <Pencil size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfileCard;

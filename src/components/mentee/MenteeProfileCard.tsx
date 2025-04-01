
import React from "react";
import { PencilLine, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MenteeProfileCardProps {
  name?: string;
  interests?: string;
  username?: string;
  communitiesJoined?: number;
  profilePicture?: string;
}

const MenteeProfileCard: React.FC<MenteeProfileCardProps> = ({
  name = "Alex Johnson",
  interests = "Web Development, UI/UX",
  username = "alexj",
  communitiesJoined = 5,
  profilePicture = "/lovable-uploads/94db9bc8-af8d-4bcc-8287-1a47d17ca41c.png"
}) => {
  return <div className="bg-white shadow rounded-lg overflow-hidden mb-6 border-t-4 border-[#A10015]">
      <div className="flex items-center p-4">
        <div className="w-20 h-20 overflow-hidden rounded-lg mr-4 border-2 border-[#A10015]/20 flex items-center justify-center bg-gray-100">
          <Avatar className="w-full h-full">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt={name} />
            <AvatarFallback>
              <UserCircle className="w-16 h-16 text-[#A10015]" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">{interests}</p>
              <p className="text-gray-600">@{username}</p>
              <p className="text-gray-600">Communities Joined: <span className="text-[#A10015] font-medium">{communitiesJoined}</span></p>
            </div>
            <Button variant="ghost" size="icon" className="text-[#A10015] hover:bg-[#A10015]/10">
              <PencilLine size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>;
};

export default MenteeProfileCard;

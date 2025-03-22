import React from "react";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return <div className="bg-white shadow rounded-lg overflow-hidden">
      
    </div>;
};
export default MenteeProfileCard;
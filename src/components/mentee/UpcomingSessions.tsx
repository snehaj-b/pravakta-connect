
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Session {
  id: string;
  topic: string;
  mentorName: string;
  date: string;
  time: string;
  profileImage: string;
}

interface UpcomingSessionsProps {
  sessions: Session[];
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ sessions }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b">Upcoming Sessions</h2>
      
      <div className="divide-y">
        {sessions.map((session) => (
          <div key={session.id} className="p-4">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3">
                <img
                  src={session.profileImage}
                  alt={session.mentorName}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              <div className="flex-1">
                <p className="font-medium">{session.topic}</p>
                <p className="text-sm text-gray-600">{session.mentorName}</p>
                <p className="text-xs text-gray-500">{session.date}, {session.time}</p>
              </div>
              
              <Button className="bg-[#336dce] text-white hover:bg-[#336dce]/90">
                Join
              </Button>
            </div>
            
            <button className="mt-2 w-full flex items-center justify-center text-gray-500">
              <ChevronDown size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSessions;

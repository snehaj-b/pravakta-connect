
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Session {
  id: number;
  topic: string;
  mentorName: string;
  additionalInfo: string;
  dateTime: string;
}

interface UpcomingSessionsProps {
  sessions: Session[];
}

const UpcomingSessions = ({ sessions }: UpcomingSessionsProps) => {
  return (
    <div className="bg-[#00095C]/10 p-4 rounded-lg mb-6">
      <h2 className="text-lg font-medium text-[#00095C] mb-4">Upcomming Session</h2>
      
      {sessions.map((session) => (
        <div 
          key={session.id} 
          className="bg-[#00095C]/10 rounded-lg p-3 mb-3 relative"
        >
          <div className="text-[#00095C]">{session.topic}</div>
          <div className="text-[#00095C]">{session.mentorName}</div>
          <div className="text-[#00095C]">{session.additionalInfo}</div>
          <div className="text-[#00095C]">{session.dateTime}</div>
          
          <button className="absolute bottom-2 right-2 text-[#00095C]">
            <ChevronDown size={18} />
          </button>
          
          <Button 
            className="absolute top-2 right-2 bg-[#336dce] text-white text-xs px-4 py-1 h-auto"
          >
            Join
          </Button>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSessions;

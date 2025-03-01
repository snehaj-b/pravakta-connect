
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Clock, ArrowLeft, Calendar as CalendarIcon } from "lucide-react";

interface Session {
  date: string;
  time: string;
  topic: string;
}

interface MentorDetailsProps {
  mentor: {
    name: string;
    field: string;
    rating: number;
    hours: number;
    image: string;
    qualifications: string;
    bio: string;
    sessions: Session[];
  };
  onBack: () => void;
}

const MentorDetails: React.FC<MentorDetailsProps> = ({ mentor, onBack }) => {
  return (
    <div className="slide-in-left">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mentors
      </Button>
      
      <div className="glass-card rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="w-24 h-24 mx-auto md:mx-0">
            <AvatarImage src={mentor.image} alt={mentor.name} />
            <AvatarFallback>{mentor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h2 className="text-2xl font-bold">{mentor.name}</h2>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="ml-1 font-medium">{mentor.rating}</span>
              </div>
            </div>
            
            <Badge className="mb-3">{mentor.field}</Badge>
            
            <p className="text-gray-700 mb-3">{mentor.qualifications}</p>
            
            <div className="flex items-center text-muted-foreground mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>{mentor.hours}+ hours on platform</span>
            </div>
            
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-700">{mentor.bio}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <CalendarIcon className="mr-2 h-5 w-5" /> Upcoming Sessions
        </h3>
        
        <div className="space-y-4">
          {mentor.sessions.map((session, index) => (
            <div key={index} className="glass-card p-4 rounded-lg hover-scale-subtle">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-semibold">{session.topic}</h4>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{session.date}, {session.time}</span>
                  </div>
                </div>
                <Button className="mt-2 md:mt-0">Book Session</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <Button size="lg">
          Request Mentorship
        </Button>
      </div>
    </div>
  );
};

export default MentorDetails;


import React from "react";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";
import { Calendar } from "@/components/ui/calendar";
import UpcomingSessions from "@/components/mentee/UpcomingSessions";
import ProgressChart from "@/components/mentee/ProgressChart";
import TimeSpent from "@/components/mentee/TimeSpent";

const MenteeCalendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Sample upcoming sessions
  const upcomingSessions = [
    {
      id: "1",
      topic: "UI/UX",
      mentorName: "Sarah Smith",
      date: "July 23, 2024",
      time: "10:00 AM",
      profileImage: "/lovable-uploads/94db9bc8-af8d-4bcc-8287-1a47d17ca41c.png"
    },
    {
      id: "2",
      topic: "Web Development",
      mentorName: "John Doe",
      date: "July 25, 2024",
      time: "2:00 PM",
      profileImage: "/lovable-uploads/d3a0e614-98d5-460b-86ef-75508d7b9b7f.png"
    }
  ];
  
  // Sample data for skills progress
  const skillsData = [
    { subject: "HTML", score: 90, fullMark: 100 },
    { subject: "CSS", score: 80, fullMark: 100 },
    { subject: "JavaScript", score: 70, fullMark: 100 },
    { subject: "React", score: 60, fullMark: 100 },
    { subject: "Node.js", score: 50, fullMark: 100 }
  ];
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <MenteeNavTabs />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg"
          />
        </div>
        
        <UpcomingSessions sessions={upcomingSessions} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressChart data={skillsData} />
        <TimeSpent totalSessions={12} />
      </div>
    </div>
  );
};

export default MenteeCalendar;

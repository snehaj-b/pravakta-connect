
import React from 'react';
import MenteeSidebar from '@/components/MenteeSidebar';
import MenteeHeader from '@/components/MenteeHeader';
import MenteeProfileCard from '@/components/MenteeProfileCard';
import MenteeNavTabs from '@/components/MenteeNavTabs';
import FloatingShapes from '@/components/FloatingShapes';
import { Calendar } from '@/components/ui/calendar';
import UpcomingSessions from '@/components/UpcomingSessions';
import TimeSpent from '@/components/TimeSpent';
import ProgressChart from '@/components/ProgressChart';

export const MenteeCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const menteeInfo = {
    name: "Jane Doe",
    interests: ["Design", "UI/UX", "Web Development"],
    username: "@janedoe",
    communitiesJoined: 3,
    profilePicture: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
  };

  const upcomingSessions = [
    {
      id: 1,
      topic: "UI/UX",
      mentorName: "John Smith",
      additionalInfo: "Basic Principles",
      dateTime: "Aug 25, 2:00 PM",
    },
    {
      id: 2,
      topic: "UI/UX",
      mentorName: "Sarah Johnson",
      additionalInfo: "Advanced Concepts",
      dateTime: "Aug 27, 4:00 PM",
    },
  ];
  
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingShapes />
      
      <MenteeSidebar />
      <div className="pr-16 relative z-10">
        <MenteeHeader />
        
        <div className="container mx-auto p-4 max-w-6xl">
          <MenteeProfileCard {...menteeInfo} />
          
          <MenteeNavTabs />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="mt-6">
                <ProgressChart />
              </div>
            </div>
            
            <div className="md:col-span-1">
              <UpcomingSessions sessions={upcomingSessions} />
              <TimeSpent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

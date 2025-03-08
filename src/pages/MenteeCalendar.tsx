
import React from 'react';
import MenteeSidebar from '@/components/MenteeSidebar';
import MenteeHeader from '@/components/MenteeHeader';
import MenteeProfileCard from '@/components/MenteeProfileCard';
import MenteeNavTabs from '@/components/MenteeNavTabs';
import FloatingShapes from '@/components/FloatingShapes';
import { Calendar } from '@/components/ui/calendar';

export const MenteeCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const menteeInfo = {
    name: "Jane Doe",
    interests: ["Design", "UI/UX", "Web Development"],
    username: "@janedoe",
    communitiesJoined: 3,
    profilePicture: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "UI/UX Session with John Smith",
      date: "Aug 28, 2023",
      time: "9:00 AM - 10:00 AM",
      type: "1-on-1 Session",
    },
    {
      id: 2,
      title: "Design Community Meetup",
      date: "Aug 30, 2023",
      time: "2:00 PM - 3:30 PM",
      type: "Group Session",
    },
    {
      id: 3,
      title: "Web Development Workshop",
      date: "Sep 2, 2023",
      time: "11:00 AM - 12:30 PM",
      type: "Workshop",
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
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-medium text-[#00095C] mb-4">Upcoming Events</h2>
                
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="mb-4 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors cursor-pointer"
                  >
                    <h3 className="font-medium text-[#00095C]">{event.title}</h3>
                    <p className="text-[#336dce]">{event.date}</p>
                    <p className="text-[#00095C]">{event.time}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-[#336dce]/10 text-[#336dce] text-xs rounded-full">
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

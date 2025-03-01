
import React from "react";
import { Calendar, Clock, User, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingSessions = [
  {
    id: "1",
    title: "React Fundamentals",
    mentor: "Dr. Alex Johnson",
    mentorAvatar: "/mentor1.webp",
    date: "June 15, 2023",
    time: "3:00 PM - 4:00 PM",
    type: "video"
  },
  {
    id: "2",
    title: "UI Design Principles",
    mentor: "Olivia Parker",
    mentorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzE2OA&ixlib=rb-4.0.3&q=80&w=300",
    date: "June 18, 2023",
    time: "2:00 PM - 3:30 PM",
    type: "video"
  },
  {
    id: "3",
    title: "Career Guidance Session",
    mentor: "Michael Chen",
    mentorAvatar: "/mentor3.webp",
    date: "June 20, 2023",
    time: "5:00 PM - 6:00 PM",
    type: "video"
  }
];

const pastSessions = [
  {
    id: "4",
    title: "JavaScript Basics",
    mentor: "Sarah Williams",
    mentorAvatar: "/mentor2.webp",
    date: "June 5, 2023",
    time: "3:00 PM - 4:00 PM",
    type: "video"
  },
  {
    id: "5",
    title: "Portfolio Review",
    mentor: "Dr. Alex Johnson",
    mentorAvatar: "/mentor1.webp",
    date: "June 8, 2023",
    time: "2:00 PM - 3:00 PM",
    type: "video"
  }
];

const CalendarTab = () => {
  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
        <div className="lg:col-span-3 space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <Calendar className="mr-2 h-5 w-5" /> Upcoming Mentoring Sessions
          </h3>
          
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div 
                key={session.id} 
                className="glass-card rounded-xl p-4 hover-scale-subtle flex flex-col md:flex-row md:items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={session.mentorAvatar} 
                    alt={session.mentor} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{session.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      <span>{session.mentor}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{session.date}, {session.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button size="sm" className="bg-[#336dce]">
                    <Video className="h-4 w-4 mr-2" /> Join
                  </Button>
                  <Button size="sm" variant="outline">Reschedule</Button>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold flex items-center pt-4">
            <Calendar className="mr-2 h-5 w-5" /> Past Sessions
          </h3>
          
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div 
                key={session.id} 
                className="glass-card rounded-xl p-4 opacity-75 flex flex-col md:flex-row md:items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={session.mentorAvatar} 
                    alt={session.mentor} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{session.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      <span>{session.mentor}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{session.date}, {session.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button size="sm" variant="outline">View Notes</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Schedule a Session</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Select a mentor and time that works for you to book your next mentoring session.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-2">Select Mentor</label>
              <select className="w-full p-3 border border-input rounded-md bg-background">
                <option>Dr. Alex Johnson</option>
                <option>Sarah Williams</option>
                <option>Michael Chen</option>
                <option>Olivia Parker</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Select Date</label>
              <input type="date" className="w-full p-3 border border-input rounded-md bg-background" />
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Select Time</label>
              <select className="w-full p-3 border border-input rounded-md bg-background">
                <option>9:00 AM - 10:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>2:00 PM - 3:00 PM</option>
                <option>4:00 PM - 5:00 PM</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Session Topic</label>
              <input 
                type="text" 
                placeholder="e.g., React Hooks, Career Advice" 
                className="w-full p-3 border border-input rounded-md bg-background" 
              />
            </div>
            
            <Button className="w-full bg-[#336dce]">Schedule Session</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTab;

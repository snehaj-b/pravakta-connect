
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, User, Video, MapPin, BookOpen } from "lucide-react";

interface Event {
  id: number;
  title: string;
  type: "session" | "workshop" | "community";
  date: string;
  time: string;
  mentor?: string;
  mentorImage?: string;
  location: string;
  description: string;
}

const Calendar = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Mock calendar events
  const events: Event[] = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      type: "session",
      date: "May 15, 2023",
      time: "10:00 AM - 11:00 AM",
      mentor: "Dr. Sarah Mitchell",
      mentorImage: "/mentor1.webp",
      location: "Zoom Meeting",
      description: "One-on-one mentoring session covering the basics of machine learning algorithms and their applications."
    },
    {
      id: 2,
      title: "React Performance Optimization",
      type: "session",
      date: "May 16, 2023",
      time: "3:00 PM - 4:00 PM",
      mentor: "James Wilson",
      mentorImage: "/mentor2.webp",
      location: "Google Meet",
      description: "Learn advanced techniques to optimize React applications for better performance and user experience."
    },
    {
      id: 3,
      title: "Monthly Networking Mixer",
      type: "community",
      date: "May 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Lounge",
      description: "Join the Women in Tech community for our monthly networking event. Meet peers and potential mentors in your field."
    },
    {
      id: 4,
      title: "User Research Methods Workshop",
      type: "workshop",
      date: "May 14, 2023",
      time: "9:00 AM - 12:00 PM",
      mentor: "Emily Rodriguez",
      mentorImage: "/mentor3.webp",
      location: "Zoom Webinar",
      description: "A comprehensive workshop on user research methodologies and how to apply them in your design process."
    },
    {
      id: 5,
      title: "Resume Workshop",
      type: "workshop",
      date: "May 22, 2023",
      time: "4:00 PM - 5:30 PM",
      location: "Discord Channel",
      description: "Get feedback on your resume from industry professionals and learn how to highlight your skills effectively."
    }
  ];
  
  // Filter events based on the active filter
  const filteredEvents = activeFilter
    ? events.filter(event => event.type === activeFilter)
    : events;
  
  // Group events by date
  const eventsByDate: Record<string, Event[]> = {};
  filteredEvents.forEach(event => {
    if (!eventsByDate[event.date]) {
      eventsByDate[event.date] = [];
    }
    eventsByDate[event.date].push(event);
  });
  
  // Sort dates
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  
  // Badge colors based on event type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "session":
        return "bg-[#336dce] text-white";
      case "workshop":
        return "bg-[#9b0060] text-white";
      case "community":
        return "bg-[#00095C] text-white";
      default:
        return "";
    }
  };
  
  // Icon based on event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case "session":
        return <User className="w-4 h-4" />;
      case "workshop":
        return <BookOpen className="w-4 h-4" />;
      case "community":
        return <User className="w-4 h-4" />;
      default:
        return <CalendarIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Schedule</h2>
        <Button>
          <CalendarIcon className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>
      
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge
          className={`px-3 py-1 cursor-pointer hover:opacity-90 ${
            activeFilter === null ? "bg-[#336dce] text-white" : "bg-muted"
          }`}
          onClick={() => setActiveFilter(null)}
        >
          All Events
        </Badge>
        <Badge
          className={`px-3 py-1 cursor-pointer hover:opacity-90 ${
            activeFilter === "session" ? "bg-[#336dce] text-white" : "bg-muted"
          }`}
          onClick={() => setActiveFilter("session")}
        >
          Mentoring Sessions
        </Badge>
        <Badge
          className={`px-3 py-1 cursor-pointer hover:opacity-90 ${
            activeFilter === "workshop" ? "bg-[#9b0060] text-white" : "bg-muted"
          }`}
          onClick={() => setActiveFilter("workshop")}
        >
          Workshops
        </Badge>
        <Badge
          className={`px-3 py-1 cursor-pointer hover:opacity-90 ${
            activeFilter === "community" ? "bg-[#00095C] text-white" : "bg-muted"
          }`}
          onClick={() => setActiveFilter("community")}
        >
          Community Events
        </Badge>
      </div>
      
      {/* Calendar */}
      <div className="space-y-8">
        {sortedDates.map(date => (
          <div key={date}>
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              {date}
            </h3>
            <div className="space-y-4">
              {eventsByDate[date].map(event => (
                <div key={event.id} className="glass-card rounded-xl p-4 hover-scale-subtle">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold text-lg">{event.title}</h4>
                    <Badge className={getBadgeVariant(event.type)}>
                      {getEventIcon(event.type)}
                      <span className="ml-1">
                        {event.type === "session" ? "Mentoring Session" : 
                         event.type === "workshop" ? "Workshop" : "Community Event"}
                      </span>
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mt-2 gap-4 md:gap-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    {event.mentor && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{event.mentor}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mt-3">{event.description}</p>
                  
                  <div className="mt-4 flex justify-end gap-2">
                    {(event.type === "session" || event.type === "workshop") && (
                      <Button variant="outline" size="sm">
                        <Video className="mr-1 h-4 w-4" /> Join Online
                      </Button>
                    )}
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium mb-2">No events found</h3>
            <p className="text-muted-foreground">Try changing your filter or add new events to your calendar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;

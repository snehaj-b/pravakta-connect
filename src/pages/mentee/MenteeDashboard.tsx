
import React from "react";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Session card component for this page
const SessionCard = ({
  title,
  sessions
}: {
  title: string;
  sessions: any[];
}) => {
  return <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sessions.map((session, index) => <div key={index} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-32 bg-blue-100">
              <img alt="Session" className="w-full h-full object-cover" src={session.image} />
            </div>
            <div className="p-3">
              <h3 className="font-medium">{session.name}</h3>
              <p className="text-sm text-gray-600">{session.skill}</p>
              <p className="text-xs text-[#A10015]">{session.date}</p>
            </div>
          </div>)}
      </div>
    </div>;
};

const MenteeDashboard: React.FC = () => {
  // Sample data for sessions
  const trendingSessions = [{
    name: "Advanced React Patterns",
    skill: "React.js",
    date: "July 20, 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "UX Research Methods",
    skill: "UX Design",
    date: "July 22, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Flutter App Development",
    skill: "Flutter",
    date: "July 23, 2024",
    image: "https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }];
  const recommendedSessions = [{
    name: "Responsive Web Design",
    skill: "CSS",
    date: "July 25, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "API Integration",
    skill: "Backend Dev",
    date: "July 27, 2024",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Node.js Fundamentals",
    skill: "Node.js",
    date: "July 29, 2024",
    image: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
  }];
  const freeSessions = [{
    name: "Git & GitHub Workshop",
    skill: "Version Control",
    date: "July 30, 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Web Accessibility",
    skill: "HTML/CSS",
    date: "August 2, 2024",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "JavaScript Basics",
    skill: "JavaScript",
    date: "August 5, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }];
  return <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <MenteeNavTabs />
      </div>
      
      <div className="mb-6 relative">
        <div className="h-40 bg-gradient-to-r from-[#00095C] to-[#A10015] rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-md w-full px-4 relative">
              <Input className="bg-white/90 backdrop-blur-sm border-0 shadow-lg pr-10" placeholder="Search for mentors, skills, or sessions..." />
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#A10015]">
                <Search size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SessionCard title="Trending Sessions" sessions={trendingSessions} />
      <SessionCard title="Recommended Sessions" sessions={recommendedSessions} />
      <SessionCard title="Free Sessions" sessions={freeSessions} />
      
      <div className="text-center mt-10 mb-8">
        <Button variant="outline" className="rounded-full border-[#A10015] text-[#A10015] hover:bg-[#A10015]/10">
          More
        </Button>
      </div>
    </div>;
};

export default MenteeDashboard;

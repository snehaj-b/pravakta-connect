
import React from "react";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

const MenteeDashboard: React.FC = () => {
  // Sample data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      title: "Introduction to Web Development",
      mentor: "John Doe",
      date: "Monday, June 10",
      time: "10:00 AM - 11:30 AM",
      image: "/lovable-uploads/94db9bc8-af8d-4bcc-8287-1a47d17ca41c.png"
    },
    {
      id: 2,
      title: "UI/UX Design Principles",
      mentor: "Sarah Smith",
      date: "Wednesday, June 12",
      time: "2:00 PM - 3:30 PM",
      image: "/lovable-uploads/d3a0e614-98d5-460b-86ef-75508d7b9b7f.png"
    }
  ];
  
  // Sample data for recommended mentors
  const recommendedMentors = [
    {
      id: 1,
      name: "Alex Brown",
      specialty: "React Development",
      rating: 4.9,
      image: "/lovable-uploads/f4d99952-258f-4b90-bd87-473e1d4f9831.png"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      specialty: "UX Research",
      rating: 4.8,
      image: "/lovable-uploads/b605afa9-6bad-4f7d-9c47-d3824aa25ffd.png"
    },
    {
      id: 3,
      name: "David Lee",
      specialty: "Full Stack Development",
      rating: 4.7,
      image: "/lovable-uploads/11d00bc9-5aef-4ab4-9693-e4f404d4692f.png"
    }
  ];
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <MenteeNavTabs />
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Input 
            className="pl-10 border-[#A10015]/20 focus-visible:ring-[#A10015]/20"
            placeholder="Search for mentors, communities, or topics..."
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1 md:col-span-2 hover-scale-subtle">
          <CardHeader className="bg-[#A10015]/5 border-b">
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled mentoring sessions</CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="py-4 flex items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img src={session.image} alt={session.mentor} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#A10015]">{session.title}</h3>
                  <p className="text-sm text-gray-600">with {session.mentor}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Calendar size={12} className="mr-1" />
                    <span>{session.date} • {session.time}</span>
                  </div>
                </div>
                <button className="px-3 py-1 bg-[#A10015] text-white text-sm rounded hover:bg-[#A10015]/90 transition-colors">
                  Join
                </button>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="hover-scale-subtle">
          <CardHeader className="bg-[#A10015]/5 border-b">
            <CardTitle>My Progress</CardTitle>
            <CardDescription>Track your learning journey</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Web Development</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#A10015] h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>UI/UX Design</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#A10015] h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Data Science</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#A10015] h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="hover-scale-subtle">
        <CardHeader className="bg-[#A10015]/5 border-b">
          <CardTitle>Recommended Mentors</CardTitle>
          <CardDescription>Based on your interests</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-medium">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.specialty}</p>
                  <div className="flex items-center mt-2">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-sm">{mentor.rating}</span>
                  </div>
                  <button className="mt-3 px-3 py-1 bg-[#A10015] text-white text-sm rounded hover:bg-[#A10015]/90 transition-colors w-full">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenteeDashboard;

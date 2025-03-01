
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Settings, User, Users } from "lucide-react";
import FloatingShapes from "@/components/FloatingShapes";
import MentorCard from "@/components/MentorCard";
import { Link } from "react-router-dom";

// Mock data - in a real app this would come from a database
const menteeData = {
  name: "Sarah Johnson",
  photo: "/mentee-profile.jpg", // This should be a valid path to an image
  interests: ["Web Development", "Data Science", "Mobile Development", "UI/UX Design"],
  communities: ["Tech Enthusiasts", "Women in Code", "Python Developers"]
};

const mentors = [
  {
    id: 1,
    name: "Dr. Emily Walker",
    field: "Web Development",
    rating: 4.9,
    hours: 230,
    image: "/mentor1.webp",
    qualifications: "PhD in Computer Science, 10+ years experience",
    upcomingSessions: [
      { date: "2023-11-10", time: "10:00 AM", topic: "Advanced React Patterns" },
      { date: "2023-11-15", time: "2:00 PM", topic: "Performance Optimization" }
    ]
  },
  {
    id: 2,
    name: "Prof. James Chen",
    field: "Data Science",
    rating: 4.8,
    hours: 185,
    image: "/mentor2.webp",
    qualifications: "MSc in Data Analytics, Ex-Google Data Scientist",
    upcomingSessions: [
      { date: "2023-11-12", time: "11:00 AM", topic: "Machine Learning Basics" },
      { date: "2023-11-18", time: "3:00 PM", topic: "Python for Data Analysis" }
    ]
  },
  {
    id: 3,
    name: "Sophia Martinez",
    field: "UI/UX Design",
    rating: 4.7,
    hours: 156,
    image: "/mentor3.webp",
    qualifications: "BFA in Design, Senior UX Designer at Adobe",
    upcomingSessions: [
      { date: "2023-11-11", time: "1:00 PM", topic: "User Research Methods" },
      { date: "2023-11-16", time: "4:00 PM", topic: "Figma Masterclass" }
    ]
  },
  {
    id: 4,
    name: "Michael Johnson",
    field: "Mobile Development",
    rating: 4.6,
    hours: 142,
    image: "/placeholder.svg",
    qualifications: "BSc in Computer Engineering, Mobile App Developer",
    upcomingSessions: [
      { date: "2023-11-13", time: "9:00 AM", topic: "Flutter Fundamentals" },
      { date: "2023-11-19", time: "2:30 PM", topic: "React Native Best Practices" }
    ]
  }
];

type SectionType = "find-mentor" | "community" | "calendar";
type SelectedMentorType = typeof mentors[0] | null;

const MenteeProfile = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("find-mentor");
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<SelectedMentorType>(null);

  const handleSectionClick = (section: SectionType) => {
    setActiveSection(section);
    setSelectedInterest(null);
    setSelectedMentor(null);
  };

  const handleInterestClick = (interest: string) => {
    setSelectedInterest(interest);
    setSelectedMentor(null);
  };

  const handleMentorClick = (mentor: typeof mentors[0]) => {
    setSelectedMentor(mentor);
  };

  const filteredMentors = selectedInterest
    ? mentors.filter(mentor => mentor.field === selectedInterest)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00095C] via-[#336dce] to-[#9b0060] text-white relative">
      <FloatingShapes />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-16 md:w-64 bg-black/20 backdrop-blur-md z-40 flex flex-col items-center md:items-start p-4 transition-all duration-300">
        <div className="mb-10"></div> {/* Spacing for logo */}
        
        <Link to="/" className="sidebar-link w-full">
          <div className="flex items-center p-3 mb-4 rounded-md hover:bg-white/10 transition-all">
            <Home className="h-6 w-6 md:mr-3" />
            <span className="hidden md:block">Home</span>
          </div>
        </Link>
        
        <Link to="/mentee-profile" className="sidebar-link w-full">
          <div className="flex items-center p-3 mb-4 rounded-md bg-white/10 transition-all">
            <User className="h-6 w-6 md:mr-3" />
            <span className="hidden md:block">Profile</span>
          </div>
        </Link>
        
        <div className="sidebar-link w-full" onClick={() => handleSectionClick("community")}>
          <div className="flex items-center p-3 mb-4 rounded-md hover:bg-white/10 transition-all cursor-pointer">
            <Users className="h-6 w-6 md:mr-3" />
            <span className="hidden md:block">Community</span>
          </div>
        </div>
        
        <div className="sidebar-link w-full" onClick={() => handleSectionClick("calendar")}>
          <div className="flex items-center p-3 mb-4 rounded-md hover:bg-white/10 transition-all cursor-pointer">
            <Calendar className="h-6 w-6 md:mr-3" />
            <span className="hidden md:block">Calendar</span>
          </div>
        </div>
        
        <Link to="/settings" className="sidebar-link w-full mt-auto">
          <div className="flex items-center p-3 mb-4 rounded-md hover:bg-white/10 transition-all">
            <Settings className="h-6 w-6 md:mr-3" />
            <span className="hidden md:block">Settings</span>
          </div>
        </Link>
      </div>
      
      {/* Main content */}
      <div className="pl-20 md:pl-72 pr-4 py-10">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Profile header */}
          <div className="glass-card rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white/30 hover-scale">
              <AvatarImage src="/placeholder.svg" alt={menteeData.name} />
              <AvatarFallback>{menteeData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
              <h1 className="text-3xl font-bold">{menteeData.name}</h1>
              
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-1">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {menteeData.interests.map(interest => (
                    <span key={interest} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-1">Communities</h3>
                <div className="flex flex-wrap gap-2">
                  {menteeData.communities.map(community => (
                    <span key={community} className="bg-[#9b0060]/20 px-3 py-1 rounded-full text-sm">
                      {community}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Section tabs */}
          <div className="flex justify-between mb-8 gap-4">
            <Button 
              variant={activeSection === "find-mentor" ? "default" : "outline"} 
              onClick={() => handleSectionClick("find-mentor")}
              className="flex-1 py-6 bg-gradient-to-r from-[#336dce] to-[#336dce]/70 hover:from-[#336dce]/90 hover:to-[#336dce]/60 border-none"
            >
              Find Mentor
            </Button>
            <Button 
              variant={activeSection === "community" ? "default" : "outline"} 
              onClick={() => handleSectionClick("community")}
              className="flex-1 py-6 bg-gradient-to-r from-[#00095C] to-[#00095C]/70 hover:from-[#00095C]/90 hover:to-[#00095C]/60 border-none"
            >
              Community
            </Button>
            <Button 
              variant={activeSection === "calendar" ? "default" : "outline"} 
              onClick={() => handleSectionClick("calendar")}
              className="flex-1 py-6 bg-gradient-to-r from-[#9b0060] to-[#9b0060]/70 hover:from-[#9b0060]/90 hover:to-[#9b0060]/60 border-none"
            >
              Calendar
            </Button>
          </div>
          
          {/* Content sections */}
          {activeSection === "find-mentor" && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Find Your Mentor</h2>
              
              {!selectedInterest && (
                <>
                  <p className="mb-4">Select a field of interest to find mentors:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {menteeData.interests.map(interest => (
                      <Button
                        key={interest}
                        variant="outline"
                        onClick={() => handleInterestClick(interest)}
                        className="h-24 flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 border-white/20 hover-scale"
                      >
                        <span className="text-lg font-medium">{interest}</span>
                        <span className="text-xs text-white/70 mt-1">
                          {mentors.filter(m => m.field === interest).length} Mentors
                        </span>
                      </Button>
                    ))}
                  </div>
                </>
              )}
              
              {selectedInterest && !selectedMentor && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-medium">
                      Mentors for {selectedInterest}
                    </h3>
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedInterest(null)}
                      className="text-white/70 hover:text-white"
                    >
                      Back to Interests
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMentors.map(mentor => (
                      <div key={mentor.id} onClick={() => handleMentorClick(mentor)} className="cursor-pointer">
                        <MentorCard
                          name={mentor.name}
                          field={mentor.field}
                          rating={mentor.rating}
                          hours={mentor.hours}
                          image={mentor.image}
                          qualifications={mentor.qualifications}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {selectedMentor && (
                <div className="glass-card rounded-xl p-6 animate-scale-in">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold">{selectedMentor.name}</h3>
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedMentor(null)}
                      className="text-white/70 hover:text-white"
                    >
                      Back to Mentors
                    </Button>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden mb-4">
                        <img 
                          src={selectedMentor.image} 
                          alt={selectedMentor.name} 
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                      <p className="text-white/90 mb-2">
                        <span className="font-medium">Field:</span> {selectedMentor.field}
                      </p>
                      <p className="text-white/90 mb-2">
                        <span className="font-medium">Rating:</span> {selectedMentor.rating}/5.0
                      </p>
                      <p className="text-white/90 mb-2">
                        <span className="font-medium">Experience:</span> {selectedMentor.hours}+ hours
                      </p>
                      <p className="text-white/90">
                        <span className="font-medium">Qualifications:</span> {selectedMentor.qualifications}
                      </p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-4">Upcoming Sessions</h4>
                      {selectedMentor.upcomingSessions.map((session, index) => (
                        <div key={index} className="glass-card rounded-lg p-4 mb-4 hover-scale">
                          <div className="flex justify-between mb-2">
                            <div className="font-medium">{session.topic}</div>
                            <div className="text-white/70">{session.date}</div>
                          </div>
                          <div className="text-sm">{session.time}</div>
                        </div>
                      ))}
                      
                      <Button className="w-full mt-4 bg-[#336dce] hover:bg-[#336dce]/80">
                        Schedule a Session
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeSection === "community" && (
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Community</h2>
              <p className="text-lg">Connect with like-minded individuals in your communities:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {menteeData.communities.map((community, index) => (
                  <div key={index} className="glass-card rounded-lg p-4 hover-scale">
                    <h3 className="text-xl font-semibold mb-2">{community}</h3>
                    <p className="text-white/70 mb-4">Join discussions, share resources, and grow together</p>
                    <Button variant="outline" className="w-full">Enter Community</Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeSection === "calendar" && (
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Your Schedule</h2>
              <p className="text-lg mb-6">Manage your upcoming mentoring sessions:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-white/5 rounded-md">
                      <div className="font-medium">Advanced React Patterns</div>
                      <div className="text-sm text-white/70">Nov 10, 2023 • 10:00 AM</div>
                      <div className="text-sm">Dr. Emily Walker</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-md">
                      <div className="font-medium">User Research Methods</div>
                      <div className="text-sm text-white/70">Nov 11, 2023 • 1:00 PM</div>
                      <div className="text-sm">Sophia Martinez</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-4">Recent Sessions</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-white/5 rounded-md opacity-70">
                      <div className="font-medium">Introduction to Data Science</div>
                      <div className="text-sm text-white/70">Nov 2, 2023 • 2:00 PM</div>
                      <div className="text-sm">Prof. James Chen</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-md opacity-70">
                      <div className="font-medium">Web Development Basics</div>
                      <div className="text-sm text-white/70">Oct 28, 2023 • 11:00 AM</div>
                      <div className="text-sm">Dr. Emily Walker</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full md:w-auto">Schedule New Session</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenteeProfile;

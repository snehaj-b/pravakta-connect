
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MentorCard from "@/components/MentorCard";
import MentorDetails from "@/components/MentorDetails";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FindMentor = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<any | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Mock data for interests and mentors
  const interests = [
    "Machine Learning", 
    "Web Development", 
    "UX Design", 
    "Data Science", 
    "Blockchain", 
    "Mobile Development",
    "Cloud Computing",
    "Cybersecurity"
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      field: "Machine Learning",
      rating: 4.9,
      hours: 120,
      image: "/mentor1.webp",
      qualifications: "PhD in Computer Science, Stanford",
      bio: "Leading researcher in machine learning with 10+ years of industry experience. Previously worked at Google AI and OpenAI.",
      sessions: [
        { date: "May 15, 2023", time: "10:00 AM - 11:00 AM", topic: "Neural Networks Fundamentals" },
        { date: "May 17, 2023", time: "2:00 PM - 3:00 PM", topic: "Advanced ML Algorithms" }
      ]
    },
    {
      id: 2,
      name: "James Wilson",
      field: "Web Development",
      rating: 4.7,
      hours: 85,
      image: "/mentor2.webp",
      qualifications: "Senior Developer at Meta, 8+ years experience",
      bio: "Full-stack developer specializing in React and Node.js. Has helped launch products used by millions.",
      sessions: [
        { date: "May 16, 2023", time: "3:00 PM - 4:00 PM", topic: "React Performance Optimization" },
        { date: "May 19, 2023", time: "11:00 AM - 12:00 PM", topic: "Building Scalable APIs" }
      ]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      field: "UX Design",
      rating: 4.8,
      hours: 110,
      image: "/mentor3.webp",
      qualifications: "Design Lead at Adobe, Former Apple Designer",
      bio: "Award-winning designer who has worked on products at Apple, Adobe, and several successful startups.",
      sessions: [
        { date: "May 14, 2023", time: "9:00 AM - 10:00 AM", topic: "User Research Methods" },
        { date: "May 18, 2023", time: "1:00 PM - 2:00 PM", topic: "Designing for Accessibility" }
      ]
    },
    {
      id: 4,
      name: "Michael Chen",
      field: "Data Science",
      rating: 4.6,
      hours: 75,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "MS in Data Science, Principal Data Scientist at Amazon",
      bio: "Experienced data scientist who has led teams at Amazon and Spotify. Expert in predictive modeling and big data.",
      sessions: [
        { date: "May 20, 2023", time: "10:00 AM - 11:00 AM", topic: "Big Data Processing" },
        { date: "May 22, 2023", time: "2:00 PM - 3:00 PM", topic: "Predictive Analytics" }
      ]
    },
    {
      id: 5,
      name: "Olivia Park",
      field: "Blockchain",
      rating: 4.5,
      hours: 60,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "Blockchain Developer, Former Ethereum Foundation",
      bio: "Blockchain developer and consultant who has worked on multiple high-profile cryptocurrency projects.",
      sessions: [
        { date: "May 21, 2023", time: "11:00 AM - 12:00 PM", topic: "Smart Contract Development" },
        { date: "May 24, 2023", time: "1:00 PM - 2:00 PM", topic: "Decentralized Applications" }
      ]
    },
    {
      id: 6,
      name: "David Johnson",
      field: "Mobile Development",
      rating: 4.7,
      hours: 90,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "iOS Team Lead, Former Google Engineer",
      bio: "Mobile development expert with experience building apps used by millions of users daily.",
      sessions: [
        { date: "May 23, 2023", time: "9:00 AM - 10:00 AM", topic: "Swift UI Advanced Techniques" },
        { date: "May 25, 2023", time: "3:00 PM - 4:00 PM", topic: "Cross-platform Development" }
      ]
    },
    {
      id: 7,
      name: "Rachel Kim",
      field: "Cloud Computing",
      rating: 4.8,
      hours: 95,
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "AWS Solutions Architect, Cloud Computing Expert",
      bio: "Cloud computing specialist with deep knowledge of AWS, Azure, and GCP. Has helped companies save millions through cloud optimization.",
      sessions: [
        { date: "May 26, 2023", time: "10:00 AM - 11:00 AM", topic: "Serverless Architecture" },
        { date: "May 29, 2023", time: "1:00 PM - 2:00 PM", topic: "Multi-cloud Strategies" }
      ]
    },
    {
      id: 8,
      name: "Thomas Lee",
      field: "Cybersecurity",
      rating: 4.9,
      hours: 110,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "CISSP, Former NSA Security Analyst",
      bio: "Cybersecurity expert who has consulted for Fortune 500 companies and government agencies on security matters.",
      sessions: [
        { date: "May 27, 2023", time: "2:00 PM - 3:00 PM", topic: "Ethical Hacking Techniques" },
        { date: "May 30, 2023", time: "11:00 AM - 12:00 PM", topic: "Secure System Architecture" }
      ]
    },
    {
      id: 9,
      name: "Lisa Martinez",
      field: "Machine Learning",
      rating: 4.7,
      hours: 80,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "AI Researcher, PhD in ML",
      bio: "ML researcher focusing on computer vision and image recognition systems. Has published multiple papers in top conferences.",
      sessions: [
        { date: "May 28, 2023", time: "9:00 AM - 10:00 AM", topic: "Computer Vision Projects" },
        { date: "May 31, 2023", time: "3:00 PM - 4:00 PM", topic: "ML Model Deployment" }
      ]
    },
    {
      id: 10,
      name: "Robert Taylor",
      field: "Web Development",
      rating: 4.6,
      hours: 70,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      qualifications: "Senior Frontend Developer, Vue.js Core Contributor",
      bio: "Frontend specialist with deep knowledge of modern JavaScript frameworks. Has built UIs used by millions.",
      sessions: [
        { date: "June 1, 2023", time: "10:00 AM - 11:00 AM", topic: "Modern CSS Techniques" },
        { date: "June 3, 2023", time: "1:00 PM - 2:00 PM", topic: "State Management Patterns" }
      ]
    }
  ];

  // Filter mentors based on selected interest
  const filteredMentors = selectedInterest 
    ? mentors.filter(mentor => mentor.field === selectedInterest)
    : mentors;

  // Handle interest selection
  const handleInterestClick = (interest: string) => {
    setSelectedInterest(selectedInterest === interest ? null : interest);
    setSelectedMentor(null);
    setScrollPosition(0);
  };

  // Handle mentor selection
  const handleMentorClick = (mentor: any) => {
    setSelectedMentor(mentor);
  };

  // Handle back button click in mentor details
  const handleBackClick = () => {
    setSelectedMentor(null);
  };

  // Handle slider navigation
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('mentor-slider');
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="fade-in">
      {selectedMentor ? (
        <MentorDetails mentor={selectedMentor} onBack={handleBackClick} />
      ) : (
        <>
          {/* Interest filters */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Interests</h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge
                  key={index}
                  className={`px-4 py-2 text-base cursor-pointer hover-scale-subtle ${
                    selectedInterest === interest
                      ? "bg-[#336dce] text-white"
                      : "bg-white hover:bg-muted"
                  }`}
                  onClick={() => handleInterestClick(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Mentors section */}
          <div className="relative">
            <h2 className="text-xl font-semibold mb-4">
              {selectedInterest ? `${selectedInterest} Mentors` : "Recommended Mentors"}
            </h2>
            
            {/* Slider navigation buttons */}
            {filteredMentors.length > 3 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg"
                  onClick={() => handleScroll('left')}
                  disabled={scrollPosition <= 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg"
                  onClick={() => handleScroll('right')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
            
            {/* Mentors slider */}
            <div 
              id="mentor-slider"
              className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
              style={{scrollBehavior: 'smooth'}}
            >
              {filteredMentors.map((mentor) => (
                <div key={mentor.id} className="min-w-[280px] max-w-[280px]" onClick={() => handleMentorClick(mentor)}>
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
          </div>
        </>
      )}
    </div>
  );
};

export default FindMentor;

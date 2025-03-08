
import React, { useState } from 'react';
import MenteeSidebar from '@/components/MenteeSidebar';
import MenteeHeader from '@/components/MenteeHeader';
import MenteeProfileCard from '@/components/MenteeProfileCard';
import MenteeNavTabs from '@/components/MenteeNavTabs';
import InterestsFilter from '@/components/InterestsFilter';
import MentorCard from '@/components/MentorCard';
import ProgressChart from '@/components/ProgressChart';
import FloatingShapes from '@/components/FloatingShapes';

const MenteeDashboard = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>('Design');

  const menteeInfo = {
    name: "Jane Doe",
    interests: ["Design", "UI/UX", "Web Development"],
    username: "@janedoe",
    communitiesJoined: 3,
    profilePicture: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
  };

  const interests = [
    "Design", "UI/UX", "Web Development", "Mobile App", "Backend", "DevOps", "Data Science", "Machine Learning"
  ];

  const mentors = [
    {
      id: 1,
      name: "John Smith",
      skill: "UI/UX Design",
      date: "Available Aug 28",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Emma Wilson",
      skill: "UI/UX Design",
      date: "Available Aug 25",
      rating: 4,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Michael Johnson",
      skill: "UI/UX Design",
      date: "Available Sep 02",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Sophia Chen",
      skill: "UI/UX Design",
      date: "Available Aug 30",
      rating: 4,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "David Kim",
      skill: "UI/UX Design",
      date: "Available Sep 01",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Lisa Wang",
      skill: "UI/UX Design",
      date: "Available Aug 29",
      rating: 4,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
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
          
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 md:col-span-3">
              <InterestsFilter 
                interests={interests}
                selectedInterest={selectedInterest}
                onSelectInterest={setSelectedInterest}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mentors.map((mentor) => (
                  <MentorCard key={mentor.id} {...mentor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeDashboard;

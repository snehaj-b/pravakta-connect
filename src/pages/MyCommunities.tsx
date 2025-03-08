
import React from 'react';
import MenteeSidebar from '@/components/MenteeSidebar';
import MenteeHeader from '@/components/MenteeHeader';
import MenteeProfileCard from '@/components/MenteeProfileCard';
import MenteeNavTabs from '@/components/MenteeNavTabs';
import CommunityCard from '@/components/CommunityCard';
import FloatingShapes from '@/components/FloatingShapes';

export const MyCommunities = () => {
  const menteeInfo = {
    name: "Jane Doe",
    interests: ["Design", "UI/UX", "Web Development"],
    username: "@janedoe",
    communitiesJoined: 3,
    profilePicture: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
  };

  const communities = [
    {
      id: 1,
      name: "Design",
      icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
    },
    {
      id: 2,
      name: "UI/UX",
      icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
    },
    {
      id: 3,
      name: "CSS",
      icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
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
          
          <div className="bg-[#00095C]/10 p-4 rounded-lg">
            <h2 className="text-lg font-medium text-[#00095C] mb-4">My Communities</h2>
            
            {communities.map((community) => (
              <CommunityCard 
                key={community.id}
                name={community.name}
                icon={community.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

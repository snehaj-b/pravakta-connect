
import React, { useState } from "react";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";
import InterestsFilter from "@/components/mentee/InterestsFilter";
import CommunityCard from "@/components/mentee/CommunityCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MenteeCommunity: React.FC = () => {
  const interests = ["All", "Design", "Development", "Marketing", "Business", "Data Science"];
  const [activeInterest, setActiveInterest] = useState("All");
  
  // Sample communities data
  const communities = [
    {
      id: "1",
      name: "Design",
      icon: "/lovable-uploads/d3a0e614-98d5-460b-86ef-75508d7b9b7f.png"
    },
    {
      id: "2",
      name: "UI/UX",
      icon: "/lovable-uploads/b605afa9-6bad-4f7d-9c47-d3824aa25ffd.png"
    },
    {
      id: "3",
      name: "CSS",
      icon: "/lovable-uploads/11d00bc9-5aef-4ab4-9693-e4f404d4692f.png"
    },
    {
      id: "4",
      name: "JavaScript",
      icon: "/lovable-uploads/f4d99952-258f-4b90-bd87-473e1d4f9831.png"
    },
    {
      id: "5",
      name: "React",
      icon: "/lovable-uploads/94db9bc8-af8d-4bcc-8287-1a47d17ca41c.png"
    }
  ];
  
  // Filter communities based on selected interest
  const filteredCommunities = activeInterest === "All" 
    ? communities 
    : communities.filter(community => community.name.includes(activeInterest));
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <MenteeNavTabs />
      </div>
      
      <InterestsFilter 
        interests={interests}
        activeInterest={activeInterest}
        onSelectInterest={setActiveInterest}
      />
      
      <div className="mb-6">
        <div className="relative">
          <Input 
            placeholder="Add Communities" 
            className="pl-10 border-[#A10015]/20 focus-visible:ring-[#A10015]/20"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A10015]" size={16} />
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-4 border-l-4 border-[#A10015]">
        <h2 className="text-xl font-semibold mb-4">My Communities</h2>
        <div className="space-y-3">
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.id}
              id={community.id}
              name={community.name}
              icon={community.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenteeCommunity;

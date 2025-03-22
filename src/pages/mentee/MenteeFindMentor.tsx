
import React, { useState } from "react";
import MenteeProfileCard from "@/components/mentee/MenteeProfileCard";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";
import InterestsFilter from "@/components/mentee/InterestsFilter";
import MentorCard from "@/components/MentorCard";

const MenteeFindMentor: React.FC = () => {
  const interests = ["All", "Web Development", "UI/UX", "Data Science", "Mobile Dev", "DevOps"];
  const [activeInterest, setActiveInterest] = useState("All");
  
  // Sample mentors data
  const mentors = [
    {
      id: "1",
      name: "John Doe",
      field: "Web Development",
      rating: 4.8,
      hours: 120,
      image: "/mentor1.webp",
      qualifications: "Senior Developer at TechCorp",
    },
    {
      id: "2",
      name: "Sarah Smith",
      field: "UI/UX Design",
      rating: 4.9,
      hours: 85,
      image: "/mentor2.webp",
      qualifications: "Product Designer at DesignStudio",
    },
    {
      id: "3",
      name: "Michael Chen",
      field: "Data Science",
      rating: 4.7,
      hours: 60,
      image: "/mentor3.webp",
      qualifications: "ML Engineer at DataCorp",
    },
    {
      id: "4",
      name: "Emma Wilson",
      field: "Mobile Development",
      rating: 4.6,
      hours: 75,
      image: "/mentor1.webp",
      qualifications: "iOS Developer at AppWorks",
    },
    {
      id: "5",
      name: "David Brown",
      field: "DevOps",
      rating: 4.8,
      hours: 90,
      image: "/mentor2.webp",
      qualifications: "DevOps Engineer at CloudTech",
    },
    {
      id: "6",
      name: "Sophia Lee",
      field: "Web Development",
      rating: 4.9,
      hours: 110,
      image: "/mentor3.webp",
      qualifications: "Full Stack Developer at WebSolutions",
    }
  ];
  
  // Filter mentors based on selected interest
  const filteredMentors = activeInterest === "All" 
    ? mentors 
    : mentors.filter(mentor => mentor.field === activeInterest);
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <MenteeProfileCard />
      </div>
      
      <div className="mb-6">
        <MenteeNavTabs />
      </div>
      
      <InterestsFilter 
        interests={interests}
        activeInterest={activeInterest}
        onSelectInterest={setActiveInterest}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            id={mentor.id}
            name={mentor.name}
            field={mentor.field}
            rating={mentor.rating}
            hours={mentor.hours}
            image={mentor.image}
            qualifications={mentor.qualifications}
          />
        ))}
      </div>
    </div>
  );
};

export default MenteeFindMentor;


import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ProgressChart from "@/components/mentee/ProgressChart";
import TimeSpent from "@/components/mentee/TimeSpent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MentorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API call using the id
  const mentorData = {
    id,
    name: "Sarah Smith",
    skill: "UI/UX Designer",
    rating: 4.9,
    experience: "5 years",
    languages: "English, Spanish",
    pricePerSession: "$50",
    totalSessions: 85,
    socialAccounts: ["twitter", "linkedin", "dribbble"],
    about: "Experienced UI/UX designer with a passion for creating intuitive and engaging user experiences. I specialize in user research, wireframing, prototyping, and visual design.",
    profileImage: "/mentor2.webp",
    availability: [
      { id: "1", date: "July 23, 2024", time: "10:00 AM - 11:30 AM", domain: "User Research" },
      { id: "2", date: "July 25, 2024", time: "2:00 PM - 3:30 PM", domain: "Wireframing" },
      { id: "3", date: "July 27, 2024", time: "11:00 AM - 12:30 PM", domain: "Prototyping" },
    ],
    reviews: [
      { id: "1", author: "Alex", text: "Great mentor! Very knowledgeable and patient." },
      { id: "2", author: "Jamie", text: "Helped me improve my design skills significantly." },
      { id: "3", author: "Taylor", text: "Excellent communication and teaching style." },
    ]
  };
  
  // Sample data for skills progress
  const skillsData = [
    { subject: "Research", score: 90, fullMark: 100 },
    { subject: "Wireframing", score: 85, fullMark: 100 },
    { subject: "Prototyping", score: 80, fullMark: 100 },
    { subject: "Visual Design", score: 95, fullMark: 100 },
    { subject: "User Testing", score: 75, fullMark: 100 }
  ];
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link to="/mentee/find-mentor">
          <Button variant="ghost" className="pl-0">
            <ChevronLeft size={16} className="mr-1" />
            Back to Mentors
          </Button>
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={mentorData.profileImage} 
                alt={mentorData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h1 className="text-xl font-bold">{mentorData.name}</h1>
              <p className="text-gray-600">{mentorData.skill}</p>
              <div className="mt-3 space-y-1 text-sm">
                <p><span className="font-medium">Rating:</span> {mentorData.rating}/5.0</p>
                <p><span className="font-medium">Experience:</span> {mentorData.experience}</p>
                <p><span className="font-medium">Languages:</span> {mentorData.languages}</p>
                <p><span className="font-medium">Price/Session:</span> {mentorData.pricePerSession}</p>
                <p><span className="font-medium">Total Sessions:</span> {mentorData.totalSessions}</p>
              </div>
              
              <div className="mt-4 flex space-x-2">
                {mentorData.socialAccounts.map((account, index) => (
                  <button key={index} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs">{account.charAt(0).toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="specialization">Specialization</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">About</h2>
                <p className="text-gray-700">{mentorData.about}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="specialization">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProgressChart data={skillsData} />
                <TimeSpent totalSessions={mentorData.totalSessions} />
              </div>
            </TabsContent>
            
            <TabsContent value="availability">
              <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Upcoming Availability</h2>
                <div className="space-y-4">
                  {mentorData.availability.map((slot) => (
                    <div key={slot.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{slot.date}</p>
                          <p className="text-xs text-gray-600">{slot.time}</p>
                          <p className="text-xs text-gray-500 mt-1">Topic: {slot.domain}</p>
                        </div>
                        <Button className="bg-[#336dce]">
                          Pay
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mentorData.reviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-3">
                      <p className="text-sm font-medium mb-1">by {review.author}</p>
                      <p className="text-xs text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;

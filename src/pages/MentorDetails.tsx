
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MenteeSidebar from '@/components/MenteeSidebar';
import MenteeHeader from '@/components/MenteeHeader';
import FloatingShapes from '@/components/FloatingShapes';

export const MentorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Mock data for the mentor
  const mentor = {
    id: parseInt(id || '1'),
    name: "John Smith",
    profession: "UI/UX Designer",
    bio: "Senior UI/UX Designer with 8+ years of experience. Specializing in user-centered design and creating intuitive interfaces for web and mobile applications.",
    rating: 5,
    experience: "8+ years",
    education: "Master's in HCI, Stanford University",
    languages: ["English", "Spanish"],
    specializations: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    hourlyRate: "$75/hr",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
    availability: [
      { date: "Aug 28, 2023", slots: ["9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM"] },
      { date: "Aug 29, 2023", slots: ["1:00 PM - 2:00 PM", "4:00 PM - 5:00 PM"] },
      { date: "Aug 30, 2023", slots: ["10:00 AM - 11:00 AM", "3:00 PM - 4:00 PM"] },
    ]
  };
  
  const stars = Array(5).fill(0);
  
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingShapes />
      
      <MenteeSidebar />
      <div className="pr-16 relative z-10">
        <MenteeHeader />
        
        <div className="container mx-auto p-4 max-w-6xl">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-[#336dce] mb-4 hover:underline"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back to mentors
          </button>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-sm mb-6">
            <div className="md:flex">
              <div className="md:w-1/3 p-6">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-72 object-cover rounded-lg"
                />
                
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-[#00095C]">{mentor.name}</h2>
                  <p className="text-[#9b0060] mb-2">{mentor.profession}</p>
                  
                  <div className="flex mb-4">
                    {stars.map((_, index) => (
                      <Star 
                        key={index}
                        size={16}
                        className={index < mentor.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  
                  <div className="space-y-2 text-[#00095C]">
                    <p><strong>Experience:</strong> {mentor.experience}</p>
                    <p><strong>Education:</strong> {mentor.education}</p>
                    <p><strong>Languages:</strong> {mentor.languages.join(', ')}</p>
                    <p><strong>Rate:</strong> {mentor.hourlyRate}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-200">
                <h3 className="text-lg font-semibold text-[#00095C] mb-3">About</h3>
                <p className="text-[#00095C] mb-6">{mentor.bio}</p>
                
                <h3 className="text-lg font-semibold text-[#00095C] mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.specializations.map((spec, index) => (
                    <span 
                      key={index}
                      className="bg-[#336dce]/10 text-[#336dce] px-3 py-1 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold text-[#00095C] mb-3">
                  <Calendar size={18} className="inline mr-2" />
                  Upcoming Availability
                </h3>
                
                <div className="space-y-4">
                  {mentor.availability.map((day, dayIndex) => (
                    <div key={dayIndex} className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-[#00095C] mb-2">{day.date}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {day.slots.map((slot, slotIndex) => (
                          <Button 
                            key={slotIndex}
                            variant="outline"
                            className="border-[#336dce] text-[#336dce] hover:bg-[#336dce] hover:text-white"
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button className="bg-[#336dce] hover:bg-[#336dce]/90">
                    Schedule Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

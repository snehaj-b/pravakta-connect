
import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MentorCard from "@/components/MentorCard";
import { Link } from "react-router-dom";

// Define mock data for mentors by field
const mentorsByField = {
  "Web Development": [
    {
      id: "1",
      name: "Dr. Alex Johnson",
      field: "Web Development",
      rating: 4.9,
      hours: 350,
      image: "/mentor1.webp",
      qualifications: "Ph.D. in Computer Science, 10+ years at Google"
    },
    {
      id: "2",
      name: "Sarah Williams",
      field: "Web Development",
      rating: 4.7,
      hours: 215,
      image: "/mentor2.webp",
      qualifications: "Sr. Software Engineer, AWS Certified Developer"
    },
    {
      id: "3",
      name: "Michael Chen",
      field: "Web Development",
      rating: 4.8,
      hours: 412,
      image: "/mentor3.webp",
      qualifications: "Frontend Specialist, React Core Team"
    },
    {
      id: "4",
      name: "Rebecca Taylor",
      field: "Web Development",
      rating: 4.6,
      hours: 180,
      image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzAxNQ&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Backend Specialist, NodeJS Expert"
    },
    {
      id: "5",
      name: "Daniel Garcia",
      field: "Web Development",
      rating: 4.9,
      hours: 275,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzExMA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Full Stack Developer, Technical Author"
    }
  ],
  "UI/UX Design": [
    {
      id: "6",
      name: "Olivia Parker",
      field: "UI/UX Design",
      rating: 4.8,
      hours: 290,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzE2OA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Design Lead at Adobe, HCI Specialist"
    },
    {
      id: "7",
      name: "James Wilson",
      field: "UI/UX Design",
      rating: 4.6,
      hours: 210,
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzIwOA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Product Designer, Figma Champion"
    },
    {
      id: "8",
      name: "Sophia Lee",
      field: "UI/UX Design",
      rating: 4.9,
      hours: 325,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzI0MA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Senior UX Researcher, Former Apple Designer"
    },
    {
      id: "9",
      name: "David Martinez",
      field: "UI/UX Design",
      rating: 4.7,
      hours: 245,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzI3MA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Digital Product Designer, UI Animation Expert"
    }
  ],
  "Machine Learning": [
    {
      id: "10",
      name: "Emma Thompson",
      field: "Machine Learning",
      rating: 4.9,
      hours: 380,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzMwNA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Ph.D. in AI, Research Scientist at DeepMind"
    },
    {
      id: "11",
      name: "Robert Kim",
      field: "Machine Learning",
      rating: 4.8,
      hours: 310,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzMzMg&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "ML Engineer, TensorFlow Certified"
    },
    {
      id: "12",
      name: "Aisha Patel",
      field: "Machine Learning",
      rating: 4.7,
      hours: 265,
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzM2Mg&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Data Scientist, NLP Specialist"
    },
    {
      id: "13",
      name: "Thomas Brown",
      field: "Machine Learning",
      rating: 4.9,
      hours: 340,
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzM5NA&ixlib=rb-4.0.3&q=80&w=300",
      qualifications: "Computer Vision Expert, Former OpenAI Researcher"
    }
  ]
};

interface MentorSliderProps {
  field: string | null;
}

const MentorSlider: React.FC<MentorSliderProps> = ({ field }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  if (!field || !mentorsByField[field as keyof typeof mentorsByField]) {
    return <div className="text-center py-8">Please select an interest to see mentors</div>;
  }
  
  const mentors = mentorsByField[field as keyof typeof mentorsByField];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth / 2;
      const maxScroll = scrollWidth - clientWidth;
      
      let newPosition = direction === 'right' 
        ? scrollPosition + scrollAmount 
        : scrollPosition - scrollAmount;
      
      // Ensure we don't scroll beyond boundaries
      newPosition = Math.max(0, Math.min(newPosition, maxScroll));
      
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="mt-8 fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Mentors in {field}</h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll('left')}
            disabled={scrollPosition <= 0}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll('right')}
            disabled={sliderRef.current && scrollPosition >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto hide-scrollbar pb-4 gap-6 slide-in-right"
        style={{ scrollBehavior: 'smooth' }}
      >
        {mentors.map((mentor) => (
          <div key={mentor.id} className="min-w-[280px] w-[280px]">
            <Link to={`/mentor/${mentor.id}`} className="block">
              <MentorCard
                name={mentor.name}
                field={mentor.field}
                rating={mentor.rating}
                hours={mentor.hours}
                image={mentor.image}
                qualifications={mentor.qualifications}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSlider;

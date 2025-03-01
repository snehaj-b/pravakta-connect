
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Globe, 
  BookOpen, 
  Award, 
  Briefcase, 
  MessageSquare, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  Video
} from "lucide-react";
import FloatingShapes from "@/components/FloatingShapes";

// Mock data for mentors by ID
const mentorsData = {
  "1": {
    id: "1",
    name: "Dr. Alex Johnson",
    field: "Web Development",
    rating: 4.9,
    hours: 350,
    image: "/mentor1.webp",
    qualifications: "Ph.D. in Computer Science, 10+ years at Google",
    languages: ["English", "Spanish", "French"],
    specialties: ["React", "Node.js", "System Architecture", "Performance Optimization"],
    experience: "15+ years of software development experience with a focus on web technologies. Former Tech Lead at Google and Amazon. Contributed to several open-source projects and authored multiple technical books.",
    education: [
      "Ph.D. in Computer Science, Stanford University",
      "M.S. in Software Engineering, MIT",
      "B.S. in Computer Science, UC Berkeley"
    ],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        text: "Dr. Johnson is incredibly knowledgeable and patient. He helped me understand complex React concepts that I struggled with for months."
      },
      {
        author: "Michael T.",
        rating: 5,
        text: "The best mentor I've had. His deep understanding of both frontend and backend development is impressive, and he's great at explaining complicated topics."
      },
      {
        author: "Jessica L.",
        rating: 4,
        text: "Very helpful sessions focused on system design. His experience at top tech companies provides valuable insights into industry best practices."
      }
    ],
    upcomingSessions: [
      {
        date: "June 15, 2023",
        time: "3:00 PM - 4:00 PM",
        title: "React Fundamentals",
        availableSpots: 3
      },
      {
        date: "June 18, 2023",
        time: "2:00 PM - 3:30 PM",
        title: "System Design Workshop",
        availableSpots: 5
      },
      {
        date: "June 22, 2023",
        time: "4:00 PM - 5:00 PM",
        title: "JavaScript Performance Optimization",
        availableSpots: 4
      }
    ]
  },
  "6": {
    id: "6",
    name: "Olivia Parker",
    field: "UI/UX Design",
    rating: 4.8,
    hours: 290,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzE2OA&ixlib=rb-4.0.3&q=80&w=300",
    qualifications: "Design Lead at Adobe, HCI Specialist",
    languages: ["English", "German"],
    specialties: ["User Research", "Figma", "Design Systems", "Accessibility"],
    experience: "12 years in product design with a focus on creating accessible and intuitive user interfaces. Led design teams at Adobe and Spotify. Recipient of multiple design awards.",
    education: [
      "M.A. in Human-Computer Interaction, Carnegie Mellon",
      "B.F.A in Graphic Design, RISD"
    ],
    reviews: [
      {
        author: "David K.",
        rating: 5,
        text: "Olivia's feedback completely transformed my portfolio. Her eye for design and attention to detail is remarkable."
      },
      {
        author: "Rachel B.",
        rating: 5,
        text: "The best design mentor I've had. She doesn't just tell you what to fix but explains the principles behind good design decisions."
      },
      {
        author: "Thomas H.",
        rating: 4,
        text: "Great insights into design systems and component-based design. Very practical advice for my professional work."
      }
    ],
    upcomingSessions: [
      {
        date: "June 17, 2023",
        time: "1:00 PM - 2:30 PM",
        title: "Portfolio Review Workshop",
        availableSpots: 2
      },
      {
        date: "June 20, 2023",
        time: "4:00 PM - 5:00 PM",
        title: "Figma Advanced Techniques",
        availableSpots: 6
      },
      {
        date: "June 24, 2023",
        time: "11:00 AM - 12:00 PM",
        title: "Accessibility in Design",
        availableSpots: 8
      }
    ]
  },
  "10": {
    id: "10",
    name: "Emma Thompson",
    field: "Machine Learning",
    rating: 4.9,
    hours: 380,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzMwNA&ixlib=rb-4.0.3&q=80&w=300",
    qualifications: "Ph.D. in AI, Research Scientist at DeepMind",
    languages: ["English", "Mandarin"],
    specialties: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Research Methods"],
    experience: "10 years in AI research with publications in top conferences like NeurIPS and ICML. Worked at DeepMind and OpenAI on cutting-edge machine learning applications.",
    education: [
      "Ph.D. in Artificial Intelligence, University of Cambridge",
      "M.S. in Computer Science, ETH Zurich",
      "B.S. in Mathematics, Imperial College London"
    ],
    reviews: [
      {
        author: "James W.",
        rating: 5,
        text: "Emma's guidance was invaluable for my ML research project. She has a remarkable ability to break down complex concepts."
      },
      {
        author: "Sophia N.",
        rating: 4,
        text: "Great mentor for advanced machine learning topics. Her research background provides unique insights."
      },
      {
        author: "Alex P.",
        rating: 5,
        text: "Emma helped me prepare for ML engineer interviews. Her advice was practical and directly applicable."
      }
    ],
    upcomingSessions: [
      {
        date: "June 16, 2023",
        time: "2:00 PM - 3:30 PM",
        title: "Deep Learning Fundamentals",
        availableSpots: 4
      },
      {
        date: "June 19, 2023",
        time: "4:00 PM - 5:30 PM",
        title: "NLP Project Workshop",
        availableSpots: 2
      },
      {
        date: "June 23, 2023",
        time: "10:00 AM - 11:30 AM",
        title: "Research Methodology in AI",
        availableSpots: 5
      }
    ]
  }
};

// For any other mentor ID, use a fallback mentor
const fallbackMentor = {
  id: "default",
  name: "Mentor Profile",
  field: "Tech Mentorship",
  rating: 4.7,
  hours: 250,
  image: "/mentor2.webp",
  qualifications: "Senior Tech Professional",
  languages: ["English"],
  specialties: ["Programming", "Career Development"],
  experience: "Experienced mentor with a background in software development and technical leadership.",
  education: [
    "B.S. in Computer Science"
  ],
  reviews: [
    {
      author: "User",
      rating: 4,
      text: "Great mentor, very helpful and knowledgeable."
    }
  ],
  upcomingSessions: [
    {
      date: "June 20, 2023",
      time: "3:00 PM - 4:00 PM",
      title: "Mentoring Session",
      availableSpots: 5
    }
  ]
};

const MentorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [expandedSection, setExpandedSection] = useState<string | null>("about");
  
  // Get mentor data based on ID or use fallback
  const mentor = id && mentorsData[id as keyof typeof mentorsData] 
    ? mentorsData[id as keyof typeof mentorsData] 
    : fallbackMentor;
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/mentee-dashboard" 
          className="inline-flex items-center text-[#336dce] hover:text-[#336dce]/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mentor Profile Card */}
          <div className="md:col-span-1">
            <div className="glass-card rounded-xl p-6 sticky top-8 fade-in">
              <div className="text-center">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                />
                
                <h1 className="text-2xl font-bold mb-1">{mentor.name}</h1>
                <p className="text-muted-foreground mb-3">{mentor.field}</p>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="ml-1 font-medium">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{mentor.hours}+ hours</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {mentor.languages.map((language, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Globe className="w-3 h-3 mr-1" />
                      <span>{language}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-[#336dce]">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mentor Details */}
          <div className="md:col-span-2 space-y-6">
            {/* About Section */}
            <div className="glass-card rounded-xl p-6 fade-in">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('about')}
              >
                <h2 className="text-xl font-semibold">About</h2>
                {expandedSection === 'about' ? <ChevronUp /> : <ChevronDown />}
              </div>
              
              {expandedSection === 'about' && (
                <div className="mt-4 space-y-6 slide-in-left">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" /> Experience
                    </h3>
                    <p className="text-muted-foreground">{mentor.experience}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" /> Education
                    </h3>
                    <ul className="space-y-1 text-muted-foreground">
                      {mentor.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" /> Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-[#336dce]/10 text-[#336dce] rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Upcoming Sessions */}
            <div className="glass-card rounded-xl p-6 fade-in">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('sessions')}
              >
                <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
                {expandedSection === 'sessions' ? <ChevronUp /> : <ChevronDown />}
              </div>
              
              {expandedSection === 'sessions' && (
                <div className="mt-4 space-y-4 slide-in-left">
                  {mentor.upcomingSessions.map((session, index) => (
                    <div key={index} className="border border-muted rounded-lg p-4 hover-scale-subtle">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{session.title}</h3>
                        <span className="text-sm text-green-600">{session.availableSpots} spots left</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{session.date}, {session.time}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-[#336dce]">
                          <Video className="w-3 h-3 mr-1" /> Book Spot
                        </Button>
                        <Button size="sm" variant="outline">Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Reviews */}
            <div className="glass-card rounded-xl p-6 fade-in">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('reviews')}
              >
                <h2 className="text-xl font-semibold">Reviews</h2>
                {expandedSection === 'reviews' ? <ChevronUp /> : <ChevronDown />}
              </div>
              
              {expandedSection === 'reviews' && (
                <div className="mt-4 space-y-4 slide-in-left">
                  {mentor.reviews.map((review, index) => (
                    <div key={index} className="border-b border-muted pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{review.author}</h3>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{review.text}</p>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">See All Reviews</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;

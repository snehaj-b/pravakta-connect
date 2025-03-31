
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const MentorCard: React.FC<{
  name: string;
  skill: string;
  date: string;
  image: string;
}> = ({ name, skill, date, image }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="h-32 bg-blue-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-600">{skill}</div>
        <div className="text-xs text-gray-500">{date}</div>
        <div className="flex justify-end">
          <div className="flex items-center">
            <div className="text-xs text-gray-400">★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SessionGroup: React.FC<{
  title: string;
  sessions: Array<{
    id: number;
    name: string;
    skill: string;
    date: string;
    image: string;
  }>;
}> = ({ title, sessions }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {sessions.map((session) => (
            <CarouselItem key={session.id} className="md:basis-1/3 lg:basis-1/3">
              <div className="p-1">
                <MentorCard 
                  name={session.name}
                  skill={session.skill}
                  date={session.date}
                  image={session.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious className="relative left-0 translate-y-0" />
          <CarouselNext className="relative right-0 translate-y-0" />
        </div>
        <div className="flex md:hidden justify-center mt-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <ChevronLeft className="mr-1 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="ml-2 rounded-full">
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

const MentorBrowse: React.FC = () => {
  const trendingSessions = [
    { id: 1, name: "John Doe", skill: "React.js", date: "June 20", image: "/public/placeholder.svg" },
    { id: 2, name: "Jane Smith", skill: "UI/UX Design", date: "June 22", image: "/public/placeholder.svg" },
    { id: 3, name: "Mike Johnson", skill: "Node.js", date: "June 24", image: "/public/placeholder.svg" },
    { id: 4, name: "Anna Brown", skill: "Python", date: "June 25", image: "/public/placeholder.svg" },
  ];

  const recommendedSessions = [
    { id: 5, name: "Sam Wilson", skill: "Mobile Dev", date: "June 21", image: "/public/placeholder.svg" },
    { id: 6, name: "Emma Davis", skill: "AWS", date: "June 23", image: "/public/placeholder.svg" },
    { id: 7, name: "Ryan Garcia", skill: "Data Science", date: "June 26", image: "/public/placeholder.svg" },
    { id: 8, name: "Lisa Chen", skill: "JavaScript", date: "June 27", image: "/public/placeholder.svg" },
  ];

  const freeSessions = [
    { id: 9, name: "Tom Hardy", skill: "DevOps", date: "June 22", image: "/public/placeholder.svg" },
    { id: 10, name: "Sarah Johnson", skill: "Flutter", date: "June 24", image: "/public/placeholder.svg" },
    { id: 11, name: "David Lee", skill: "Vue.js", date: "June 25", image: "/public/placeholder.svg" },
    { id: 12, name: "Rachel Kim", skill: "GraphQL", date: "June 28", image: "/public/placeholder.svg" },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-100 to-blue-50">
        <CardContent className="p-6">
          <div className="relative flex items-center justify-center h-32">
            <div className="bg-white rounded-lg w-full max-w-md flex items-center px-3 py-2">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <Input 
                placeholder="Search for mentors, topics, or skills..."
                className="border-0 focus-visible:ring-0 flex-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-12">
        <SessionGroup title="Trending Sessions" sessions={trendingSessions} />
        <SessionGroup title="Recommended Sessions" sessions={recommendedSessions} />
        <SessionGroup title="Free Sessions" sessions={freeSessions} />
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="rounded-full">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MentorBrowse;

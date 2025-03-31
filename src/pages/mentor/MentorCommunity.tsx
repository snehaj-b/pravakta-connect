
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";

const MentorCommunity: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const myCommunities = [
    { id: 1, name: "React", icon: "⚛️" },
    { id: 2, name: "Node.js", icon: "🟢" },
    { id: 3, name: "CSS", icon: "🎨" },
  ];
  
  const otherCommunities = [
    { id: 4, name: "Machine Learning", icon: "🧠" },
    { id: 5, name: "JavaScript", icon: "🟡" },
    { id: 6, name: "Python", icon: "🐍" },
    { id: 7, name: "Design", icon: "🎭" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search communities..."
            className="pl-10"
          />
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">My Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {myCommunities.map((community) => (
              <div 
                key={community.id}
                className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 mr-3 text-lg">
                  {community.icon}
                </div>
                <span>{community.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Other Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {otherCommunities.map((community) => (
              <div 
                key={community.id}
                className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 mr-3 text-lg">
                  {community.icon}
                </div>
                <span>{community.name}</span>
              </div>
            ))}
            <div className="text-center mt-4">
              <Button variant="ghost" size="sm" className="text-gray-500">
                More <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorCommunity;

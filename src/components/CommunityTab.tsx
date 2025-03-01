
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Video } from "lucide-react";

const communities = [
  {
    name: "Coding Bootcamp",
    members: 245,
    description: "A community for bootcamp graduates and students to network and share resources.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MjM5Mzc1Mjg&ixlib=rb-4.0.3&q=80&w=200"
  },
  {
    name: "Women in Tech",
    members: 512,
    description: "Supporting women in technology fields through mentorship, resources, and networking.",
    image: "https://images.unsplash.com/photo-1573164713988-8665321e5561?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4gdGVjaHx8fHx8fDE3MjM5Mzc2NTQ&ixlib=rb-4.0.3&q=80&w=200"
  },
  {
    name: "Machine Learning Enthusiasts",
    members: 328,
    description: "Discuss the latest in ML technologies, share projects, and learn together.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8YWl8fHx8fHwxNzIzOTM3NzAz&ixlib=rb-4.0.3&q=80&w=200"
  },
  {
    name: "Frontend Developers",
    members: 423,
    description: "For frontend developers to share tips, tricks, and challenges in UI/UX implementation.",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8dWkgZGVzaWdufHx8fHx8MTcyMzkzNzc0NQ&ixlib=rb-4.0.3&q=80&w=200"
  }
];

const discussions = [
  {
    title: "How to start with React?",
    author: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzgxOA&ixlib=rb-4.0.3&q=80&w=50",
    replies: 24,
    community: "Frontend Developers"
  },
  {
    title: "Career switch to tech - advice needed",
    author: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzg0OQ&ixlib=rb-4.0.3&q=80&w=50",
    replies: 32,
    community: "Women in Tech"
  },
  {
    title: "TensorFlow vs PyTorch - which to learn?",
    author: "Emma Thompson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTcyMzkzNzg3OA&ixlib=rb-4.0.3&q=80&w=50",
    replies: 18,
    community: "Machine Learning Enthusiasts"
  }
];

const CommunityTab = () => {
  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <Users className="mr-2 h-5 w-5" /> Your Communities
          </h3>
          
          <div className="space-y-4">
            {communities.map((community, index) => (
              <div key={index} className="glass-card rounded-xl p-4 hover-scale-subtle">
                <div className="flex items-center space-x-4">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{community.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {community.members} members
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-3">{community.description}</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-[#336dce]">
                    <MessageSquare className="h-4 w-4 mr-2" /> Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4 mr-2" /> Meetings
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="w-full">Discover More Communities</Button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" /> Recent Discussions
          </h3>
          
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <div key={index} className="glass-card rounded-xl p-4 hover-scale-subtle">
                <div className="flex items-start space-x-3">
                  <img 
                    src={discussion.avatar} 
                    alt={discussion.author} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{discussion.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{discussion.author}</span>
                      <span className="mx-2">•</span>
                      <span>{discussion.community}</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <span>{discussion.replies} replies</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="w-full">See All Discussions</Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityTab;


import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageSquare, Calendar, Clock } from "lucide-react";

const Community = () => {
  // Mock community data
  const communities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 1240,
      description: "A community for tech enthusiasts and innovators to share ideas and collaborate on cutting-edge projects.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80",
      topics: ["Innovation", "Technology", "Collaboration"],
      joined: true,
      upcomingEvents: [
        {
          title: "AI in Healthcare Panel",
          date: "May 20, 2023",
          time: "3:00 PM"
        }
      ]
    },
    {
      id: 2,
      name: "Women in Tech",
      members: 860,
      description: "Supporting and empowering women in technology through mentorship, resources, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80",
      topics: ["Women in STEM", "Career Development", "Mentorship"],
      joined: true,
      upcomingEvents: [
        {
          title: "Monthly Networking Mixer",
          date: "May 15, 2023",
          time: "6:00 PM"
        }
      ]
    },
    {
      id: 3,
      name: "Student Developers",
      members: 1580,
      description: "A space for student developers to learn, grow, and connect with mentors and peers in the industry.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80",
      topics: ["Student Resources", "Learning", "Career Start"],
      joined: true,
      upcomingEvents: [
        {
          title: "Resume Workshop",
          date: "May 22, 2023",
          time: "4:00 PM"
        }
      ]
    },
    {
      id: 4,
      name: "Data Science Hub",
      members: 975,
      description: "Connect with data scientists, share insights, and explore the latest trends in data science and analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80",
      topics: ["Data Science", "Machine Learning", "Analytics"],
      joined: false,
      upcomingEvents: [
        {
          title: "Data Visualization Workshop",
          date: "May 25, 2023",
          time: "2:00 PM"
        }
      ]
    }
  ];

  // Mock discussions
  const discussions = [
    {
      id: 1,
      title: "How to prepare for technical interviews?",
      community: "Student Developers",
      author: {
        name: "Alex Johnson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      },
      replies: 24,
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      title: "Resources for learning React Native",
      community: "Tech Innovators",
      author: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      },
      replies: 18,
      lastActivity: "5 hours ago"
    },
    {
      id: 3,
      title: "Navigating career transitions in tech",
      community: "Women in Tech",
      author: {
        name: "Emily Rodriguez",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      },
      replies: 32,
      lastActivity: "1 day ago"
    }
  ];

  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Your Communities */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Your Communities</h2>
          <div className="space-y-6">
            {communities.filter(community => community.joined).map(community => (
              <div key={community.id} className="glass-card rounded-xl p-6 hover-scale-subtle">
                <div className="flex flex-col md:flex-row gap-4">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{community.name}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{community.members} members</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{community.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {community.topics.map((topic, index) => (
                        <Badge key={index} variant="outline">{topic}</Badge>
                      ))}
                    </div>
                    {community.upcomingEvents.length > 0 && (
                      <div className="mt-3 p-2 bg-background rounded-md">
                        <div className="flex items-center text-sm font-medium">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Next Event: {community.upcomingEvents[0].title}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{community.upcomingEvents[0].date}, {community.upcomingEvents[0].time}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Recommended Communities</h2>
          <div className="space-y-6">
            {communities.filter(community => !community.joined).map(community => (
              <div key={community.id} className="glass-card rounded-xl p-6 hover-scale-subtle">
                <div className="flex flex-col md:flex-row gap-4">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{community.name}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{community.members} members</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{community.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {community.topics.map((topic, index) => (
                        <Badge key={index} variant="outline">{topic}</Badge>
                      ))}
                    </div>
                    <Button>Join Community</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Discussions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {discussions.map(discussion => (
              <div key={discussion.id} className="glass-card rounded-xl p-4 hover-scale-subtle">
                <h3 className="font-semibold mb-2">{discussion.title}</h3>
                <Badge className="mb-3">{discussion.community}</Badge>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-6 h-6 mr-2">
                      <AvatarImage src={discussion.author.image} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{discussion.author.name}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>{discussion.replies}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Last activity: {discussion.lastActivity}</p>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4">View All Discussions</Button>
        </div>
      </div>
    </div>
  );
};

export default Community;

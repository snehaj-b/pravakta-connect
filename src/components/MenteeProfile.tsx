
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const menteeData = {
  name: "Jane Doe",
  interests: ["Web Development", "UI/UX Design", "Machine Learning"],
  communities: ["Coding Bootcamp", "Women in Tech"],
  bio: "Aspiring developer with a passion for creating beautiful and functional web applications. Looking to enhance my skills with guidance from experienced mentors."
};

const MenteeProfile = () => {
  return (
    <div className="glass-card rounded-xl p-6 fade-in">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
          <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt={menteeData.name} />
          <AvatarFallback>{menteeData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-bold">{menteeData.name}</h2>
          
          <div>
            <h3 className="text-sm text-muted-foreground mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {menteeData.interests.map((interest, i) => (
                <Badge key={i} className="bg-[#336dce]">{interest}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-muted-foreground mb-2">Communities</h3>
            <div className="flex flex-wrap gap-2">
              {menteeData.communities.map((community, i) => (
                <Badge key={i} variant="outline" className="border-[#9b0060] text-[#9b0060]">
                  {community}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm text-muted-foreground mb-2">Bio</h3>
        <p className="text-sm">{menteeData.bio}</p>
      </div>
    </div>
  );
};

export default MenteeProfile;

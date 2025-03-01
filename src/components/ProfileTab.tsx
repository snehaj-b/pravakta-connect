
import React from "react";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const menteeData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  occupation: "Junior Web Developer",
  education: "B.S. Computer Science, Stanford University",
  joinDate: "Member since January 2023",
  bio: "Aspiring developer with a passion for creating beautiful and functional web applications. Looking to enhance my skills with guidance from experienced mentors.",
  skills: ["JavaScript", "React", "HTML/CSS", "Node.js", "UI/UX", "Python", "MongoDB"],
  goals: [
    "Master React and build a complex web application",
    "Learn about system design and architecture",
    "Improve UI/UX design skills",
    "Get guidance on career progression in tech"
  ]
};

const ProfileTab = () => {
  return (
    <div className="fade-in mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>{menteeData.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>{menteeData.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>{menteeData.location}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Occupation</p>
                  <p>{menteeData.occupation}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p>{menteeData.education}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-muted-foreground mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p>{menteeData.joinDate}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button className="bg-[#336dce]">Edit Profile</Button>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Learning Goals</h3>
            <p className="text-muted-foreground mb-4">These goals help mentors understand what you're looking to achieve</p>
            
            <ul className="space-y-3">
              {menteeData.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#336dce] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="ml-3">{goal}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="mt-6">Edit Goals</Button>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            
            <div className="flex flex-wrap gap-2">
              {menteeData.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="px-3 py-1.5 bg-[#336dce]/10 text-[#336dce] rounded-full text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="mt-6 w-full">Add Skills</Button>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Account Statistics</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Mentoring Sessions</p>
                <p className="text-2xl font-medium">12</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Mentors Connected</p>
                <p className="text-2xl font-medium">3</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Communities Joined</p>
                <p className="text-2xl font-medium">2</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Hours of Mentoring</p>
                <p className="text-2xl font-medium">18.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

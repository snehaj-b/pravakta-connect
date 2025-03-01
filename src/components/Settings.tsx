
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  return (
    <div className="fade-in">
      <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
      
      <div className="glass-card rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Profile Information</h3>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Alex Johnson" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">Change Photo</Button>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Alex" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Johnson" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
            </div>
            
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" defaultValue="Computer Science student passionate about machine learning and web development." />
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Interests</h3>
        <p className="text-muted-foreground mb-4">Select your interests to help us match you with the right mentors</p>
        
        <div className="flex flex-wrap gap-3">
          <Badge className="px-3 py-1 cursor-pointer bg-[#336dce] text-white">Machine Learning</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-[#336dce] text-white">Web Development</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-[#336dce] text-white">UX Design</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-[#336dce] text-white">Data Science</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-[#336dce] text-white">Blockchain</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">Mobile Development</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">Cloud Computing</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">Cybersecurity</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">Product Management</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">Game Development</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">IoT</Badge>
          <Badge className="px-3 py-1 cursor-pointer bg-muted">DevOps</Badge>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Notification Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-muted-foreground">Receive notifications about your mentoring sessions via email</p>
            </div>
            <div className="flex items-center h-6">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Community Updates</h4>
              <p className="text-sm text-muted-foreground">Receive updates about activities in your communities</p>
            </div>
            <div className="flex items-center h-6">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">New Mentor Matches</h4>
              <p className="text-sm text-muted-foreground">Get notified when new mentors matching your interests join the platform</p>
            </div>
            <div className="flex items-center h-6">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Security</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          
          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          
          <Button>Update Password</Button>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button size="lg">Save All Changes</Button>
      </div>
    </div>
  );
};

export default Settings;

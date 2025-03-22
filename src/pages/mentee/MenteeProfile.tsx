
import React from "react";
import ProgressChart from "@/components/mentee/ProgressChart";
import TimeSpent from "@/components/mentee/TimeSpent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";

const MenteeProfile: React.FC = () => {
  // Sample data for skills progress
  const skillsData = [
    { subject: "HTML", score: 90, fullMark: 100 },
    { subject: "CSS", score: 80, fullMark: 100 },
    { subject: "JavaScript", score: 70, fullMark: 100 },
    { subject: "React", score: 60, fullMark: 100 },
    { subject: "Node.js", score: 50, fullMark: 100 }
  ];
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <MenteeNavTabs />
      </div>
      
      <Tabs defaultValue="stats" className="w-full">
        <TabsList className="mb-6 border-b">
          <TabsTrigger value="stats" className="data-[state=active]:text-[#A10015] data-[state=active]:border-b-2 data-[state=active]:border-[#A10015]">
            Stats
          </TabsTrigger>
          <TabsTrigger value="preferences" className="data-[state=active]:text-[#A10015] data-[state=active]:border-b-2 data-[state=active]:border-[#A10015]">
            Preferences
          </TabsTrigger>
          <TabsTrigger value="payments" className="data-[state=active]:text-[#A10015] data-[state=active]:border-b-2 data-[state=active]:border-[#A10015]">
            Payments
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:text-[#A10015] data-[state=active]:border-b-2 data-[state=active]:border-[#A10015]">
            History
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProgressChart data={skillsData} />
            <TimeSpent totalSessions={12} />
          </div>
          
          <div className="mt-6 bg-white shadow rounded-lg p-4 border-l-4 border-[#A10015]">
            <h2 className="text-lg font-semibold mb-4">Session History</h2>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Web Development Session {item}</h3>
                      <p className="text-sm text-gray-600">John Doe</p>
                      <p className="text-xs text-gray-500">July {10 + item}, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#A10015]">1.5 hours</p>
                      <p className="text-xs text-gray-500">Completed</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences">
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-[#A10015]">
            <h2 className="text-lg font-semibold mb-4">Profile Preferences</h2>
            <p className="text-gray-600">Settings and preferences will be displayed here.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="payments">
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-[#A10015]">
            <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
            <p className="text-gray-600">Your payment methods and history will be displayed here.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-[#A10015]">
            <h2 className="text-lg font-semibold mb-4">Session History</h2>
            <p className="text-gray-600">Your complete session history will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MenteeProfile;

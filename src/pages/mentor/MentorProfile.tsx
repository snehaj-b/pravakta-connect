
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, ChevronRight } from "lucide-react";
import { 
  Chart,
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar
} from "recharts";

const MentorProfile: React.FC = () => {
  const skills = [
    { subject: 'React', A: 120, fullMark: 150 },
    { subject: 'Node.js', A: 110, fullMark: 150 },
    { subject: 'UI/UX', A: 90, fullMark: 150 },
    { subject: 'Data', A: 80, fullMark: 150 },
    { subject: 'Mobile', A: 100, fullMark: 150 },
  ];

  const config: ChartConfig = {
    a: { label: "Skills", color: "#82ca9d" },
  };

  const upcomingSessions = [
    { id: 1, date: "2023-06-20", time: "10:00", domain: "Web Development" },
    { id: 2, date: "2023-06-22", time: "14:30", domain: "UI/UX Design" },
    { id: 3, date: "2023-06-25", time: "11:00", domain: "React.js" },
  ];

  const reviews = [
    { id: 1, score: 4.8, text: "Great mentor! Very knowledgeable about React." },
    { id: 2, score: 4.9, text: "Excellent communication skills and teaching style." },
    { id: 3, score: 4.7, text: "Helped me solve complex problems in my project." },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-gray-600">Manage your information and availability</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Pencil className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Senior software engineer with over 5 years of experience in web development, 
              specializing in React and Node.js. Passionate about teaching and helping 
              others grow their skills in the field.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Specialization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">UI/UX Design</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <div>
                      <div className="font-medium">{session.date} {session.time}</div>
                      <div className="text-sm text-gray-600">{session.domain}</div>
                      <button className="text-xs text-gray-500 mt-1 flex items-center">
                        About Session <ChevronRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                    <Button size="sm" className="bg-blue-500">
                      Start
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">{review.score}</div>
                  <div className="text-sm text-gray-600">{review.text}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle>Growth Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-60">
                <ChartContainer config={config}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">52</div>
                  <div className="text-sm text-gray-600">Total Sessions</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">4.8</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">$5,240</div>
                  <div className="text-sm text-gray-600">Total Earnings</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;

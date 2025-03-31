
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

const MentorDashboard: React.FC = () => {
  const [date] = React.useState<Date | undefined>(new Date());
  
  // Mock session data
  const sessions = [
    { id: 1, date: "2023-06-15", time: "10:00", domain: "Web Development", status: "Completed" },
    { id: 2, date: "2023-06-18", time: "14:30", domain: "UI/UX Design", status: "Completed" },
    { id: 3, date: "2023-06-20", time: "11:00", domain: "Mobile Development", status: "Scheduled" },
    { id: 4, date: "2023-06-25", time: "16:00", domain: "Data Science", status: "Scheduled" },
    { id: 5, date: "2023-06-30", time: "13:30", domain: "Machine Learning", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Profile Overview</CardTitle>
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="h-24 w-24 rounded-md overflow-hidden">
                  <img
                    src="/public/placeholder.svg"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-600">Senior Software Engineer</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">4.8</span>
                    <span className="text-xs text-gray-500 ml-1">(120 reviews)</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>5+ years experience</p>
                    <p>Languages: English, Spanish</p>
                    <p>$75/session</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total Earnings</CardTitle>
              <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                $5,240
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Previous Sessions</h3>
                <div className="space-y-3">
                  {sessions.slice(0, 4).map((session) => (
                    <div key={session.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                      <div>
                        <div className="font-medium">{session.date} {session.time}</div>
                        <div className="text-sm text-gray-600">{session.domain}</div>
                        <button className="text-xs text-gray-500 mt-1 flex items-center">
                          About Session <ChevronRight className="h-3 w-3 ml-1" />
                        </button>
                      </div>
                      <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Earned
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex gap-4">
                <Button variant="ghost" className="rounded-full bg-gray-100">Schedule Session</Button>
                <Button variant="ghost" className="rounded-full bg-blue-100 text-blue-700">Upcoming Session</Button>
                <Button variant="ghost" className="rounded-full bg-gray-300">History</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h3 className="font-medium">Upcoming Availability</h3>
                <div className="space-y-3">
                  {sessions.slice(2, 5).map((session) => (
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;

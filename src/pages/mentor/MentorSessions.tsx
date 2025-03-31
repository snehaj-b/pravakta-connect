
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";

const MentorSessions: React.FC = () => {
  const [activeTab, setActiveTab] = useState("schedule"); // schedule, upcoming, history
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "schedule":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Schedule Date</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="bg-blue-50"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Schedule Time</h3>
                <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 flex items-center justify-center">
                      <Input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="border-none bg-transparent text-center text-4xl w-32 p-0 focus-visible:ring-0"
                      />
                      <Clock className="ml-2 h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Schedule Domain</h3>
              <Input
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                placeholder="e.g., Web Development, UI/UX Design, Data Science"
                className="bg-blue-50"
              />
            </div>
            
            <div>
              <h3 className="font-medium mb-2">About Session</h3>
              <textarea
                value={sessionNotes}
                onChange={(e) => setSessionNotes(e.target.value)}
                placeholder="Add details about this session..."
                className="w-full h-32 p-3 bg-blue-50 rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex justify-center mt-6">
              <Button className="bg-blue-500 text-white px-10">Schedule</Button>
            </div>
          </div>
        );
      case "upcoming":
        return (
          <div>
            <h3 className="font-medium mb-4">Upcoming Availability</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((id) => (
                <div key={id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                  <div>
                    <div className="font-medium">June 20, 2023 10:00</div>
                    <div className="text-sm text-gray-600">Web Development</div>
                    <button className="text-xs text-gray-500 mt-1">About Session ›</button>
                  </div>
                  <Button size="sm" className="bg-blue-500">
                    Start
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );
      case "history":
        return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Session History</h3>
              <div className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                Total: $5,240
              </div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((id) => (
                <div key={id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                  <div>
                    <div className="font-medium">June {id + 10}, 2023 10:00</div>
                    <div className="text-sm text-gray-600">Web Development</div>
                    <button className="text-xs text-gray-500 mt-1">View Details ›</button>
                  </div>
                  <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    $75
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              className={`rounded-full ${activeTab === "schedule" ? "bg-gray-200" : "bg-gray-100"}`}
              onClick={() => setActiveTab("schedule")}
            >
              Schedule Session
            </Button>
            <Button 
              variant="ghost" 
              className={`rounded-full ${activeTab === "upcoming" ? "bg-blue-100 text-blue-700" : "bg-gray-100"}`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Session
            </Button>
            <Button 
              variant="ghost" 
              className={`rounded-full ${activeTab === "history" ? "bg-gray-300" : "bg-gray-100"}`}
              onClick={() => setActiveTab("history")}
            >
              History
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorSessions;

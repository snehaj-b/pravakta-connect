
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import UpcomingSessions from "@/components/mentee/UpcomingSessions";
import MenteeNavTabs from "@/components/mentee/MenteeNavTabs";

const MenteeCalendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <MenteeNavTabs />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#A10015]">
            <div className="flex items-center mb-4">
              <CalendarIcon className="mr-2 h-5 w-5 text-[#A10015]" />
              <h2 className="text-lg font-semibold">Calendar</h2>
            </div>
            
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              classNames={{
                day_selected: "bg-[#A10015] text-white hover:bg-[#A10015]/90 focus:bg-[#A10015]",
                day_today: "bg-gray-100 text-[#A10015] font-bold",
              }}
            />
          </div>
        </div>
        
        <div className="md:col-span-1">
          <UpcomingSessions />
        </div>
      </div>
    </div>
  );
};

export default MenteeCalendar;

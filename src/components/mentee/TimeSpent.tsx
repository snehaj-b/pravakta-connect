
import React from "react";

interface TimeSpentProps {
  totalSessions: number;
}

const TimeSpent: React.FC<TimeSpentProps> = ({ totalSessions }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm h-full flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold mb-4">TIME SPENT</h2>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">TOTAL SESSIONS:</p>
        <p className="text-3xl font-bold text-[#336dce]">{totalSessions}</p>
      </div>
    </div>
  );
};

export default TimeSpent;

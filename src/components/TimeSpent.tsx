
import React from 'react';

const TimeSpent = () => {
  return (
    <div className="bg-[#E6F7FF]/50 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-medium text-[#00095C] mb-4">TIME SPENT</h3>
      
      <div className="flex flex-col items-center justify-center h-[200px]">
        <div className="text-3xl font-bold text-[#336dce]">42.5</div>
        <div className="text-lg text-[#00095C]">Hours</div>
        <div className="text-sm text-[#00095C] mt-2">This Month</div>
      </div>
    </div>
  );
};

export default TimeSpent;

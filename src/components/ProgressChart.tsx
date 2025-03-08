
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface ProgressData {
  subject: string;
  A: number;
  B: number;
  C: number;
  fullMark: number;
}

const ProgressChart = () => {
  const data: ProgressData[] = [
    { subject: 'Item 1', A: 80, B: 110, C: 55, fullMark: 150 },
    { subject: 'Item 2', A: 98, B: 130, C: 75, fullMark: 150 },
    { subject: 'Item 3', A: 86, B: 130, C: 90, fullMark: 150 },
    { subject: 'Item 4', A: 99, B: 100, C: 65, fullMark: 150 },
    { subject: 'Item 5', A: 85, B: 90, C: 85, fullMark: 150 },
  ];

  return (
    <div className="bg-[#E6F7FF]/50 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-medium text-[#00095C] mb-2">Your Progress</h3>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Series 1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
            <Radar name="Series 2" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
            <Radar name="Series 3" dataKey="C" stroke="#ffc658" fill="#ffc658" fillOpacity={0.2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-4 mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#8884d8] rounded-sm mr-1"></div>
          <span className="text-xs">Series 1</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#82ca9d] rounded-sm mr-1"></div>
          <span className="text-xs">Series 2</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#ffc658] rounded-sm mr-1"></div>
          <span className="text-xs">Series 3</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;

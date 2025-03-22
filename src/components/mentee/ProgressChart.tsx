
import React from "react";
import { Radar } from "recharts";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface SkillData {
  subject: string;
  score: number;
  fullMark: number;
}

interface ProgressChartProps {
  data: SkillData[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Skills"
              dataKey="score"
              stroke="#336dce"
              fill="#336dce"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;

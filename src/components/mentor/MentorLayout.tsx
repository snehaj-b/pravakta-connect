
import React from "react";
import { Outlet } from "react-router-dom";
import MentorSidebar from "./MentorSidebar";
import MentorHeader from "./MentorHeader";

const MentorLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <MentorSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <MentorHeader />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MentorLayout;


import React from "react";
import { Outlet } from "react-router-dom";
import MenteeSidebar from "./MenteeSidebar";
import MenteeHeader from "./MenteeHeader";

const MenteeLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <MenteeSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <MenteeHeader />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MenteeLayout;

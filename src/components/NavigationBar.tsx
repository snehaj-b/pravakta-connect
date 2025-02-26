
import React from "react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#336dce]">PRAVAKTA</h1>
        <div className="flex gap-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Find Mentors</Button>
          <Button variant="outline">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

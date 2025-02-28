
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#336dce]">
          PRAVAKTA
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Find Mentors</Button>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

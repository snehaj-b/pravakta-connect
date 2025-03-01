
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import FloatingShapes from "@/components/FloatingShapes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("mentee");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, userType });
    
    // In a real app, this would validate credentials with a backend
    // For now, we'll just redirect to the mentee profile page
    if (userType === "mentee") {
      navigate("/mentee-profile");
    } else {
      // Future mentor profile page
      alert("Mentor login functionality coming soon!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00095C] via-[#336dce] to-[#9b0060] flex items-center justify-center p-4 relative">
      <FloatingShapes />
      
      <div className="w-full max-w-md glass-card rounded-xl p-8 relative z-10 fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/70 mt-2">Sign in to continue your journey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-white">Login as</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant={userType === "mentee" ? "default" : "outline"}
                onClick={() => setUserType("mentee")}
                className={`rounded-full ${
                  userType === "mentee" 
                    ? "bg-[#336dce] hover:bg-[#336dce]/90" 
                    : "bg-transparent border border-white/30 hover:bg-white/10"
                }`}
              >
                Mentee
              </Button>
              <Button
                type="button"
                variant={userType === "mentor" ? "default" : "outline"}
                onClick={() => setUserType("mentor")}
                className={`rounded-full ${
                  userType === "mentor" 
                    ? "bg-[#9b0060] hover:bg-[#9b0060]/90" 
                    : "bg-transparent border border-white/30 hover:bg-white/10"
                }`}
              >
                Mentor
              </Button>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full py-6 bg-white text-[#00095C] hover:bg-white/90"
          >
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center text-white/70">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

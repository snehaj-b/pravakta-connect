
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import FloatingShapes from "@/components/FloatingShapes";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"mentor" | "mentee">("mentee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Here you would typically handle the signup logic
    toast.success(`Signed up as ${role}`);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <FloatingShapes />
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-10 fade-in border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#336dce] mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your learning journey today</p>
        </div>

        <div className="flex gap-2 p-1 bg-white/50 rounded-lg mb-8 shadow-sm">
          <Button variant={role === "mentee" ? "default" : "ghost"} onClick={() => setRole("mentee")} className="py-[4px] text-base mx-[5px] px-[50px] rounded-xl">
            Mentee
          </Button>
          <Button variant={role === "mentor" ? "default" : "ghost"} className={`w-1/2 transition-all duration-300 ${role === "mentor" ? "bg-[#A10015]/90 hover:bg-[#A10015] shadow-sm" : "hover:bg-white/50"}`} onClick={() => setRole("mentor")}>
            Mentor
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Enter your full name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="hover-scale-subtle bg-white/50 border-white/20 focus:border-[#336dce]/30 transition-all duration-300" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="hover-scale-subtle bg-white/50 border-white/20 focus:border-[#336dce]/30 transition-all duration-300" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Create a password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="hover-scale-subtle bg-white/50 border-white/20 focus:border-[#336dce]/30 transition-all duration-300" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              id="confirmPassword" 
              type="password" 
              placeholder="Confirm your password" 
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
              className="hover-scale-subtle bg-white/50 border-white/20 focus:border-[#336dce]/30 transition-all duration-300" 
              required 
            />
          </div>

          <Button 
            type="submit" 
            className={`w-full shadow-sm transition-all duration-300 ${role === "mentor" ? "bg-[#A10015]/90 hover:bg-[#A10015]" : "bg-[#336dce]/90 hover:bg-[#336dce]"}`}
          >
            Sign up as {role === "mentor" ? "Mentor" : "Mentee"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-[#336dce] hover:underline transition-colors duration-300">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

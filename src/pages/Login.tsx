
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import FloatingShapes from "@/components/FloatingShapes";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"mentor" | "mentee">("mentee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    // Here you would typically handle the login logic
    toast.success(`Logged in as ${role}`);
    if (role === "mentee") {
      navigate("/mentee-dashboard");
    } else {
      navigate("/"); // For mentor, keep the default for now
    }
  };
  
  return <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <FloatingShapes />
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-10 fade-in border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#336dce] mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        <div className="flex gap-2 p-1 bg-white/50 rounded-lg mb-8 shadow-sm">
          <Button variant={role === "mentee" ? "default" : "ghost"} onClick={() => setRole("mentee")} className="py-[4px] text-base mx-[5px] px-[50px] rounded-xl">
            Mentee
          </Button>
          <Button variant={role === "mentor" ? "default" : "ghost"} className={`w-1/2 transition-all duration-300 ${role === "mentor" ? "bg-[#9b0060]/90 hover:bg-[#9b0060] shadow-sm" : "hover:bg-white/50"}`} onClick={() => setRole("mentor")}>
            Mentor
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="hover-scale-subtle bg-white/50 border-white/20 focus:border-[#336dce]/30 transition-all duration-300" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} className="hover-scale-subtle bg-white/50 border-white/20 focus:border-[#336dce]/30 transition-all duration-300" required />
          </div>

          <Button type="submit" className={`w-full shadow-sm transition-all duration-300 ${role === "mentor" ? "bg-[#9b0060]/90 hover:bg-[#9b0060]" : "bg-[#336dce]/90 hover:bg-[#336dce]"}`}>
            Login as {role === "mentor" ? "Mentor" : "Mentee"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <a href="#" className="text-[#336dce] hover:underline transition-colors duration-300">
            Forgot password?
          </a>
          <p className="mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#336dce] hover:underline transition-colors duration-300">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>;
};

export default Login;

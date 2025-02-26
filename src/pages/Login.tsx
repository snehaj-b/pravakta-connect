
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
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <FloatingShapes />
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl relative z-10 fade-in">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#336dce] mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        <div className="flex gap-2 p-1 bg-muted rounded-lg mb-8">
          <Button
            variant={role === "mentee" ? "default" : "ghost"}
            className={`w-1/2 transition-all duration-300 ${
              role === "mentee" ? "bg-[#336dce]" : ""
            }`}
            onClick={() => setRole("mentee")}
          >
            Mentee
          </Button>
          <Button
            variant={role === "mentor" ? "default" : "ghost"}
            className={`w-1/2 transition-all duration-300 ${
              role === "mentor" ? "bg-[#9b0060]" : ""
            }`}
            onClick={() => setRole("mentor")}
          >
            Mentor
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="hover-scale-subtle"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="hover-scale-subtle"
              required
            />
          </div>

          <Button
            type="submit"
            className={`w-full ${
              role === "mentor" ? "bg-[#9b0060]" : "bg-[#336dce]"
            } hover:opacity-90 transition-all duration-300`}
          >
            Login as {role === "mentor" ? "Mentor" : "Mentee"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <a href="#" className="text-[#336dce] hover:underline">
            Forgot password?
          </a>
          <p className="mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-[#336dce] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

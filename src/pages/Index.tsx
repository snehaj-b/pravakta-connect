
import { Star, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    field: "Machine Learning",
    rating: 4.9,
    hours: 2500,
    image: "/mentor1.webp",
    qualifications: "Ph.D. in Computer Science, Stanford",
  },
  {
    name: "Prof. James Miller",
    field: "Business Strategy",
    rating: 4.8,
    hours: 1800,
    image: "/mentor2.webp",
    qualifications: "MBA Harvard, Former CEO",
  },
  {
    name: "Dr. Maya Patel",
    field: "Biomedical Engineering",
    rating: 4.9,
    hours: 2100,
    image: "/mentor3.webp",
    qualifications: "Ph.D. in Bioengineering, MIT",
  },
];

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`floating-shape absolute rounded-full`}
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "#880015" : "#000000",
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#880015]">PRAVAKTA</h1>
          <div className="flex gap-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Find Mentors</Button>
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Connect with Expert Mentors in Every Field
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your learning journey with personalized guidance from industry experts
              and accomplished professionals.
            </p>
            <Button size="lg" className="animate-bounce">
              Find Your Mentor <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Featured Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover-scale fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-4">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                <p className="text-muted-foreground mb-2">{mentor.field}</p>
                <p className="text-sm mb-4">{mentor.qualifications}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="ml-1 font-medium">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{mentor.hours}+ hours</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold mb-12">Why Choose PRAVAKTA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Mentors",
                  description: "Learn from industry leaders and accomplished professionals",
                },
                {
                  title: "Personalized Guidance",
                  description: "Get customized learning paths tailored to your goals",
                },
                {
                  title: "Flexible Schedule",
                  description: "Connect with mentors at times that work for you",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/50 fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#880015]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join PRAVAKTA today and connect with mentors who can help you achieve your goals.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

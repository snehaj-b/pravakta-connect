
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import Timeline from "@/components/Timeline";
import MentorCard from "@/components/MentorCard";
import NavigationBar from "@/components/NavigationBar";
import CommunitySection from "@/components/CommunitySection";
import { Link } from "react-router-dom";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    field: "Machine Learning",
    rating: 4.9,
    hours: 2500,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    qualifications: "Ph.D. in Computer Science, Stanford",
  },
  {
    name: "Prof. James Miller",
    field: "Business Strategy",
    rating: 4.8,
    hours: 1800,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    qualifications: "MBA Harvard, Former CEO",
  },
  {
    name: "Dr. Maya Patel",
    field: "Biomedical Engineering",
    rating: 4.9,
    hours: 2100,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    qualifications: "Ph.D. in Bioengineering, MIT",
  },
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <NavigationBar />

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
            <Link to="/login">
              <Button size="lg" className="animate-bounce">
                Find Your Mentor <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">
            Featured Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 fade-in">
            Your Journey to Success
          </h2>
          <Timeline />
        </div>
      </section>

      <CommunitySection />

      <section className="py-20 bg-[#336dce] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", label: "Active Members" },
              { number: "500+", label: "Expert Mentors" },
              { number: "50,000+", label: "Learning Hours" },
            ].map((stat, index) => (
              <div
                key={index}
                className="fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white fade-in">
            <h2 className="text-3xl font-bold mb-12">Why Choose PRAVAKTA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Mentors",
                  description: "Learn from industry leaders and accomplished professionals",
                  imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  title: "Personalized Guidance",
                  description: "Get customized learning paths tailored to your goals",
                  imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
                {
                  title: "Flexible Schedule",
                  description: "Connect with mentors at times that work for you",
                  imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/50 fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={benefit.imageUrl} 
                      alt={benefit.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#336dce]">
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
              <Link to="/login">
                <Button size="lg" variant="outline" className="bg-white/10">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

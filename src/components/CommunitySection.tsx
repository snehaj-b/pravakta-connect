
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h2 className="text-3xl font-bold mb-6">Join Our Thriving Community</h2>
            <p className="text-lg text-muted-foreground">
              Connect with like-minded learners who share your interests and goals. Our
              community feature helps you:
            </p>
            <ul className="space-y-4">
              {[
                "Form study groups with peers in your field",
                "Share resources and learning materials",
                "Participate in community discussions",
                "Attend virtual meetups and workshops",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#336dce]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6">
              Explore Community <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 fade-in">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Community Discussion"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Study Group"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Virtual Meetup"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Workshop"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

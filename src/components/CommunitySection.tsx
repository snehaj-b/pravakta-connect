
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
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBidzd2Y3g4a3ZsZG9wZnp5dXBvdDR4ajY3dWp3MHE1Y3FlbW95ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif"
                alt="Community Discussion"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWhndGpoMXhqNzZ6Y3c2eGlhOTkydnQxNmFyYnhiNG51ZGZ2OWx4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlGu6yGT8X51Gko/giphy.gif"
                alt="Study Group"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBidzd2Y3g4a3ZsZG9wZnp5dXBvdDR4ajY3dWp3MHE1Y3FlbW95ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif"
                alt="Virtual Meetup"
                className="rounded-lg shadow-lg hover-scale w-full h-48 object-cover"
              />
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW9oZ3V5dXhtOHowYjBrcjJieXFibmRoeWR5amFuOWU4Y2M4bmVqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif"
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

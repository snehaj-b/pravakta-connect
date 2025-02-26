
import React from "react";
import { Users, Compass, MessageSquare } from "lucide-react";

const Timeline = () => {
  const timelineSteps = [
    {
      title: "Create Your Profile",
      description: "Sign up and tell us about your learning goals and interests",
      icon: Users,
      rightContent: "Get personalized recommendations based on your interests and goals",
    },
    {
      title: "Discover Mentors",
      description: "Browse through our curated list of expert mentors in your field",
      icon: Compass,
      rightContent: "Access detailed mentor profiles with reviews and success stories",
    },
    {
      title: "Connect & Learn",
      description: "Schedule sessions and start your learning journey",
      icon: MessageSquare,
      rightContent: "Choose flexible learning formats: 1-on-1 sessions, group workshops, or async mentoring",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />
      {timelineSteps.map((step, index) => (
        <div
          key={index}
          className="relative flex items-center mb-12"
        >
          <div className="w-1/2 pr-8 text-right slide-in-left"
               style={{ animationDelay: `${index * 0.3}s` }}>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#336dce] rounded-full flex items-center justify-center pulse"
               style={{ animationDelay: `${index * 0.3}s` }}>
            <step.icon className="w-6 h-6 text-white" />
          </div>
          <div className="w-1/2 pl-8 slide-in-right"
               style={{ animationDelay: `${index * 0.3}s` }}>
            <p className="text-muted-foreground">{step.rightContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

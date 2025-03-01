
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface InterestFieldsProps {
  interests: string[];
  onInterestSelect: (interest: string) => void;
  selectedInterest: string | null;
}

const InterestFields: React.FC<InterestFieldsProps> = ({ 
  interests, 
  onInterestSelect,
  selectedInterest
}) => {
  return (
    <div className="my-6 fade-in">
      <h3 className="text-xl font-semibold mb-4">Your Interests</h3>
      <p className="text-muted-foreground mb-4">Select an interest to find mentors in that field</p>
      
      <div className="flex flex-wrap gap-3">
        {interests.map((interest, index) => (
          <Button
            key={index}
            variant={selectedInterest === interest ? "default" : "outline"}
            className={`hover-scale-subtle ${selectedInterest === interest ? "bg-[#336dce]" : ""}`}
            onClick={() => onInterestSelect(interest)}
          >
            {interest}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default InterestFields;

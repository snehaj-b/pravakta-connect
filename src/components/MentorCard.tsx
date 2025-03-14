
import React from "react";
import { Star, Clock } from "lucide-react";

interface MentorCardProps {
  name: string;
  field: string;
  rating: number;
  hours: number;
  image: string;
  qualifications: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  field,
  rating,
  hours,
  image,
  qualifications,
}) => {
  return (
    <div className="glass-card rounded-xl p-6 hover-scale fade-in">
      <div className="relative mb-4">
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-muted-foreground mb-2">{field}</p>
      <p className="text-sm mb-4">{qualifications}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="ml-1 font-medium">{rating}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{hours}+ hours</span>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;

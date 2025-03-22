
import React from "react";
import { Star, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface MentorCardProps {
  id?: string;
  name: string;
  field: string;
  rating: number;
  hours: number;
  image: string;
  qualifications: string;
  date?: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
  id = "1",
  name,
  field,
  rating,
  hours,
  image,
  qualifications,
  date = "25 June 2024"
}) => {
  return (
    <Link to={`/mentee/mentor/${id}`} className="block">
      <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-w-16 aspect-h-9">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 mb-1">{field}</p>
          <p className="text-xs text-gray-500">{date}</p>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span className="text-xs">{hours}+ hrs</span>
            </div>
          </div>
          
          <button className="mt-2 w-full flex items-center justify-center text-gray-500 text-xs">
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MentorCard;

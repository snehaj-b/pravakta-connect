
import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MentorCardProps {
  id?: number;
  name: string;
  skill?: string;
  field?: string; // Added to support the field property from Index.tsx
  date?: string;
  rating: number;
  image: string;
  hours?: number; // Added to support the hours property
  qualifications?: string; // Added to support the qualifications property
}

const MentorCard = ({ 
  id = 0, // Default value for id
  name, 
  skill, 
  field, // New field property
  date = "Available now", // Default value for date
  rating, 
  image,
  hours,
  qualifications
}: MentorCardProps) => {
  const stars = Array(5).fill(0);
  
  return (
    <Link to={`/mentee-dashboard/mentor/${id}`} className="block">
      <div className="bg-[#00095C]/10 rounded-lg overflow-hidden mb-4 relative hover:shadow-md transition-shadow">
        <img src={image} alt={name} className="w-full h-32 object-cover" />
        
        <div className="p-3">
          <div className="text-[#00095C] font-medium">{name}</div>
          <div className="text-[#9b0060]">{skill || field}</div> {/* Use skill or field */}
          <div className="text-[#336dce]">{date}</div>
          
          {hours && (
            <div className="text-[#336dce] text-sm">{hours} hours</div>
          )}
          
          {qualifications && (
            <div className="text-[#00095C] text-xs mt-1">{qualifications}</div>
          )}
          
          <div className="flex mt-1">
            {stars.map((_, index) => (
              <Star 
                key={index}
                size={14}
                className={index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
        
        <button className="absolute bottom-2 right-2 text-[#00095C]">
          <ChevronDown size={18} />
        </button>
      </div>
    </Link>
  );
};

export default MentorCard;

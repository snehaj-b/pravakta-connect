
import React from "react";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`floating-shape absolute rounded-full`}
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#336dce" : i % 3 === 1 ? "#9b0060" : "#00095C",
            opacity: 0.05 + (i % 3) * 0.01,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${15 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;

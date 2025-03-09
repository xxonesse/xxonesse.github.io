import React, { useEffect, useState } from "react";
import "../index.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDelay: string;
}

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const numStars = 200; // Increased number of stars
    const starsArray: Star[] = Array.from({ length: numStars }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 0.5 + 0.1, // Stars will have different sizes (1px to 4px)
      animationDelay: `${Math.random() * 3}s`,
    }));

    setStars(starsArray);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;

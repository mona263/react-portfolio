import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      <div className="floating-shapes">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={`shape shape-${i % 5}`}
            style={{
              animationDelay: `${i * 2}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="animated-grid">
        <div className="grid-lines"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
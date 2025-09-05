import React from 'react';
import './marquee.css';

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {Array(20).fill(0).map((_, i) => (
          <span key={i} className="marquee-item">
            HURDLES
            <img src="/images/mar.svg" alt="icon" className="icon" />
          </span>
        ))}
      </div>
    </div>
  );
}

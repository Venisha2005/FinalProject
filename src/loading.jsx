import React, { useEffect, useState } from 'react';
import './loading.css';
import rotatingStar from './assets/star.svg';

export default function LoadingPage() {
  const [text, setText] = useState('');
  const fullext = '2025';
  const fullText = 'Loading Sample Data...';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        i = 0;
        setText('');
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <img src={rotatingStar} alt="Rotating Star" className="rotating-image" />
      <div className="loading-text">{text}</div>
    </div>
  );
}


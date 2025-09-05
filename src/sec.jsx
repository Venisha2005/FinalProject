import React, { useEffect, useState } from "react";
import "./sec.css";

export default function NumbersPage() {
  const [scrollY, setScrollY] = useState(0);



useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="numbers-page" style={{ backgroundPositionY: `${scrollY * .15}px` }}>
  
  <div className="row-heading">
    <p>Sample Numbers</p>
    <h2>Row No. 1</h2>
  </div>

  <div className="row" style={{ transform: `translateX(${-scrollY * 0.2}px)` }}>
    <div className="box">73 <span>Unit</span></div>
    <div className="box">89 <span>Unit</span></div>
    <div className="box">102 <span>Unit</span></div>
    <div className="box">115 <span>Unit</span></div>
    <div className="box">130 <span>Unit</span></div>
  </div>

  <div className="row-heading">
    <p>Sample Numbers</p>
    <h2>Row No. 2</h2>
  </div>

  <div className="row" style={{ transform: `translateX(${scrollY * 0.2}px)` }}>
    <div className="box">49 <span>Unit</span></div>
    <div className="box">59 <span>Unit</span></div>
    <div className="box">71 <span>Unit</span></div>
    <div className="box">81 <span>Unit</span></div>
    <div className="box">92 <span>Unit</span></div>
  </div>

</div>

  );
}

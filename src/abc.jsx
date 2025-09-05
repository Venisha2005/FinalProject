import React, { useState } from "react";
import "./abc.css";

const letters = [
 
  {
    id: "A",
    img: "/images/a.png",
    bg: "/images/al1.jpg",
    title: "Abstract Typography",
    desc: "Letter A explores abstract visual language...",
  },
  {
    id: "B",
    img: "/images/b.png",
    bg: "/images/al2.jpg",
    title: "Bold Design",
    desc: "Letter B represents bold and striking visual typography...",
  },


  {
    id: "C",
    img: "/images/c.png",
    bg: "/images/al3.jpg",
    title: "Creative Typography",
    desc: "Letter C brings creative energy, blending 3D shapes and dynamic shadows to stand out on any canvas.",
  },
  {
    id: "D",
    img: "/images/d.png",
    bg: "/images/al4.jpg",
    title: "Dynamic Typography",
    desc: "Letter D adds dynamic movement with rotating forms and motion-inspired gradients that evoke energy.",
  },
  {
    id: "E",
    img: "/images/e.png",
    bg: "/images/al5.jpg",
    title: "Energetic Expression",
    desc: "Letter E pulses with energy through vibrant colors, angled cuts, and expressive 3D distortions.",
  },
  {
    id: "F",
    img: "/images/f.png",
    bg: "/images/al6.jpg",
    title: "Futuristic Lettering",
    desc: "Letter F embraces futuristic design with sleek lines, metallic textures, and digital glitch effects.",
  },
];


export default function AZProject() {
  const [selected, setSelected] = useState(letters[0]);

  return (
    <div
      className="az-container"
      style={{
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease",
      }}
    >
    <div
  className="az-left"
  
  style={{
    
    backgroundImage: `url(${selected.bg})`,
    backgroundSize: "full",
    backgroundPosition: "center",
   height: "98%",
   width: "85%",
    borderRadius: "12px",
    transition: "background-image 0.5s ease",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }}
>
  <img src={selected.img} alt={selected.id} className="az-image" />
  <h3>{selected.title}</h3>
  <p>{selected.desc}</p>
</div>


<div className="letters-grid">
          {letters.map((letter) => (
            <button
              key={letter.id}
              className={`letter-btn ${
                selected.id === letter.id ? "active" : ""
              }`}
              onClick={() => setSelected(letter)}
            >
              {letter.id}
            </button>
          ))}
          <div className="az-right">
        <h2 className="project-title">A-Z PROJECT</h2>
        <p>
          It’s over to you. Download our library of transparent video letters
          and add them to your next project.
        </p>
       
      </div>
        </div>

     
    </div>
  );
}

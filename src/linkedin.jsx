import React from "react";
import { motion } from "framer-motion";
import "./linkedin.css";

const speakers = [
  { name: "Harry Williams", title: "Director of Mobile Gaming, Fixer", img: "/images/p1.jpg" },
  { name: "Akira Lee", title: "Director of Mobile Gaming, Fixer", img: "/images/p2.jpg" },
  { name: "Veronika Zakharova", title: "Director of Mobile Gaming, Fixer", img: "/images/p3.jpg" },
  { name: "Ann Jacobs", title: "Director of Mobile Gaming, Fixer", img: "/images/p4.jpg" },
  { name: "Lissa Cross", title: "Director of Mobile Gaming, Fixer", img: "/images/p5.jpg" },
  { name: "Murty Yang", title: "Director of Mobile Gaming, Fixer", img: "/images/p6.jpg" },
  { name: "Sheldon Smith", title: "Director of Mobile Gaming, Fixer", img: "/images/p7.jpg" },
  { name: "Jason Guhl", title: "Director of Mobile Gaming, Fixer", img: "/images/p8.jpg" },
];

export default function Speakers() {
  return (
    <div className="speakers-section">
     <motion.h2
  className="title"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Speakers
</motion.h2>

      <div className="grid">
        {speakers.map((speaker, index) => (
          <motion.div
  key={index}
  className="speaker-card"
  initial={{ opacity: 0, y: 50, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.5 }}
  exit={{ opacity: 0, scale: 0.8 }}

>


            <img src={speaker.img} alt={speaker.name} className="avatar" />
            <div className="info">
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
            <button className="linkedin-btn">LinkedIn</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

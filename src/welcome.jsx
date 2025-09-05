import React from "react";
import "./welcome.css";

export default function Welcome() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/welcome.jpg)`
      }}
    >
      <div className="navbar">Home</div>
      <div className="main">
        <h1>I'm a Sample</h1>
        <h1>Website</h1>
        <p>
          This is a sample website built to closely match a reference design.
        </p>
        <button className="get-started">Get Started</button>
      </div>
      <button className="chat-btn">Chat With AI</button>
    </div>
  );
}

import React from 'react';
import './services.css';

export default function Services() {
  return (
    <div 
      className="services-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/back.jpg)`
      }}
    >
      <div className="services-overlay">
        <p className="services-intro">
          Explore our services and see how we can help you build better products.
        </p>

        <div className="services-content">
          <div className="services-list left">
            <ServiceItem text="Sample Text 1" />
            <ServiceItem text="Sample Text" />
            <ServiceItem text="Sample Text" />
          </div>

          <div className="services-center">
            <img src="/images/circle.svg" alt="Circuit Circle" className="circuit-circle" />
            <img src="/images/sim.png" alt="SIM Icon" className="sim-icon" />
          </div>

          <div className="services-list right">
            <ServiceItem text="Sample Text" />
            <ServiceItem text="Sample Text" />
            <ServiceItem text="Sample Text" />
          </div>
        </div>

        <button className="services-button">Create Now!</button>
      </div>
    </div>
  );
}

function ServiceItem({ text }) {
  return (
    <div className="service-item">
      <span className="checkmark">✔</span>
      <span>{text}</span>
    </div>
  );
}

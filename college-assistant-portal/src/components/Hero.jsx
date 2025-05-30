// src/components/Hero.jsx
import '../styles/Pages.css';

import robot from '../assets/robot.png';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          <span className="purple">Text Generator</span> Helps You<br />
          Write <span className="bold">Better</span>, <span className="highlight">Faster</span> And <span className="blue">Smarter</span>
        </h1>
        <div className="input-box">
          <input type="text" placeholder="What is your request or topic?" />
          <button>Generate</button>
        </div>
      </div>
      <img src={robot} alt="AI Robot" className="robot-img" />
    </div>
  );
}

export default Hero;

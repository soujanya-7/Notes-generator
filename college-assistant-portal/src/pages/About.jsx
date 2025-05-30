// src/pages/About.jsx
import React from "react";
import "../styles/Pages.css";

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Welcome to Our AI Assistant!</h1>
        <p className="tagline">
          Your personalized study companion, making learning smarter and more effective.
        </p>
      </header>
      
      <section className="about-content">
        <h2>What We Do</h2>
        <p>
          Our AI assistant is designed to help college students achieve academic success with ease. We provide intelligent learning solutions that adapt to your individual needs, whether you're working on coding, essays, or complex study topics.
        </p>
        <p>
          With cutting-edge features like content generation, automated problem-solving, and personalized support, our assistant ensures that you stay ahead in your coursework while saving valuable time.
        </p>
      </section>

      <section className="features">
        <h2>Features That Make a Difference</h2>
        <ul>
          <li><strong>Smart Learning Assistance:</strong> Get solutions and explanations for difficult subjects and topics.</li>
          <li><strong>Real-Time Problem Solving:</strong> Automatically debug and fix coding errors with AI-powered tools.</li>
          <li><strong>Personalized Study Plans:</strong> Tailor your learning path based on your goals and progress.</li>
          <li><strong>Content Generation:</strong> Generate articles, essays, and summaries to help with academic writing.</li>
          <li><strong>Instant Feedback:</strong> Receive real-time feedback on your work, helping you improve continuously.</li>
        </ul>
      </section>

      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to empower students with the tools and resources they need to thrive academically. By leveraging AI, we aim to create a seamless, smart learning experience that adapts to every student's unique needs and learning style.
        </p>
      </section>

      <footer className="about-footer">
        <p>Thank you for trusting us as your learning partner. Together, let's make learning easier and more efficient!</p>
      </footer>
    </div>
  );
}

export default About;

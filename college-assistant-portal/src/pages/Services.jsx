// src/pages/Services.jsx
import React from "react";
import "../styles/Pages.css";

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card fade-in">
          <h3>AI Text Generation</h3>
          <p>
            Generate high-quality, coherent text for essays, reports, or creative writing using AI. Our service helps you enhance writing efficiency with AI-powered text generation, saving you time and effort.
          </p>
        </div>
        <div className="service-card fade-in">
          <h3>Doubt Solving Assistant</h3>
          <p>
            Get quick answers to your academic doubts. Whether it's related to coding, math, or general knowledge, our AI assistant provides solutions and explanations to help you overcome learning obstacles.
          </p>
        </div>
        <div className="service-card fade-in">
          <h3>Personal Study Planner</h3>
          <p>
            Create a personalized study schedule with our AI-powered planner. Get recommendations for time management, study priorities, and task deadlines to help you stay on track for exams and assignments.
          </p>
        </div>
        <div className="service-card fade-in">
          <h3>Speech-to-Text Notes</h3>
          <p>
            Convert your spoken words into accurate text notes. Whether you're in a lecture, meeting, or brainstorming session, our speech-to-text service helps you capture ideas quickly without writing.
          </p>
        </div>
        <div className="service-card fade-in">
          <h3>Exam Preparation Help</h3>
          <p>
            Get tailored exam preparation materials and tips based on your subject and syllabus. Our service provides mock tests, practice problems, and exam strategies to boost your chances of success.
          </p>
        </div>
        <div className="service-card fade-in">
          <h3>AI-Powered Research Assistant</h3>
          <p>
            Conduct research efficiently with the help of our AI assistant. Whether you're gathering information, analyzing data, or summarizing articles, we streamline your research process with advanced AI tools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

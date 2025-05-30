// src/pages/Portfolio.jsx
import React from "react";
import "../styles/Pages.css";
 // Add a dedicated CSS file for styling

function Portfolio() {
  const portfolioItems = [
    {
      title: "Auto Notes from YouTube",
      description: "Converted over 2,000+ YouTube lectures into structured notes for students.",
      image: "/assets/portfolio/youtube-notes.png",
    },
    {
      title: "Assignment Bot",
      description: "Solved 10,000+ questions across multiple universities using our AI engine.",
      image: "/assets/portfolio/assignment-ai.png",
    },
    {
      title: "Smart Reminder System",
      description: "Integrated with Google Calendar and helped 500+ students meet their deadlines.",
      image: "/assets/portfolio/reminder.png",
    },
    {
      title: "University Onboarding",
      description: "Partnered with 3 colleges to pilot our AI tools campus-wide with rave feedback.",
      image: "/assets/portfolio/university.png",
    },
  ];

  return (
    <div className="page portfolio-page">
      <h2 className="fade-in">Our AI Portfolio</h2>
      <p className="fade-in">Check out how LumioLearn is transforming the way students study across institutions.</p>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card fade-in" key={index}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

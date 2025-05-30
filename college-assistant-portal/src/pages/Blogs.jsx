import React from "react";
import "../styles/Pages.css";

function Blogs() {
  return (
    <div className="page">
      <h2>Latest Blogs</h2>
      <p>Stay updated with our latest AI research, trends, and tips for college students:</p>
      <div className="blog-list">
        <div className="blog-card">
          <h3>🔍 How AI is Transforming Education</h3>
          <p>Explore the profound impact of artificial intelligence on the future of learning, from personalized curricula to automated grading.</p>
          {/* You could add a link to the full blog post here */}
        </div>
        <div className="blog-card">
          <h3>📘 Top 5 AI Tools Every Student Should Use</h3>
          <p>Discover essential AI-powered tools that can help you with research, writing, organization, and time management in your college life.</p>
          {/* You could add a link to the full blog post here */}
        </div>
        <div className="blog-card">
          <h3>🚀 Building Your First AI Project in College</h3>
          <p>A beginner-friendly guide to getting started with your own artificial intelligence projects, including ideas and resources.</p>
          {/* You could add a link to the full blog post here */}
        </div>
        {/* You can add more blog posts here */}
      </div>
    </div>
  );
}

export default Blogs;
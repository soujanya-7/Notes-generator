import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1 className="motto">Welcome to LumioLearn</h1>
          <p className="subtext">
            Your AI-powered learning companion – create smart notes, set assignment reminders, and get instant help on your tasks.
          </p>
        </div>
        <div className="hero-image">
          <img src="/robot.png" alt="AI Robot" />
        </div>
      </section>

      {/* Motto Explanation */}
      <section className="motto-explained">
        <div className="fade-in motto-card">
          <h2>🧠 Learn Smart</h2>
          <p>
            Upload PDFs, paste links, or type in questions — LumioLearn turns everything into clean, structured notes using AI.
          </p>
        </div>
        <div className="fade-in motto-card">
          <h2>🚀 Grow Fast</h2>
          <p>
            Never miss a deadline! Get reminders and auto-solved assignment help to keep your learning journey on track.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="fade-in features">
        <h2>✨ Why Choose LumioLearn?</h2>
        <div className="card-container">
          <div className="feature-card">
            <h3>📓 AI Notes Generator</h3>
            <p>Turn videos, PDFs, or text into detailed, study-ready notes in seconds.</p>
          </div>
          <div className="feature-card">
            <h3>⏰ Smart Reminders</h3>
            <p>Keep track of assignment deadlines, project due dates, and class schedules easily.</p>
          </div>
          <div className="feature-card">
            <h3>📝 Auto Assignment Help</h3>
            <p>Input a question and get instant, well-formatted answers powered by AI.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="fade-in cta-section">
        <h2>Start Learning Smarter with LumioLearn</h2>
        <p>Join hundreds of students automating their learning journey today.</p>
        <a href="/generator" className="cta-button">Try LuminoLearn Now</a>
      </section>
    </main>
  );
};

export default Home;

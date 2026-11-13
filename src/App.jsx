
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>
          ANKIT<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Ankit Rathore</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p className="description">
            I build modern, responsive and user-friendly
            web applications using React.js, Node.js,
            Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            <a
              href="/Ankit_Rathore_Resume.pdf"
              download="Ankit_Rathore_Resume.pdf"
              className="primary-btn"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="location">
            📍 Bhopal, Madhya Pradesh, India
          </div>

          {/* Social Links */}
          <div className="hero-buttons">
            <a
              href="https://github.com/Ankit116227"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-rathore-b8957a31a/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">AR</div>
          <h2>Ankit Rathore</h2>
          <p>MERN Stack Developer</p>

          <div className="availability">
            ● Available for Opportunities
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <p className="section-tag">GET TO KNOW ME</p>

        <h2>
          About <span>Me</span>
        </h2>

        <p>
          I am an aspiring Full Stack Developer from Bhopal,
          passionate about building modern web applications.
          I have completed MERN Stack training and enjoy
          developing practical projects using modern
          technologies.
        </p>
      </section>

      {/* Education Section */}
      <section className="section education" id="education">
        <p className="section-tag">MY QUALIFICATION</p>

        <h2>
          My <span>Education</span>
        </h2>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-icon">🎓</div>

            <h3>Bachelor of Technology (B.Tech)</h3>

            <h4>Computer Science Engineering</h4>

            <p>Vidhyapeeth College, Bhopal</p>

            <p>RGPV University</p>

            <span className="education-status">
              Currently Pursuing
            </span>
          </div>

          <div className="education-card">
            <div className="education-icon">📚</div>

            <h3>Polytechnic Diploma</h3>

            <h4>Electrical & Electronics Engineering</h4>

            <p>
              Technocrats Institute of Science and Technology,
              Bhopal
            </p>

            <p>RGPV University</p>

            <span className="education-status">
              Completed - 2024 | CGPA: 7.52
            </span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <p className="section-tag">MY EXPERTISE</p>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Next.js",
            "Git & GitHub",
            "REST APIs",
          ].map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience" id="experience">
        <p className="section-tag">MY JOURNEY</p>

        <h2>
          Work <span>Experience</span>
        </h2>

        <div className="experience-card">
          <div className="experience-icon">💼</div>

          <h3>Telecalling & Operations Support</h3>

          <h4>Professional Work Experience</h4>

          <p>
            Worked in telecalling and operations support,
            developing communication, team coordination
            and problem-solving skills.
          </p>

          <span className="experience-duration">
            2025 – 2026
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <p className="section-tag">MY RECENT WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          {/* FOODIE Project */}
          <div className="project-card">
            <div className="project-icon">🍔</div>

            <h3>FOODIE</h3>

            <p>
              A restaurant discovery and food ordering
              web application built using the MERN Stack.
            </p>

            <div className="project-tech">
              React.js | Node.js | MongoDB
            </div>

            <p style={{ color: "#d4af37", margin: "15px 0" }}>
              🚧 Development in Progress
            </p>

            <a
              href="https://github.com/Ankit116227/FOODIE"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
              style={{
                marginTop: "15px"
              }}
            >
              View on GitHub →
            </a>
          </div>

          {/* RSTORE Project */}
          <div className="project-card">
            <div className="project-icon">🛒</div>

            <h3>RSTORE</h3>

            <p>
              An electronics e-commerce website with
              product browsing and shopping cart functionality.
            </p>

            <div className="project-tech">
              Next.js | React.js | Tailwind CSS
            </div>

            <div className="hero-buttons">
              <a
                href="https://github.com/Ankit116227/RSTORE"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                View on GitHub →
              </a>

              <a
                href="https://rstore-sand.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
                style={{
                  padding: "10px ",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  height: "43px",
                  borderRadius: "5px",
                  marginTop: "22px"
                  
                }}
              >
                Live Demo ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>
          Let's Work <span>Together</span>
        </h2>

        <p>
          Interested in working together? Feel free to contact me.
        </p>

       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ar8695529@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Send Me an Email
</a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Ankit Rathore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

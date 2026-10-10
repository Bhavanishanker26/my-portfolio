import "./App.css";

function App() {
  const skills = {
    languages: ["Java", "Python", "JavaScript", "SQL"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "Microservices"],
    databases: ["MySQL", "MongoDB", "SQL", "Database Design"],
    aiMl: [
      "PyTorch",
      "EasyOCR",
      "Groq",
      "LLaMA 3.3 70B",
      "Machine Learning",
      "ARIMA",
      "Prompt Engineering",
      "Text Classification",
      "AI / LLM Integration",
    ],
    tools: ["Git", "GitHub", "Docker", "Docker Compose", "Postman", "Linux"],
  };

  const projects = [
    {
      number: "01",
      title: "Edu Lens AI – Visual Learning Assistant",
      description:
        "An AI-powered full-stack visual learning platform that extracts text from PDF documents and images using EasyOCR and classifies study material by subject. It integrates the Groq LLaMA 3.3 70B large language model to generate contextual explanations, quizzes and personalized study suggestions. The application uses a microservices architecture with Docker Compose.",
      technologies: [
        "Python",
        "FastAPI",
        "PyTorch",
        "EasyOCR",
        "Groq",
        "LLaMA 3.3 70B",
        "Node.js",
        "React",
        "MongoDB",
        "Docker",
      ],
      link: "https://github.com/Bhavanishanker26",
    },
    {
      number: "02",
      title: "Sales Forecasting Web Application",
      description:
        "A full-stack web application that forecasts future sales trends from historical sales data. It provides a React interface for uploading datasets and visualizing forecast results, while a Python Flask service performs time-series forecasting using ARIMA and communicates with the Node.js backend through REST APIs.",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Flask",
        "ARIMA",
        "REST APIs",
        "Chart.js",
      ],
      link: "https://github.com/Bhavanishanker26",
    },
    {
      number: "03",
      title: "Parallel Web Crawler",
      description:
        "A parallel web crawling application designed to retrieve and process multiple web pages efficiently using concurrent programming techniques. The project demonstrates parallel execution, URL processing, crawling workflows and a graphical interface for managing the crawler.",
      technologies: ["Python", "Parallel Computing", "Concurrency", "GUI"],
      link: "https://github.com/Bhavanishanker26",
    },
    {
      number: "04",
      title: "Fitness Tracker",
      description:
        "A database-driven fitness management application designed to manage users, workouts, meals, goals and progress. The project focuses on structured database management and CRUD operations using MySQL.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://github.com/Bhavanishanker26",
    },
  ];

  const certifications = [
    {
      number: "01",
      title: "Web Development Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "February 20, 2026",
      type: "Web Development",
      link: "https://www.credly.com/badges/7d2312c1-eecf-4c9f-8a6d-7f4b4841f89f",
    },
    {
      number: "02",
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "March 25, 2026",
      type: "Artificial Intelligence",
      link: "https://www.credly.com/badges/72d7b137-9ce0-4e08-9391-978eb24239db",
    },
    {
      number: "03",
      title: "Data Science 101",
      issuer: "Cognitive Class / IBM Developer Skills Network",
      date: "August 23, 2025",
      type: "Data Science",
      link: "https://courses.cognitiveclass.ai/certificates/69cf5ed5b2354014be96545e7f8b1649",
    },
    {
      number: "04",
      title: "MERN Stack Internship",
      issuer: "Emertxe",
      date: "August 12 – September 16, 2026",
      type: "Internship",
      link: "#experience",
    },
    {
      number: "05",
      title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2027",
      issuer: "Ministry of Youth Affairs & Sports",
      date: "September 11, 2026",
      type: "Participation",
      link: "#achievements",
    },
  ];

  const emailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=bhavanishanker2607@gmail.com";
  const linkedinUrl =
    "https://www.linkedin.com/in/bhavani-shanker-k-263070362/";
  const githubUrl = "https://github.com/Bhavanishanker26";
  const resumeUrl = "/Bhavani_Shanker_Resume.pdf";

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="brand">
          Bhavani<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume ↗
          </a>
          <a href="#contact" className="nav-contact">
            Let's Talk
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="hello-badge">
            <span className="green-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Bhavani
            <br />
            <span>Shanker.</span>
          </h1>

          <h2>
            Final-Year BE Student & <span>Software Developer</span>
          </h2>

          <p className="hero-description">
            Software developer with a strong interest in full-stack development,
            AI and machine learning. I enjoy building practical applications,
            solving programming problems and applying emerging technologies to
            real-world challenges.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <span>↗</span>
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="secondary-btn">
              View Resume
            </a>
          </div>

          <div className="social-row">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={emailUrl} target="_blank" rel="noopener noreferrer">Email ↗</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-circle">
  <div className="profile-inner">
    <img src="/profile.jpg" alt="Bhavani Shanker" />
  </div>
</div>

          <div className="floating-card floating-card-one">
            <strong>15+</strong>
            <span>Technologies</span>
          </div>

          <div className="floating-card floating-card-two">
            <strong>4+</strong>
            <span>Projects</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-title">
          <p>01 — ABOUT ME</p>
          <h2>A little bit <span>about me.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-large">
              I'm a final-year Information Science Engineering student at
              Bengaluru Institute of Technology and an aspiring Software
              Developer with strong foundations in object-oriented programming,
              data structures and algorithms, and full-stack development.
            </p>
            <p>
              I have hands-on experience building AI/ML-powered applications
              involving OCR, LLM integration and time-series forecasting. I
              enjoy developing clean, maintainable software and applying
              technology to real-world problems.
            </p>
            <p>
              My current focus is on strengthening my software engineering,
              AI/ML and full-stack development skills while preparing for
              software development opportunities.
            </p>
          </div>

          <div className="about-info">
            <div><span>Name</span><strong>Bhavani Shanker K</strong></div>
            <div><span>Degree</span><strong>B.E. — Information Science & Engineering</strong></div>
            <div><span>College</span><strong>Bengaluru Institute of Technology</strong></div>
            <div><span>Location</span><strong>Bengaluru, India</strong></div>
            <div><span>Email</span><strong>bhavanishanker2607@gmail.com</strong></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section light-section">
        <div className="section-title">
          <p>02 — SKILLS</p>
          <h2>My <span>toolset.</span></h2>
        </div>

        <div className="skills-category-grid">
          {[
            ["Languages", skills.languages],
            ["Frontend", skills.frontend],
            ["Backend", skills.backend],
            ["Databases", skills.databases],
            ["AI / ML", skills.aiMl],
            ["Tools & DevOps", skills.tools],
          ].map(([title, items]) => (
            <div className="skill-category" key={title}>
              <h3>{title}</h3>
              <div className="skill-line"></div>
              <div className="skill-tags">
                {items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-title">
          <p>03 — EDUCATION</p>
          <h2>My academic <span>journey.</span></h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-year">2023 — 2027</div>
            <div className="education-content">
              <span className="education-label">BACHELOR OF ENGINEERING</span>
              <h3>B.E. Information Science & Engineering</h3>
              <h4>Bengaluru Institute of Technology</h4>
              <p>
                Pursuing Bachelor of Engineering in Information Science &
                Engineering. Expected graduation: May 2027.
              </p>
              <span className="education-tag">Final-Year Student</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-year">2021 — 2023</div>
            <div className="education-content">
              <span className="education-label">PRE-UNIVERSITY EDUCATION</span>
              <h3>PU / Pre-University</h3>
              <h4>Sri Sai Angels PU College</h4>
              <p>
                Completed Pre-University education with an overall percentage
                of <strong>84%</strong>.
              </p>
              <span className="education-tag">84%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section light-section">
        <div className="section-title">
          <p>04 — EXPERIENCE</p>
          <h2>My internship & <span>experience.</span></h2>
        </div>

        <div className="experience-card">
          <div className="experience-number">01</div>
          <div className="experience-main">
            <span className="experience-type">MERN STACK INTERNSHIP</span>
            <h3>Emertxe — MERN Stack Intern</h3>
            <div className="experience-date">
              August 12, 2026 — September 16, 2026
            </div>
            <p>
              Successfully completed an online MERN Stack internship at Emertxe
              and demonstrated practical implementation skills through the
              development of a property booking platform.
            </p>
            <h4>HomelyHub — Property Booking Platform</h4>
            <p>
              Worked on a property booking platform using the MERN stack,
              gaining practical exposure to frontend development, backend
              development, database integration and full-stack application
              implementation.
            </p>
            <div className="experience-tags">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MERN Stack</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-title">
          <p>05 — WHAT I DO</p>
          <h2>What I can <span>build.</span></h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Web Development</h3>
            <p>Building responsive and modern websites and web applications using HTML, CSS, JavaScript and React.</p>
          </div>
          <div className="service-card">
            <span className="service-number">02</span>
            <h3>Full-Stack Development</h3>
            <p>Developing complete applications with frontend interfaces, backend APIs, databases and microservices.</p>
          </div>
          <div className="service-card">
            <span className="service-number">03</span>
            <h3>AI / ML Applications</h3>
            <p>Building practical AI and machine learning applications involving OCR, LLM integration and forecasting.</p>
          </div>
          <div className="service-card">
            <span className="service-number">04</span>
            <h3>Problem Solving</h3>
            <p>Applying data structures, algorithms and analytical thinking to solve programming and software problems.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section light-section">
        <div className="section-title project-heading">
          <div>
            <p>06 — MY PROJECTS</p>
            <h2>Things I've <span>built.</span></h2>
          </div>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-btn">
            View GitHub ↗
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-header">
                <span>{project.number}</span>
                <span>↗</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="section-title">
          <p>07 — CERTIFICATIONS</p>
          <h2>Learning & <span>certifications.</span></h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              <div className="certificate-top">
                <span>{certificate.number}</span>
                <span className="certificate-type">{certificate.type}</span>
              </div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="certificate-date">{certificate.date}</p>
              <a
                href={certificate.link}
                className="certificate-link"
                target={certificate.link.startsWith("http") ? "_blank" : undefined}
                rel={certificate.link.startsWith("http") ? "noreferrer" : undefined}
              >
                {certificate.type === "Participation"
                  ? "View Achievement →"
                  : certificate.type === "Internship"
                  ? "View Experience →"
                  : "Verify Certificate →"}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="section light-section">
        <div className="section-title">
          <p>08 — ACHIEVEMENTS</p>
          <h2>Beyond <span>coding.</span></h2>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-icon">H</div>
            <h3>Hackathons</h3>
            <p>Participated in two hackathons and collaborated with teams to develop technology-based solutions.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">V</div>
            <h3>VBYLD 2027</h3>
            <p>Successfully participated in the Viksit Bharat Young Leaders Dialogue 2027 online quiz conducted on MYBharat.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">S</div>
            <h3>Sports</h3>
            <p>Passionate about volleyball and cricket, developing teamwork, communication and competitive skills.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-box">
          <p>09 — CONTACT</p>
          <h2>Let's work<br /><span>together.</span></h2>
          <p className="contact-description">
            I'm currently looking for software development, full-stack and
            AI/ML opportunities. Feel free to reach out and connect with me.
          </p>

          <div className="contact-buttons">
            <a href={emailUrl} target="_blank" rel="noreferrer" className="primary-btn contact-btn">
              Email Me →
            </a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="contact-resume-btn">
              View Resume ↗
            </a>
          </div>

          <div className="contact-socials">
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={emailUrl} target="_blank" rel="noreferrer">Email</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">Bhavani<span>.</span></div>
        <p>Designed & built by Bhavani Shanker</p>
        <p>© 2026</p>
      </footer>
    </div>
  );
}

export default App;

"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <main>
      {/* <nav>
        <h2>Saurabh</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav> */}
      <nav>
  <h2>Saurabh</h2>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  <div className={menuOpen ? "nav-links open" : "nav-links"}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
    <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
</nav>
      <section id="home" className="hero-section">
  <video
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/nature.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay"></div>

  <div className="hero-content">
    <img
      src="/images/profile.jpg.jpeg"
      alt="Saurabh Kumar"
      className="profile-image"
    />

    <div className="hero-text">
      <p> </p>
      <h1>Saurabh Kumar</h1>
      <h2>Full Stack Web Developer</h2>
      <p>Welcome to my portfolio website.</p>
      {<p>
          I build modern, responsive and user-friendly websites.
        </p>}

      <button>View My Projects</button>
    </div>
  </div>
</section>
<section id="about" className="about-section">
  <div className="about-container">
    <div className="about-title">
      <p>GET TO KNOW ME</p>
      <h2>About Me</h2>
    </div>

    <div className="about-card">
      <div className="about-text">
        <h3>I'm Saurabh Kumar</h3>

        <p>
          I am a Computer Science Engineering student and Full Stack Web
          Developer. I enjoy building modern, responsive and user-friendly
          websites.
        </p>

        <p>
          I am continuously learning new technologies and improving my
          development skills by working on real-world projects.
        </p>

        <div className="about-info">
          <div>
            <strong>Education</strong>
            <span>CSE</span>
          </div>

          <div>
            <strong>Role</strong>
            <span>Full Stack Developer</span>
          </div>

          <div>
            <strong>Experience</strong>
            <span>6-month Training</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <section id="home">
        <div className="hero">
  <img
    src="/images/profile.jpg.jpeg"
    alt="Saurabh Kumar"
    className="profile-image"
  />

  <div className="hero-text">
    <p>    </p>
    <h1>Saurabh Kumar</h1>
    <h2>Full Stack Web Developer</h2>
    <p>Welcome to my portfolio website.</p>
  </div>
</div>

        {<p>
          I build modern, responsive and user-friendly websites.
        </p>}


        <button>View My Projects</button>
      </section> */}

      {/* <section id="about">
        <h2>About Me</h2>

        <p>
          I am a passionate Full Stack Web Developer and Computer Science
          student. I enjoy creating modern websites and learning new
          technologies.
        </p>
      </section> */}
      <section id="skills" className="skills-section">
  <div className="skills-container">
    <div className="section-heading">
      <p>WHAT I KNOW</p>
      <h2>My Skills</h2>
    </div>

    <div className="skills-grid">
      <div className="skill-card">
        <h3>HTML</h3>
        <p>Web Structure</p>
      </div>

      <div className="skill-card">
        <h3>CSS</h3>
        <p>Web Design</p>
      </div>

      <div className="skill-card">
        <h3>JavaScript</h3>
        <p>Web Development</p>
      </div>

      <div className="skill-card">
        <h3>React</h3>
        <p>Frontend Development</p>
      </div>

      <div className="skill-card">
        <h3>Next.js</h3>
        <p>Full Stack Development</p>
      </div>

      <div className="skill-card">
        <h3>Python</h3>
        <p>Programming</p>
      </div>
    </div>
  </div>
</section>

      {/* <section id="skills">
        <h2>My Skills</h2>

        <p>HTML • CSS • JavaScript • React • Next.js • Python</p>
      </section> */}
      <section id="projects" className="projects-section">
  <div className="projects-container">
    <div className="section-heading">
      <p>MY WORK</p>
      <h2>My Projects</h2>
    </div>

    <div className="projects-grid">
      <div className="project-card">
        <div className="project-image">
          Project 01
        </div>

        <div className="project-content">
          <h3>Portfolio Website</h3>
          <p>
            A modern and responsive personal portfolio website built with
            Next.js.
          </p>

          <button>View Project</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-image">
          Project 02
        </div>

        <div className="project-content">
          <h3>Job Portal Website</h3>
          <p>
            A job portal platform designed to connect job seekers and
            employers.
          </p>

          <button>View Project</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-image">
          Project 03
        </div>

        <div className="project-content">
          <h3>Web Development Project</h3>
          <p>
            A responsive web project created using modern web technologies.
          </p>

          <button>View Project</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="experience" className="experience-section">
  <div className="experience-container">
    <div className="section-heading">
      <p>MY JOURNEY</p>
      <h2>Experience</h2>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Full Stack Web Development Training</h3>
          <p className="experience-company">
            Training & Development
          </p>
        </div>

        <span className="experience-date">
          6-month
        </span>
      </div>

      <p className="experience-description">
        Completed 6-month of training in Full Stack Web Development
        and gained practical experience in modern web development
        technologies.
      </p>

      <div className="experience-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Web Development</span>
      </div>
    </div>
  </div>
</section>
<section id="certificates" className="certificates-section">
  <div className="certificates-container">
    <div className="section-heading">
      <p>MY ACHIEVEMENTS</p>
      <h2>Certificates</h2>
    </div>

    <div className="certificates-grid">
      <div className="certificate-card">
        <img
  src="/certificates/full-stack.jpeg"
  alt="Full Stack Web Development Certificate"
  className="certificate-image"
/>
       {/*  <div className="certificate-placeholder"> */}
       {/*    Certificate 01
        </div> */}
       
        <div className="certificate-content">
          <h3>Full Stack Web Development</h3>
          <p>Web Development Certificate</p>
        </div>
      </div>

      <div className="certificate-card">
       <img
  src="/certificates/typing.jpeg"
  alt="Typing Speed Certificate"
  className="certificate-image"
/>

        <div className="certificate-content">
          <h3>Typing Speed Certificate</h3>
          <p>63 WPM</p>
        </div>
      </div>

      <div className="certificate-card">
        <img
  src="/certificates/certificate3.jpeg"
  alt="Certificate"
  className="certificate-image"
/>

        <div className="certificate-content">
          <h3>Python With AI Certificate</h3>
          <p>Achievement</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="gallery" className="gallery-section">
  <div className="gallery-container">
    <div className="section-heading">
      <p>MY MEMORIES</p>
      <h2>Photo Gallery</h2>
    </div>

    <div className="gallery-grid">
      <div className="gallery-item">
        <img src="/images/s1.jpeg" alt="My photo 1" />
      </div>

      <div className="gallery-item">
        <img src="/images/s2.jpeg" alt="My photo 2" />
      </div>

      <div className="gallery-item">
        <img src="/images/s3.jpeg" alt="My photo 3" />
      </div>

      <div className="gallery-item">
        <img src="/images/s4.jpeg" alt="My photo 4" />
      </div>

      <div className="gallery-item">
        <img src="/images/s5.jpeg" alt="My photo 5" />
      </div>

      <div className="gallery-item">
        <img src="/images/s6.jpeg" alt="My photo 6" />
      </div>
    </div>
  </div>
</section>

      {/* <section id="projects">
        <h2>My Projects</h2>

        <h3>Portfolio Website</h3>
        <p>A modern personal portfolio website built with Next.js.</p>

        <h3>Job Portal Website</h3>
        <p>A platform for connecting job seekers and employers.</p>
      </section> */}

      {/* <section id="contact">
        <h2>Contact Me 9334256217</h2>

        <p>Email: saurabhkrpandey2@gmail.com</p>
      </section> */}
      <section id="contact" className="contact-section">
  <div className="contact-container">

    <div className="section-heading">
      <p>GET IN TOUCH</p>
      <h2>Contact Me</h2>
    </div>

    <div className="contact-wrapper">

      <div className="contact-info">
        <h3>Let's Connect</h3>

        <p>
          If you want to discuss a project, collaboration or
          anything related to web development, feel free to contact me.
        </p>

        <div className="contact-detail">
          <strong>Email</strong>
          <span>saurabhkrpandey2@gmail.com</span>
        </div>

        <div className="contact-detail">
          <strong>Phone</strong>
          <span>+91 9334256217</span>
        </div>
        <div className="social-links">
  <a 
    href="https://www.instagram.com/saurabh_kr_pandey?igsi=ZGk2OXV2Ynd5azA4 "
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/saurbh.saurbhpandey.7"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>
</div>
      </div>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  </div>
</section>
<footer className="footer">
  <div className="footer-content">
    <h3>Saurabh Kumar</h3>

    <p>
      Full Stack Web Developer
    </p>

    <div className="footer-links">
      <a
        href="https://www.instagram.com/saurabh_kr_pandey"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>

      <a
        href="https://www.facebook.com/YOUR_saurabh kr pandey"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </div>

    <p className="copyright">
      © 2026 Saurabh Kumar. All Rights Reserved.
    </p>
  </div>
</footer>
    </main>
   
  );
}
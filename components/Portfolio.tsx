"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import { portfolioData } from "@/data/portfolio";

const projects = portfolioData.projects;
const experience = portfolioData.experience;
const certifications = portfolioData.certifications;

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const skillFlow = [
    {
      title: "Frontend",
      subtitle: "React / Next.js",
      icon: Monitor,
    },
    {
      title: "API Layer",
      subtitle: "Java / Spring Boot",
      icon: Server,
    },
    {
      title: "Data",
      subtitle: "SQL / MongoDB",
      icon: Database,
    },
    {
      title: "Validation",
      subtitle: "Playwright / E2E",
      icon: CheckCircle2,
    },
  ];

  const buildItems = [
    {
      number: "01",
      title: "Backend Systems",
      stack: "Java · Spring Boot · REST",
      description:
        "REST APIs, backend services, SQL-driven systems and microservice-based applications.",
      icon: Server,
    },
    {
      number: "02",
      title: "Web Applications",
      stack: "React · Next.js · TypeScript",
      description:
        "Responsive and modern web experiences focused on usability, structure and maintainable code.",
      icon: Monitor,
    },
    {
      number: "03",
      title: "Test Automation",
      stack: "Playwright · E2E · JavaScript",
      description:
        "End-to-end automation for customer-facing applications and complex business workflows.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Data & Integration",
      stack: "SQL · MongoDB · CRM",
      description:
        "Database-backed applications, CRM integrations and reliable business-data synchronization.",
      icon: Database,
    },
  ];

  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      {/* ========================= NAVBAR ========================= */}
      <nav className="site-nav">
        <div className="section-shell nav-inner">
          <a
            href="#top"
            className="brand"
            aria-label={`${portfolioData.profile.name} home`}
            onClick={closeMenu}
          >
            <span className="brand-mark">PT</span>

            <span className="brand-name">
              {portfolioData.profile.name.split(" ")[0]}
              <span>.</span>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a className="nav-link" href="#about" onClick={closeMenu}>
              About
            </a>

            <a className="nav-link" href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a className="nav-link" href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a className="nav-link" href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a className="nav-link" href="#education" onClick={closeMenu}>
              Education
            </a>

            <a className="nav-link" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <a
            href={portfolioData.profile.resume}
            className="nav-resume"
            download
          >
            Resume
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="nav-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              About
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#skills"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Skills
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#experience"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Experience
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Projects
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#education"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Education
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Contact
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </nav>

      {/* ========================= HERO ========================= */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="section-shell hero-inner">
          <div>
            <span className="status-pill">
              <span className="status-dot" />
              Software Development Engineer
            </span>

            <p className="eyebrow" style={{ marginTop: 26 }}>
              Hello, I&apos;m
            </p>

            <h1 className="hero-title">
              {portfolioData.profile.name.split(" ")[0]}{" "}
              <span>
                {portfolioData.profile.name
                  .split(" ")
                  .slice(1)
                  .join(" ")}
                .
              </span>
            </h1>

            <p className="hero-subtitle">
              Building reliable software systems, backend services and
              automated workflows.
            </p>

            <p className="hero-copy">
              I&apos;m a Software Development Engineer working across Java,
              Spring Boot, REST APIs, SQL, microservices and Playwright
              automation — with a focus on building practical,
              maintainable software.
            </p>

            <div className="hero-actions">
              <a
                href="#experience"
                className="btn btn-primary"
              >
                View Experience
                <ArrowUpRight size={17} />
              </a>

              <a
                href={portfolioData.profile.resume}
                className="btn btn-ghost"
                download
              >
                Download Resume
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="social-icon"
                href={portfolioData.profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                className="social-icon"
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                className="social-icon"
                href={`mailto:${portfolioData.profile.email}`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <span className="hero-location">
                {portfolioData.profile.location}
              </span>
            </div>

            <p className="scroll-cue">
              SCROLL TO EXPLORE ↓
            </p>
          </div>

          <div className="hero-panel-wrap">
            <div className="hero-panel-glow" />

            <div className="hero-panel card">
              <div className="hero-panel-top">
                <span className="status-dot" />
                <span>Available for opportunities</span>
              </div>

              <div className="hero-panel-content">
                <div className="avatar-mark">PT</div>

                <p className="eyebrow" style={{ marginTop: 22 }}>
                  Currently focused on
                </p>

                <p
                  style={{
                    marginTop: 8,
                    color: "#f8fafc",
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Backend Engineering
                </p>

                <p
                  style={{
                    marginTop: 8,
                    color: "#94a3b8",
                    fontSize: ".86rem",
                    lineHeight: 1.7,
                  }}
                >
                  Designing APIs, working with distributed systems and
                  improving software quality through automation.
                </p>

                <div className="hero-panel-tags">
                  {portfolioData.skills.core
                    .slice(0, 5)
                    .map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                </div>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>{experience.length}</strong>
                  <span>Roles</span>
                </div>

                <div>
                  <strong>{projects.length}</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>{certifications.length}+</strong>
                  <span>Certifications</span>
                </div>
              </div>

              <div className="hero-panel-footer">
                <span>Software Engineering · Pune</span>
                <Sparkles size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= ABOUT ========================= */}
      <section id="about" className="section about-section">
        <div className="section-shell">
          <div className="about-heading-row">
            <div>
              <p className="section-kicker">01 — About</p>

              <h2 className="section-title">
                Engineering with purpose.
              </h2>

              <p className="section-description">
                I enjoy turning business requirements into reliable
                software systems, clean APIs and automated workflows.
              </p>
            </div>

            <div className="about-heading-mark">
              <span>PT</span>
              <small>ENGINEERING</small>
            </div>
          </div>

          <div className="about-main-grid" style={{ marginTop: 34 }}>
            <article className="about-story-card card">
              <div className="about-story-top">
                <span className="section-kicker">
                  My approach
                </span>

                <Sparkles
                  size={19}
                  style={{ color: "#7dd3fc" }}
                />
              </div>

              <p className="about-lead">
                I build software with a strong focus on reliability,
                maintainability and understanding the complete system.
              </p>

              <p className="about-body">
                I&apos;m a Software Development Engineer with experience
                across backend development, REST APIs, SQL, microservices
                and end-to-end test automation.
              </p>

              <p className="about-body">
                My experience includes working with Java and Spring Boot
                on backend systems, as well as Playwright-based
                automation for customer-facing and business workflows.
              </p>

              <div className="about-focus-row">
                <div>
                  <span className="about-focus-number">01</span>

                  <div>
                    <strong>Build</strong>
                    <small>Clean & maintainable systems</small>
                  </div>
                </div>

                <div>
                  <span className="about-focus-number">02</span>

                  <div>
                    <strong>Integrate</strong>
                    <small>Connect services & data</small>
                  </div>
                </div>

                <div>
                  <span className="about-focus-number">03</span>

                  <div>
                    <strong>Validate</strong>
                    <small>Automate & improve quality</small>
                  </div>
                </div>
              </div>
            </article>

            <aside className="about-side-card">
              <div className="about-side-header">
                <div>
                  <p className="section-kicker">What matters</p>

                  <h3
                    style={{
                      marginTop: 7,
                      color: "#f8fafc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Engineering mindset
                  </h3>
                </div>

                <Code2
                  size={20}
                  style={{ color: "#7dd3fc" }}
                />
              </div>

              <div className="about-focus-list">
                <div className="about-focus-item">
                  <div className="about-focus-icon">
                    <Server size={17} />
                  </div>

                  <div>
                    <strong>Reliable systems</strong>

                    <p>
                      Understand how components work together before
                      solving individual problems.
                    </p>
                  </div>
                </div>

                <div className="about-focus-item">
                  <div className="about-focus-icon">
                    <Database size={17} />
                  </div>

                  <div>
                    <strong>Data consistency</strong>

                    <p>
                      Pay attention to APIs, databases and
                      synchronization between systems.
                    </p>
                  </div>
                </div>

                <div className="about-focus-item">
                  <div className="about-focus-icon">
                    <CheckCircle2 size={17} />
                  </div>

                  <div>
                    <strong>Software quality</strong>

                    <p>
                      Use automation and testing to make software more
                      dependable.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="about-value-grid" style={{ marginTop: 20 }}>
            <div className="about-value-card">
              <div className="about-value-top">
                <span>01</span>
                <Server size={17} />
              </div>

              <h3>Backend First</h3>

              <p>
                Comfortable working with Java, Spring Boot, REST APIs,
                SQL and service-oriented applications.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-top">
                <span>02</span>
                <Layers3 size={17} />
              </div>

              <h3>System Thinking</h3>

              <p>
                Interested in understanding integrations, dependencies,
                data flow and real-world business workflows.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-top">
                <span>03</span>
                <CheckCircle2 size={17} />
              </div>

              <h3>Quality Mindset</h3>

              <p>
                Use automation and structured testing to catch issues
                early and improve application reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= WHAT I BUILD ========================= */}
      <section className="section section-alt">
        <div className="section-shell">
          <div>
            <p className="section-kicker">02 — What I Build</p>

            <h2 className="section-title">
              From APIs to automated workflows.
            </h2>

            <p className="section-description">
              A practical engineering approach across backend systems,
              applications, integrations and quality automation.
            </p>
          </div>

          <div
            className="build-grid"
            style={{ marginTop: 38 }}
          >
            {buildItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="build-card card"
                  key={item.number}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span className="build-number">
                      {item.number}
                    </span>

                    <div className="build-icon">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p className="build-stack">
                    {item.stack}
                  </p>

                  <p
                    style={{
                      marginTop: 13,
                      color: "#94a3b8",
                      lineHeight: 1.75,
                      fontSize: ".88rem",
                    }}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= SKILLS ========================= */}
      <section id="skills" className="section skills-section">
        <div className="section-shell">
          <div className="skills-section-intro">
            <div>
              <p className="section-kicker">03 — Skills</p>

              <h2 className="section-title">
                The stack behind the work.
              </h2>

              <p className="section-description">
                A growing engineering toolkit covering development,
                automation, databases and modern web technologies.
              </p>
            </div>

            <div className="skills-summary">
              <div className="skills-summary-icon">
                <Layers3 size={18} />
              </div>

              <div>
                <strong>Engineering Toolkit</strong>
                <span>
                  {Object.values(portfolioData.skills).flat().length}+
                  technologies & tools
                </span>
              </div>
            </div>
          </div>

          <div
            className="skills-layout"
            style={{ marginTop: 38 }}
          >
            <div className="skills-architecture-wrap">
              <div className="skills-architecture">
                <div className="skills-architecture-top">
                  <div>
                    <p className="section-kicker">
                      System flow
                    </p>

                    <p
                      style={{
                        marginTop: 7,
                        color: "#f8fafc",
                        fontWeight: 750,
                      }}
                    >
                      How I approach software
                    </p>
                  </div>

                  <span className="skills-live">
                    <span />
                    ACTIVE STACK
                  </span>
                </div>

                <div className="skills-flow">
                  {skillFlow.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="skills-flow-step"
                        key={item.title}
                      >
                        <div className="skills-flow-node">
                          <Icon size={18} />
                        </div>

                        <div>
                          <strong>{item.title}</strong>
                          <span>{item.subtitle}</span>
                        </div>

                        {index < skillFlow.length - 1 && (
                          <span className="skills-flow-line" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="skills-architecture-footer">
                  <span>Clean Code</span>
                  <span>API Design</span>
                  <span>Data</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>

            <div className="skills-groups">
              <div className="skill-group card">
                <div className="skill-card-header">
                  <Server size={20} />
                  <h3>Core Engineering</h3>
                </div>

                <p>
                  Backend and system development technologies.
                </p>

                <div className="skill-tags">
                  {portfolioData.skills.core.map((skill) => (
                    <span className="pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-group card">
                <div className="skill-card-header">
                  <Monitor size={20} />
                  <h3>Frontend</h3>
                </div>

                <p>
                  Modern web development and interface technologies.
                </p>

                <div className="skill-tags">
                  {portfolioData.skills.frontend.map((skill) => (
                    <span className="pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-group card">
                <div className="skill-card-header">
                  <CheckCircle2 size={20} />
                  <h3>Automation</h3>
                </div>

                <p>
                  Testing and automation across end-to-end workflows.
                </p>

                <div className="skill-tags">
                  {portfolioData.skills.automation.map((skill) => (
                    <span className="pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-group card">
                <div className="skill-card-header">
                  <Layers3 size={20} />
                  <h3>Tools & Platforms</h3>
                </div>

                <p>
                  Development, collaboration and platform tooling.
                </p>

                <div className="skill-tags">
                  {portfolioData.skills.tools.map((skill) => (
                    <span className="pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= EXPERIENCE ========================= */}
      <section id="experience" className="section section-alt">
        <div className="section-shell">
          <div className="experience-section-intro">
            <div>
              <p className="section-kicker">04 — Experience</p>

              <h2 className="section-title">
                Where I&apos;ve worked.
              </h2>

              <p className="section-description">
                Professional experience across software development,
                backend engineering and test automation.
              </p>
            </div>

            <div className="experience-summary">
              <div className="experience-summary-icon">
                <BriefcaseBusiness size={18} />
              </div>

              <div>
                <strong>{experience.length} roles</strong>
                <span>Software engineering journey</span>
              </div>
            </div>
          </div>

          <div
            className="timeline-wrap"
            style={{ marginTop: 40 }}
          >
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className={`experience-card ${
                  index === 0
                    ? "experience-card-current"
                    : ""
                }`}
              >
                <span
                  className={`timeline-dot ${item.accent}`}
                />

                <div className="experience-card-inner">
                  <div className="experience-head">
                    <div className="experience-title-block">
                      <div className="experience-meta-row">
                        <p
                          className={`experience-date ${item.accent}`}
                        >
                          {item.period}
                        </p>

                        {index === 0 && (
                          <span className="current-role-badge">
                            <span />
                            Current
                          </span>
                        )}
                      </div>

                      <h3>{item.role}</h3>

                      <p className="experience-company">
                        {item.company}
                        <span> · </span>
                        {item.location}
                      </p>
                    </div>

                    <span
                      className={`experience-type ${item.accent}`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  <div className="experience-content-grid">
                    <div className="experience-points">
                      {item.points.map((point) => (
                        <div
                          className="experience-point"
                          key={point}
                        >
                          <span className="experience-point-icon">
                            <CheckCircle2 size={14} />
                          </span>

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="experience-stack">
                      <div className="experience-stack-label">
                        <span>STACK</span>
                        <Code2 size={13} />
                      </div>

                      <div className="experience-stack-list">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= ARCHITECTURE ========================= */}
      <section className="section">
        <div className="section-shell">
          <p className="section-kicker">05 — Architecture</p>

          <h2 className="section-title">
            Thinking beyond individual features.
          </h2>

          <p className="section-description">
            I focus on how applications, services, data and testing
            workflows work together as a complete system.
          </p>

          <div
            className="architecture-card card"
            style={{ marginTop: 38 }}
          >
            <div className="architecture-node">
              <span>
                <Monitor size={20} />
              </span>

              <div>
                <strong>Client</strong>
                <small>Web / Portal</small>
              </div>
            </div>

            <div className="architecture-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="architecture-node">
              <span>
                <Server size={20} />
              </span>

              <div>
                <strong>API Layer</strong>
                <small>REST / Services</small>
              </div>
            </div>

            <div className="architecture-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="architecture-node">
              <span>
                <Database size={20} />
              </span>

              <div>
                <strong>Data</strong>
                <small>SQL / MongoDB</small>
              </div>
            </div>

            <div className="architecture-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="architecture-node">
              <span>
                <CheckCircle2 size={20} />
              </span>

              <div>
                <strong>Automation</strong>
                <small>Playwright / E2E</small>
              </div>
            </div>

            <div className="architecture-bottom">
              <div>
                <Sparkles size={14} />
                Build
              </div>

              <div>
                <ArrowRight size={14} />
                Integrate
              </div>

              <div>
                <CheckCircle2 size={14} />
                Validate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= PROJECTS ========================= */}
      <section id="projects" className="section section-alt">
        <div className="section-shell">
          <p className="section-kicker">06 — Projects</p>

          <h2 className="section-title">
            Things I&apos;ve built.
          </h2>

          <p className="section-description">
            Selected projects covering web development, databases,
            applications and software engineering.
          </p>

          <div
            className="projects-grid"
            style={{ marginTop: 38 }}
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${
                  index === 0 ? "project-featured" : ""
                }`}
              >
                <div className="project-top">
                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={18} />
                  </a>
                </div>

                <div className="project-icon">
                  <Code2 size={23} />
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-highlights">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>
                      <CheckCircle2 size={14} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="project-tags"
                  style={{ marginTop: 20 }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= EDUCATION ========================= */}
      <section id="education" className="section">
        <div className="section-shell">
          <p className="section-kicker">07 — Education</p>

          <h2 className="section-title">
            Academic foundation.
          </h2>

          <p className="section-description">
            The foundation behind my software engineering journey.
          </p>

          <div
            className="education-grid"
            style={{ marginTop: 38 }}
          >
            <div className="education-card card">
              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <p className="education-period">
                  {portfolioData.education.period}
                </p>

                <h3>{portfolioData.education.degree}</h3>

                <p className="education-college">
                  {portfolioData.education.college}
                </p>

                <p className="education-field">
                  {portfolioData.education.field}
                </p>
              </div>
            </div>

            <div className="education-subjects">
              <p className="education-subjects-title">
                Relevant Coursework
              </p>

              <div className="education-subject-tags">
                {portfolioData.education.subjects.map(
                  (subject) => (
                    <span key={subject}>{subject}</span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= CERTIFICATIONS ========================= */}
      <section className="section section-alt">
        <div className="section-shell">
          <p className="section-kicker">
            08 — Certifications
          </p>

          <h2 className="section-title">
            Always learning.
          </h2>

          <p className="section-description">
            Certifications and courses supporting continuous
            technical growth.
          </p>

          <div
            className="certifications-grid"
            style={{ marginTop: 38 }}
          >
            {certifications.map(([title, issuer]) => (
              <div className="certification-card" key={title}>
                <div className="certification-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CONTACT ========================= */}
      <section
        id="contact"
        className="section contact-section"
      >
        <div className="section-shell">
          <div className="contact-card">
            <div className="contact-glow" />

            <div className="contact-copy">
              <p className="section-kicker">09 — Contact</p>

              <h2>
                Let&apos;s build something
                <span> meaningful.</span>
              </h2>

              <p>
                I&apos;m open to software engineering opportunities,
                interesting projects and conversations around
                technology.
              </p>

              <a
                className="contact-email"
                href={`mailto:${portfolioData.profile.email}`}
              >
                <Mail size={18} />
                {portfolioData.profile.email}
              </a>
            </div>

            <div className="contact-details">
              <div className="contact-person">
                <div className="contact-avatar">PT</div>

                <div>
                  <h3>{portfolioData.profile.name}</h3>
                  <p>{portfolioData.profile.role}</p>
                </div>
              </div>

              <div className="contact-detail">
                <MapPin size={18} />
                <span>{portfolioData.profile.location}</span>
              </div>

              <div className="contact-links">
                <a
                  href={portfolioData.profile.github}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={portfolioData.profile.linkedin}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={portfolioData.profile.resume}
                  className="contact-link"
                  download
                >
                  <BriefcaseBusiness size={18} />
                  <span>Resume</span>
                  <ArrowDown size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>
            © {new Date().getFullYear()}{" "}
            {portfolioData.profile.name}. All rights reserved.
          </p>

          <p>
            Java · Spring Boot · React · Next.js · Playwright
          </p>
        </div>
      </footer>
    </main>
  );
}
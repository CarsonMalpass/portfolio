import { Link } from 'react-router-dom'
import {
  Settings, FlaskConical, Factory, Code2, Wrench, BarChart3,
  Mail, Phone, Download, ArrowRight, ChevronRight,
  MapPin, GraduationCap, Briefcase, Trophy, ExternalLink
} from 'lucide-react'

const skillCategories = [
  {
    Icon: Settings,
    category: 'CAD & Design',
    tags: ['SolidWorks (CSWA)', 'SW FEA', 'SW Visualize', 'AutoCAD', 'Revit', 'SketchUp', 'GD&T'],
  },
  {
    Icon: FlaskConical,
    category: 'Simulation & Analysis',
    tags: ['SolidWorks FEA', 'Structural Analysis', 'Thermal Analysis', 'EES', 'MATLAB'],
  },
  {
    Icon: Factory,
    category: 'Manufacturing',
    tags: ['3D Printing (FDM/Resin)', 'Manual Mill & Lathe', 'MIG/TIG Welding', 'Sand Casting', 'Sheet Metal', 'Waterjet'],
  },
  {
    Icon: Code2,
    category: 'Software & Electronics',
    tags: ['MATLAB', 'C++', 'Arduino', 'LabVIEW', 'Eagle', 'PCB Mfg', 'Soldering'],
  },
  {
    Icon: Wrench,
    category: 'Engineering Practice',
    tags: ['Engineering Drawings', 'BOM & PRF', 'SOPs', 'PDR / CDR Reviews', 'FE – Mechanical'],
  },
  {
    Icon: BarChart3,
    category: 'Leadership & Business',
    tags: ['Project Management', 'Operations', 'Recruitment', 'Client Relations', 'Budget Management'],
  },
]

const projects = [
  {
    id: 'fsae-steering',
    slug: '/projects/fsae-steering',
    image: '/images/fsae/sw_photo2.jpg',
    category: 'Formula SAE · CU Racing',
    title: 'Steering Wheel & Column Design',
    description:
      'Designed the steering wheel and column for the CB5 & CB6 competition vehicles. Multi-load-case FEA to exceed 1.5× FOS, integrated paddle-shift assemblies, full SDR→CDR→manufacturing lifecycle.',
    tags: ['SolidWorks', 'FEA', 'GD&T', 'Design Reviews'],
    hasPage: true,
  },
  {
    id: 'vacuum-chamber',
    image: '/images/projects/vacuum_chamber.png',
    category: 'Internship · Malin Space Science Systems',
    title: 'High-Vacuum Chamber',
    description:
      'Designed and assembled a vacuum chamber to simulate near-space environments for Mars camera hardware. SolidWorks components reviewed through formal TDRs; coordinated with CNC machinists for flight-grade tolerances.',
    tags: ['SolidWorks', 'Vacuum Systems', 'Aerospace', 'CNC'],
  },
  {
    id: 'hd-vam',
    image: null,
    category: 'Internship · Manifest Technologies',
    title: 'HD VAM Athena Printer',
    description:
      "Co-developed the Athena printer's 80/20 frame, LED latent-curing system, and optical z-fold laser assemblies for a proprietary High-Definition Volumetric Additive Manufacturing platform.",
    tags: ['Additive Mfg', 'Optics', 'Mechanical Design', 'SOPs'],
  },
  {
    id: 'wabtec-rotor',
    image: null,
    category: 'Senior Design · Wabtec',
    title: 'Locomotive Rotor Lock',
    description:
      'Designing a rotor lock for remanufactured combination traction motors applying 14,000 lb axial and 7,000 lb radial loads. FEA to achieve >1.5 FOS with PDR, CDR, and MRR presentations to Wabtec engineers.',
    tags: ['FEA', 'SolidWorks', 'Structural', 'Client Work'],
  },
  {
    id: 'fsae-suspension',
    image: '/images/fsae/control_arm_1.png',
    category: 'Formula SAE · CU Racing',
    title: 'Control Arms & Uprights',
    description:
      'Verified design, fabricated tube stock via MDF jigs, drilled and reamed bearing housings, and pressed/staked all bearings. Wrote manufacturing SOPs, BOMs, and integrated full double-A-arm geometry.',
    tags: ['Manufacturing', 'SolidWorks', 'Suspension', 'Machining'],
  },
  {
    id: 'cubesat',
    image: null,
    category: 'Aerospace Computing · CU Boulder',
    title: 'CO₂ Research CubeSat',
    description:
      'Balloon-launched CubeSAT on $200 budget measuring CO₂ to 105,000 ft. Integrated sensors, GoPro, and Arduino Uno; analyzed post-flight altitude and CO₂ trend data.',
    tags: ['Arduino', 'Sensors', 'Data Analysis', 'Integration'],
  },
]

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Carson<span className="accent">.</span>
      </Link>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:Carsonrmalpass@gmail.com" className="btn-nav">
        <Mail size={15} />
        Hire Me
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Incoming FCG Engineer · Ford Motor Company
          </div>
          <h1 className="hero-name">
            Carson R.<br />
            <span className="accent">Malpass</span>
          </h1>
          <p className="hero-title">Mechanical Engineer</p>
          <p className="hero-description">
            B.S. Mechanical Engineering — University of Colorado Boulder.
            From Formula SAE racecars and space cameras to additive
            manufacturing and locomotive hardware — I build things that have
            to work.
          </p>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <MapPin size={14} />
              Boulder, CO
            </span>
            <span className="hero-meta-item">
              <GraduationCap size={14} />
              CU Boulder · May 2026
            </span>
            <span className="hero-meta-item">
              <Briefcase size={14} />
              Ford Motor Company
            </span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
        <div className="hero-photo-col">
          <div className="hero-photo-frame">
            <div className="hero-photo-placeholder">
              <span className="hero-initials">CM</span>
              <div className="hero-photo-ring" />
            </div>
            <div className="hero-photo-badge">
              <Trophy size={14} />
              <span>FSAE President</span>
            </div>
            <div className="hero-photo-badge hero-photo-badge-2">
              <Settings size={14} />
              <span>CSWA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Carson R. Malpass, a mechanical engineering student at the
              University of Colorado Boulder graduating May 2026, and an
              incoming Product Development FCG Engineer at Ford Motor Company.
            </p>
            <p>
              My engineering experience spans professional internships in
              additive manufacturing, aerospace hardware, and robotics —
              alongside four years of hands-on leadership building competition
              racecars as President, Project Manager, and Chief Chassis
              Engineer of CU Racing.
            </p>
            <p>
              I thrive at the intersection of rigorous analysis and real
              fabrication. Whether it's running FEA, machining parts on a
              manual mill, or standing up a camera in a vacuum chamber, I
              close the gap between design and hardware.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3.35</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">B.S.</span>
              <span className="stat-label">Mech. Eng. · CU Boulder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-wrapper section-alt">
      <div className="section">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Tools & Skills</h2>
        <p className="section-subtitle">
          The software, methods, and technologies I use to bring ideas to life.
        </p>
        <div className="divider" />
        <div className="skills-grid">
          {skillCategories.map(({ Icon, category, tags }) => (
            <div className="skill-card" key={category}>
              <div className="skill-card-icon">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="skill-card-title">{category}</h3>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const inner = (
    <div className="project-card">
      <div className="project-card-img">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card-img-placeholder">
            <Settings size={32} strokeWidth={1} className="placeholder-icon" />
          </div>
        )}
        {project.hasPage && (
          <div className="project-card-link-badge">
            <ExternalLink size={12} />
            View Details
          </div>
        )}
      </div>
      <div className="project-card-body">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        {project.hasPage && (
          <div className="project-card-cta">
            <span>Full Case Study</span>
            <ChevronRight size={14} />
          </div>
        )}
      </div>
    </div>
  )

  if (project.hasPage) {
    return <Link to={project.slug} className="project-card-link">{inner}</Link>
  }
  return inner
}

function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="section">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Engineering projects from concept through manufacturing and competition.
        </p>
        <div className="divider" />
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="section-wrapper section-alt">
      <div className="section">
        <span className="section-label">Resume</span>
        <h2 className="section-title">My Credentials</h2>
        <div className="divider" />
        <div className="resume-card">
          <div className="resume-card-left">
            <h3>Carson R. Malpass</h3>
            <p className="resume-subtitle">
              B.S. Mechanical Engineering · University of Colorado Boulder
            </p>
            <div className="resume-highlights">
              <div className="resume-highlight-item">
                <GraduationCap size={15} />
                <span>GPA 3.35 · Minor in Engineering Management</span>
              </div>
              <div className="resume-highlight-item">
                <Wrench size={15} />
                <span>FE – Mechanical Certified</span>
              </div>
              <div className="resume-highlight-item">
                <Trophy size={15} />
                <span>CU Racing: President, PM, Chief Chassis Engineer</span>
              </div>
              <div className="resume-highlight-item">
                <Briefcase size={15} />
                <span>Incoming FCG Engineer · Ford Motor Company</span>
              </div>
            </div>
          </div>
          <div className="resume-card-right">
            <a href="/resume.pdf" download className="btn-primary btn-large">
              <Download size={18} />
              Download Resume
            </a>
            <p className="resume-note">PDF · Updated 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.querySelector('#name').value
    const message = e.target.querySelector('#message').value
    window.location.href = `mailto:Carsonrmalpass@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className="section-wrapper">
      <div className="section">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an opportunity or just want to connect? My inbox is open.
        </p>
        <div className="divider" />
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk</h3>
            <p>
              Whether you're looking for a mechanical engineer to join your
              team, collaborate on a project, or just want to connect —
              reach out.
            </p>
            <div className="contact-links">
              <a href="mailto:Carsonrmalpass@gmail.com" className="contact-link">
                <span className="contact-link-icon">
                  <Mail size={16} />
                </span>
                Carsonrmalpass@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/carsonmalpass/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">
                  <ExternalLink size={16} />
                </span>
                linkedin.com/in/carsonmalpass
              </a>
              <a href="tel:7205377474" className="contact-link">
                <span className="contact-link-icon">
                  <Phone size={16} />
                </span>
                (720) 537-7474
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Jane Smith" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn-primary">
              <Mail size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Carson R. Malpass · Mechanical Engineer</p>
        <div className="footer-links">
          <a href="mailto:Carsonrmalpass@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/carsonmalpass/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf" download>Resume</a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}
